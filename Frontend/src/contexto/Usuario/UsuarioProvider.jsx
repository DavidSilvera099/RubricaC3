import React, { useEffect, useState } from 'react'
import { UsuarioContext } from './UsuarioContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Alert from 'sweetalert2'
import {jwtDecode} from 'jwt-decode'
import Cookies from 'js-cookie'
import Alert from 'sweetalert2'
export const UsuarioProvider = ({children}) => {
    const [usuario, setusuario] = useState()
    const navigate = useNavigate()
    const URLBACKEND = import.meta.env.VITE_URL_BACKEND

    const iniciarSesion = async(values)=>{
      try {
        const {data} = await axios.post(`${URLBACKEND}/usuarios/iniciarSesion`,  values, {withCredentials:true})
        setusuario(data)
        Alert.fire({
          title: 'Success',
          text: 'Logueado correctamente!!',
          icon: 'success'
        })
        navigate('/')
      } catch ({response}) {
        Alert.fire({
          title: 'Error',
          text: response.data.message,
          icon: 'error'
        })
      }
    }
    const registrar = async(values)=>{
      try {
        const {data} = await axios.post(`${URLBACKEND}/usuarios/registrar`,values, {withCredentials:true})
        console.log(data)
        setusuario(data)
        Alert.fire({
          title: 'Success',
          text: 'Registrado correctamente!!',
          icon: 'success'
        })
        navigate('/')
      } catch (error) {
        Alert.fire({
          title: 'Error',
          text: error,
          icon: 'error'
        })
        console.log(error)
      }
    }
    const cerrarSesion = async()=>{
      try {
       await axios.post(`${URLBACKEND}/usuarios/cerrarSesion`,{}, {withCredentials:true})
       setusuario(null)
       Alert.fire({
        title:'Success',
        text: 'Sesion Cerrada',
        icon: 'success'
       })
    } catch (error) {
      Alert.fire({
        title:'Error',
        text: error,
        icon: 'error'
       })
       console.log(error)
    }
    }
    const actualizarUsuario = async(values)=>{
      try {
          const {data} = await axios.put(`${URLBACKEND}/usuario/perfil`, {id:user.idusers, email:user.email, values})
          delete values.passsword
          setusuario({...user, values})
          Alert.fire({
            title: 'Success',
            text: 'Actualizado correctamente!',
            icon:'success'
          })
      } catch (error) {
        Alert.fire({
          title: 'error',
          text: error,
          icon: 'error'
        })
        console.log(error)
      }
  }
  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; 
        if (decoded.exp < currentTime) {
          console.error('Token has expired');
         cerrarSesion()
        } else {
          setusuario({ ...decoded.usuarioInfo });
        }
      } catch (error) {
        console.error('Token decoding failed', error);
      }
    }
  }, []);
  return (
    <UsuarioContext.Provider value={{usuario, iniciarSesion, registrar, cerrarSesion, actualizarUsuario}}>
        {children}
    </UsuarioContext.Provider>
  )
}
