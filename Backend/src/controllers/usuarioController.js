import { conn } from "../config/db.js";
import bcrypt from 'bcryptjs'
import jwtoken from 'jsonwebtoken'
import config from '../config/config.js'


export const Registrarse = async(req,res)=>{
    try {
        const {nombre, apellido, telefono, email, password} = req.body
        const hashPassword = await bcrypt.hash(password, 10)
        const [response] = await conn.query('INSERT INTO usuarios (nombre, apellido, telefono, email, password) VALUES (?, ?, ?, ?, ?)', [nombre, apellido, telefono, email, hashPassword])
        if(response.affectedRows === 0) return res.status(404).send({message: 'Error al registrar'})
        const idUsuario = response.insertId
        const usuarioInfo = {idUsuario, nombre, apellido, telefono, email}
        jwtoken.sign(usuarioInfo, config.KEYSECRET_JWT,  { expiresIn: '1h' }, (error, token) => {
            if (error) return console.log(error);
            res.cookie('token', token);
            res.status(200).send(usuarioInfo);
        });
    } catch (error) {
        console.log(error.message)
        res.status(500).send({ message: error.message })
    }
}

export const iniciarSesion = async (req, res) => {
    try {
        const { email, password } = req.body;
        const [response] = await conn.query('SELECT * FROM usuarios WHERE email= ?', [email]);
        if (response.length === 0) {
            return res.status(404).send({ message: "Verifique Email" });
        }
        const usuarioInfo =response[0];
       
        let EquealsPassword = false;
        if (usuarioInfo.admin) {
            EquealsPassword = usuarioInfo.password === password;
        } else {
            EquealsPassword = await bcrypt.compare(password, usuarioInfo.password);
        }

        if (!EquealsPassword) {
            return res.status(401).send({message:'Credenciales invalidas'});
        }
        delete usuarioInfo.password;


        jwtoken.sign({usuarioInfo},config.KEYSECRET_JWT, { expiresIn: '1h' }, (error, token) => {
            if (error) {
                console.log(`Error token: ${error}`);
                return res.status(401).send("Error no se genero token" );
            }
            res.cookie('token', token);
            res.status(200).send(usuarioInfo);
        });
    } catch (error) {
        console.log(`Error:`,error.message);
        res.status(500).send({message: error.message});
    }
};

export const cerrarSesion = (req,res)=>{
    res.cookie('token', '',{
    expires: new Date(0)
   })
   return res.sendStatus(200);
}

export const actualizarUsuario = async(req, res)=>{
    try {
        const {nombre, apellido, password, email, idusuario} = req.body
        if(password){
            const hashPassword = await bcrypt.hash(password, 10);
            const [response] = await conn.query('UPDATE usuarios SET nombre=?, apellido=?, password=?, email=? WHERE idusuario=?', [nombre, apellido, hashPassword, email, idusuario]);
            if(response.affectedRows === 0){
                return res.status(404).send({message: "Error al actualizar"});
            }
            return res.status(200).send({message: "Usuario actualizado "});
        }
       const [response] = await conn.query('SELECT password FROM usuarios WHERE idusuario=?', [idusuario])
        const passwordResponse = response[0].password 
        const [data] = await conn.query('UPDATE usuarios SET nombre=?, apellido=?, password=?, email=? WHERE idusuario=?',[nombre, apellido, passwordResponse, email, idusuario]);
            if(data.affectedRows === 0){
                return res.status(404).send({message: "Error al actualizar"});
            }
            return res.status(200).send({message: "Usuario actualizado"});

    } catch (error) {
        console.log(error);
        res.satus(500).send({message: 'Email registrado'});
    }
}

