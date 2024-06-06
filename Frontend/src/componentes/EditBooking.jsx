import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { HotelContext } from '../contexto/Hotel/HotelContext'
import { UsuarioContext } from '../contexto/Usuario/UsuarioContext'

export const EditBooking = ({ idbookings, codigo_habitacion, telefono_cliente, fecha_entrada, fecha_salida, setopenEdit }) => {
    const { usuario } = useContext(UsuarioContext)
    const { editarBooking, cargarBookings } = useContext(HotelContext)
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            codigo_habitacion: codigo_habitacion,
            telefono_cliente: telefono_cliente,
            fecha_entrada: new Date(fecha_entrada).toISOString().slice(0, 16),
            fecha_salida: new Date(fecha_salida).toISOString().slice(0, 16),
        }
    })
    return (
        <div className='card-content'>
            <form action="POST" onSubmit={handleSubmit(values => {
                editarBooking({ idbookings, ...values })
                setopenEdit(false)
                navigate('/misreservas')
            })}>
                <img className='close-icon' onClick={() => setopenEdit(false)} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACEElEQVR4nO2YTUhVQRTHf738olQUw02CPBIRNATBhQs1LXCT7mwVRO1ci6ILNwa5dSHoRnAltghxEbWplWJQILUJQnlggraoqEQLP54MzOJyOL3eh8ydcH4wmzvnnPnfOzNnzlwIBAKBQOCC0gr0A1cKjNMF9ACXcchjIG3bOnA1zzgTkTivgQSO+B4Z2LT5PGLcAU5FnCSO2BADmzaQg3818Fn47wAlOOIWcCIEfAFqs/RfEr6ndj85ZUqZhZUs/O4rftPEQJHdwFLMoww+dcA3Yf8BKCMmbgA/haB9oEGxTdhMI22biJmHyiysKnl9VLF7gCcsKuJGIv3NwKHof4pHVAEpIfC3Pa1LgfeibxOoxDM6gWMh1AifFc/+AO14yqSylGQbxmOKgLUM4l8Cl/CcJPBLEb+bw0kdKx3AkfICWz5uXEk58CnDEvIqdWosZLGJTS3kJfcUscvAnnj2w5YgXnEd+CqEbtu6v0+5uLx1Wfv/C1OkvRICzV2hO2Izo8zOEzxhTBFnDrQoZbZsli95m5hps6VBVNg7oFixbVEKuh3gGjFhfqd8VOr7xgw+I8psPY/rdJ7L8Tb2t/2SBoZwzIAi4lmWvnVKxjqwdwYnlNi1K9dyTQ4xBpUP8AJH1CvZxPykKvTUTuEIeTkfzzNOBfAmEsekY6d1f6+tPAvNZHeBm+ekKxAIBAIB/ivOAM2OAh166TcAAAAAAElFTkSuQmCC" />
                <h2>Editar habitación</h2>
                <div>
                    <input className='input-login-forms' type="number" {...register('codigo_habitacion', { required: true })} placeholder='Id habitación' />
                    <input className='input-login-forms' type="number" {...register('telefono_cliente', { required: true })} placeholder='Telefono cliente' />
                    <label>Fecha de ntrada:</label>
                    <input className='input-login-forms' type="datetime-local" {...register('fecha_entrada', { required: true })} />
                    <label>Fecha de alida:</label>
                    <input className='input-login-forms' type="datetime-local"  {...register('fecha_salida', { required: true })} />
                </div>
                <button className='bnt-principal btn-card'>Guardar</button>
            </form>
        </div>
    )
}
