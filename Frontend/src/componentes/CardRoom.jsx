import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { HotelContext } from '../contexto/Hotel/HotelContext'
import { UsuarioContext } from '../contexto/Usuario/UsuarioContext'
import { Link, useNavigate } from 'react-router-dom'
export const CardRoom = ({codigo_habitacion, numero, tipo, valor}) => {
  const {register, handleSubmit} = useForm()
  const { reservarRoom } =useContext(HotelContext)
  const { usuario } = useContext(UsuarioContext)
  const admin = usuario ? usuario.admin : false;
  const navigate = useNavigate()
  return (
    <div >
        <p>{numero}</p>
        <p>{tipo}</p>
        <p>{valor}</p>
        {!admin&&(
        <form action="POST" onSubmit={handleSubmit(values=>{
          const fecha_reservacion = new Date()
          reservarRoom({codigo_habitacion: codigo_habitacion, idcliente:usuario.idusuario, telefono_cliente:usuario.telefono, nombre_cliente:usuario.nombre+' '+usuario.apellido, fecha_reservacion, ...values})
        })}>
          <div>
            <label >Fecha_Entrada:</label>
            <input type="datetime-local" {...register('fecha_entrada', { required:true })} />
          </div>
          <div>
            <label >Fecha_Salida:</label>
            <input type="datetime-local" {...register('fecha_salida', { required:true })} />
          </div>
          {
            usuario?(
            <button >Reservar</button>
            ):(
              <Link to={'/login'}>Loguearse</Link>
            )
          }

        </form>
        )
        }


    </div>
  )
}