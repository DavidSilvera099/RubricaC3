import jwt from "jsonwebtoken"
import config from "./config/config.js"
console.log(config)
export const validarToken = (req, res, next)=>{
    const {token} = req.cookies
    if(!token) return res.send({message: 'autorizacion denegada'})
    jwt.verify(token,config.KEYSECRET_JWT,(error,user)=>{
        if(error)return res.send({message: 'Token invalido'})
        req.user = user
        next();
})
}