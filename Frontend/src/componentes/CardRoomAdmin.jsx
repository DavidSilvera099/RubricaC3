import React, { useContext, useState } from 'react'
import { FormEditRoom } from './FormEditRoom'
import { HotelContext } from '../contexto/Hotel/HotelContext'

export const CardRoomAdmin = ({ codigo_habitacion, tipo, valor, numero }) => {
  const [openEdit, setopenEdit] = useState(false)
  const { eliminarRoom } = useContext(HotelContext)
  return (
    <div>
      <div className='card-content'>
        <p><strong>Habitación numero: </strong>{numero}</p>
        <p><strong>Tipo: </strong>{tipo}</p>
        <p><strong>Valor: </strong>{valor}</p>
        <p><strong>Id: </strong>{codigo_habitacion}</p>
        <button className='bnt-principal btn-card' onClick={() => setopenEdit(true)}>Editar</button>
        <button className='bnt-secundario btn-card' onClick={() => eliminarRoom(codigo_habitacion)}>Eliminar</button>
      </div>
      {
        openEdit && (
          <FormEditRoom codigo_habitacion={codigo_habitacion} tipo={tipo} valor={valor} numero={numero} setopenEdit={setopenEdit} isEdit={true} />
        )
      }
    </div>
  )
}
