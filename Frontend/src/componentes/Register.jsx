import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { UsuarioContext } from '../contexto/Usuario/UsuarioContext'
import { useNavigate } from 'react-router-dom'
export const Register = () => {
    const {register, handleSubmit}= useForm()
    const {registrar} = useContext(UsuarioContext)
    const navigate = useNavigate()
  return (
    <div>
    <form action="POST" onSubmit={handleSubmit(values=>{
        registrar(values)
        navigate('/')
    })}>
        <h1>Register</h1>
        <div>
            <label htmlFor="">Nombre:</label>
            <input type="text" {...register('nombre', { required:true })} />
        </div>
          <div>
            <label htmlFor="">Apellido:</label>
            <input type="text" {...register('apellido', { required:true })} />
        </div>
          <div>
            <label htmlFor="">Telefono:</label>
            <input type="number" {...register('telefono', { required:true })} />
        </div>
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
