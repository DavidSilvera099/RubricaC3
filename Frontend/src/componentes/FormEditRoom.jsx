import React, { useContext } from 'react'
import {useForm} from 'react-hook-form'
import { HotelContext } from '../contexto/Hotel/HotelContext'
export const FormEditRoom = ({codigo_habitacion ='', tipo='', numero ='', valor='',  setopenEdit='' ,setformAddRoom='', isEdit}) => {
    const {editarRoom, crearRoom} =useContext(HotelContext)
    const {register, handleSubmit} = useForm(isEdit&&({
        defaultValues:{
            codigo_habitacion,
            tipo,
            numero,
            valor
        }
    })
)
  return (
    <form action="POST" onSubmit={handleSubmit(values=>{
        if(isEdit){
            editarRoom(values)
            setopenEdit(false)
        }else{
            crearRoom(values)
            setformAddRoom(false)
        }
            
        
        
    })}>
        <img onClick={isEdit?()=>setopenEdit(false):()=>setformAddRoom(false)} src="https://img.icons8.com/ios-filled/50/x.png"/>
        <h1>{isEdit?'Editar room':'Crear Room'}</h1>
        <div>
            <label >numero</label>
            <input type="text" {...register('numero', {required:true})} />
        </div>
        <div>
            <label >tipo</label>
            <input type="text" {...register('tipo', {required:true})} />
        </div>
        <div>
            <label >valor</label>
            <input type="number" {...register('valor', {required:true})} />
        </div>
        <button>{isEdit?'Editar':'Crear'}</button>
    </form>
  )
}
