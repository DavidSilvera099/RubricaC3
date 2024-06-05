import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UsuarioContext } from '../contexto/Usuario/UsuarioContext'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const {register, handleSubmit}= useForm()
    const {iniciarSesion} = useContext(UsuarioContext)
    const navigate = useNavigate()
  return (
    <div>
        <form action="POST" onSubmit={handleSubmit(values=>{
            iniciarSesion(values)
        })}>
            <h1>LogIn</h1>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text" {...register('email', { required:true })} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" {...register('password', { required:true })} />
            </div>
            <button>Iniciar sesion</button>
        </form>
    </div>
  )
}

