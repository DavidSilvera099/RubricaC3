import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { HotelContext } from '../contexto/Hotel/HotelContext'
import { UsuarioContext } from '../contexto/Usuario/UsuarioContext'
export const CardRoom = ({codigo_habitacion, numero, tipo, valor}) => {
  const {register, handleSubmit} = useForm()
  const { reservarRoom } =useContext(HotelContext)
  const { usuario } = useContext(UsuarioContext)
  return (
    <div >
        <p>{numero}</p>
        <p>{tipo}</p>
        <p>{valor}</p>
        <form action="POST" onSubmit={handleSubmit(values=>{
           const fecha_reservacion = new Date()
           reservarRoom({codigo_habitacion: codigo_habitacion, idcliente:usuario.idusuario, telefono_cliente:usuario.telefono, nombre_cliente:usuario.nombre+' '+usuario.apellido, fecha_reservacion, ...values})
        })}>
          <div>
            <label htmlFor="">Fecha_Entrada:</label>
            <input type="datetime-local" {...register('fecha_entrada', { required:true })} />
          </div>
          <div>
            <label htmlFor="">Fecha_Salida:</label>
            <input type="datetime-local" {...register('fecha_salida', { required:true })} />
          </div>
          <button>Reservar</button>
        </form>
        
    </div>
  )
}
