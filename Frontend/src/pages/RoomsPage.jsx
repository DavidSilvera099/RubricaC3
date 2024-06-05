import React, { useContext } from 'react'
import { CardRoom } from '../componentes/CardRoom'
import { HotelContext } from '../contexto/Hotel/HotelContext'
export const RoomsPage = () => {
    const {rooms} = useContext(HotelContext)
  return (
    <div>
        {
            rooms.length?(
                rooms.map(room=><CardRoom key={room.codigo_habitacion} codigo_habitacion={room.codigo_habitacion} numero={room.numero} tipo={room.tipo} valor={room.valor}/>)
            ):(
                <h3>No hay habitaciones</h3>
            )
        }
    </div>
  )
}
