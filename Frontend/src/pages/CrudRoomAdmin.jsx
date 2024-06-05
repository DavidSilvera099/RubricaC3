import React, { useContext, useState } from 'react'
import { HotelContext } from '../contexto/Hotel/HotelContext'
import { CardRoomAdmin } from '../componentes/CardRoomAdmin'
import { useNavigate } from 'react-router-dom'
import { FormEditRoom } from '../componentes/FormEditRoom'

export const CrudRoomAdmin = () => {
   const {rooms} = useContext(HotelContext)
    const [formAddRoom, setformAddRoom] = useState(false)
  return (
    <div>
        <button onClick={()=>setformAddRoom(true)}>Crear Room</button>
        {
        !formAddRoom?(
            rooms.length?(
                rooms.map(room=><CardRoomAdmin codigo_habitacion={room.codigo_habitacion} tipo={room.tipo} valor={room.valor} numero={room.numero}/>)
            ):(
                <h3>No hay habitaciones</h3>
            )
        ):(
            <FormEditRoom isEdit={false} setformAddRoom={setformAddRoom}/>
        )
        }
    </div>
  )
}
