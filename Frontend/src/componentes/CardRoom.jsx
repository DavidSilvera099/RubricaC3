import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { HotelContext } from '../contexto/Hotel/HotelContext'
import { UsuarioContext } from '../contexto/Usuario/UsuarioContext'
export const CardRoom = ({ codigo_habitacion, numero, tipo, valor }) => {
    const { register, handleSubmit } = useForm()
    const { reservarRoom } = useContext(HotelContext)
    const { usuario } = useContext(UsuarioContext)
    return (
        <div className='card-container'>
            <div>
            <div className="card-content">
            <p><strong>Número de habitación: </strong>{numero}</p>
            <p><strong>Tipo: </strong>{tipo}</p>
            <p><strong>Valor: </strong>{valor}</p>
            <form action="POST" onSubmit={handleSubmit(values => {
                const fecha_reservacion = new Date()
                reservarRoom({ codigo_habitacion: codigo_habitacion, idcliente: usuario.idusuario, telefono_cliente: usuario.telefono, nombre_cliente: usuario.nombre + ' ' + usuario.apellido, fecha_reservacion, ...values })
            })}>
                <div>
                    <label><strong>Fecha de entrada: </strong></label>
                    <input className='input-login-forms' type="datetime-local" {...register('fecha_entrada', { required: true })} />
                </div>
                <div>
                    <label><strong>Fecha de salida: </strong></label>
                    <input className='input-login-forms' type="datetime-local" {...register('fecha_salida', { required: true })} />
                </div>
                <button className='bnt-principal btn-card'>Reservar</button>
            </form>
        </div>
            </div>
        
        </div>
        
    )
}