import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UsuarioContext } from '../contexto/Usuario/UsuarioContext'
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    const {register, handleSubmit}= useForm()
    const {registrar} = useContext(UsuarioContext)
    const navigate = useNavigate()
  return (
    <div className='login-container'>
    <form className='login-form' action="POST" onSubmit={handleSubmit(values=>{
        registrar(values)
        navigate('/')
    })}>
        <h2 className='titulo-forms'>Registrarse</h2>
        <div>
            <input className='input-login-forms' type="text" {...register('nombre', { required:true })} placeholder='Nombre' />
            <input className='input-login-forms' type="text" {...register('apellido', { required:true })} placeholder='Apellido'/>
            <input className='input-login-forms' type="number" {...register('telefono', { required:true })} placeholder='Telefono'/>
            <input className='input-login-forms' type="text" {...register('email', { required:true })} placeholder='Email'/>
            <input className='input-login-forms' type="password" {...register('password', { required:true })} placeholder='Password'/>
        </div>
        <button className="bnt-secundario"> Registrar </button>
    </form>
</div>
  )
}
