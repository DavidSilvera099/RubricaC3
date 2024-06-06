import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { HotelContext } from '../contexto/Hotel/HotelContext'
export const FormEditRoom = ({ codigo_habitacion = '', tipo = '', numero = '', valor = '', setopenEdit = '', setformAddRoom = '', isEdit }) => {
    const { editarRoom, crearRoom } = useContext(HotelContext)
    const { register, handleSubmit } = useForm(isEdit && ({
        defaultValues: {
            codigo_habitacion,
            tipo,
            numero,
            valor
        }
    })
    )
    return (
        <div className='card-container'>
            <div>
            <div className='card-content'>
                <form action="POST" onSubmit={handleSubmit(values => {
                    if (isEdit) {
                        editarRoom(values)
                        setopenEdit(false)
                    } else {
                        crearRoom(values)
                        setformAddRoom(false)
                    }
                })}>
                    <h2>{isEdit ? 'Editar room' : 'Crear Room'}</h2>
                    <div>
                        <input className='input-login-forms' type="text" {...register('numero', { required: true })} placeholder='Numero' />
                        <input className='input-login-forms' type="text" {...register('tipo', { required: true })} placeholder='Tipo'/>
                        <input className='input-login-forms' type="number" {...register('valor', { required: true })} placeholder='Valor'/>
                    </div>
                    <button className='bnt-principal btn-card'>{isEdit ? 'Editar' : 'Crear'}</button>
                    <button onClick={isEdit ? () => setopenEdit(false) : () => setformAddRoom(false)} className='bnt-secundario btn-card'>Cancelar</button>
                </form>
            </div>
            </div>
        </div>
    )
}