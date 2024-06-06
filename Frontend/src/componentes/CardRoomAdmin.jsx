import React, { useContext, useState } from 'react'
import { FormEditRoom } from './FormEditRoom'
import { HotelContext } from '../contexto/Hotel/HotelContext'

export const CardRoomAdmin = ({codigo_habitacion, tipo, valor, numero}) => {
    const [openEdit, setopenEdit] = useState(false)
    const {eliminarRoom} = useContext(HotelContext)
  return (
    <div>
    <div>
        <p>Numero: {numero}</p>
        <p>Tipo: {tipo}</p>
        <p>Valor: {valor}</p>
        <p>Id: {codigo_habitacion}</p>
        <img onClick={()=>setopenEdit(true)} width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/edit--v1.png" alt="edit--v1" />
        <img onClick={()=>eliminarRoom(codigo_habitacion)} width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/filled-trash.png" alt="filled-trash"/>
    </div>
    {
        openEdit&&(
            <FormEditRoom codigo_habitacion={codigo_habitacion} tipo={tipo} valor={valor} numero={numero} setopenEdit={setopenEdit} isEdit={true}/>
        )
    }
    </div>
  )
}
