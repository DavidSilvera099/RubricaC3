import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UsuarioContext } from '../contexto/Usuario/UsuarioContext'
import { useNavigate } from 'react-router-dom'
export const Login = () => {
    const {register, handleSubmit}= useForm()
    const {iniciarSesion} = useContext(UsuarioContext)
    const navigate = useNavigate()
  return (
    <>
    <div className='login-container'>
        <form className='login-form' action="POST" onSubmit={handleSubmit(values=>{
            iniciarSesion(values)
        })}>
            <h2 className='titulo-forms'>Ingresar</h2>
            <div>
                <input className='input-login-forms' type="text" {...register('email', { required:true })}  placeholder='E-mail'/>
                <input className='input-login-forms' type="password" {...register('password', { required:true })} placeholder='Contraseña' />
            </div>
            <button className="bnt-principal button-forms-login">Iniciar sesion</button>
        </form>
    </div>
    </>
    
  )
}

