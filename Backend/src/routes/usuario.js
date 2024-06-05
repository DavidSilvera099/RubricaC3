import { Router } from "express";
import { validarToken } from "../ValidarToken.js";
import { actualizarUsuario, Registrarse, iniciarSesion, cerrarSesion } from "../controllers/usuarioController.js";
const usuarioRoutes = Router();
usuarioRoutes.post('/registrar', Registrarse )
usuarioRoutes.post('/iniciarSesion', iniciarSesion) 
usuarioRoutes.post('/cerrarSesion', cerrarSesion)
usuarioRoutes.put('/perfil', validarToken, actualizarUsuario)
export default usuarioRoutes