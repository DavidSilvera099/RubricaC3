import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HotelContext } from './HotelContext'
import axios from 'axios'
import Alert from 'sweetalert2'
import { UsuarioContext } from '../Usuario/UsuarioContext'
export const HotelProvider = ({children}) => {
    const [rooms, setrooms] = useState([])
    const [bookings, setbookings] = useState([])
    const { usuario } = useContext(UsuarioContext)
    const navigate = useNavigate()
    const URLBACKEND = import.meta.env.VITE_URL_BACKEND
    const cargarRooms = async()=>{
        try {
            const {data} = await axios.get(`${URLBACKEND}/rooms`, {withCredentials:true})
            setrooms(data) 
        } catch (error) {
            console.log(error)
        }
    }
    const editarRoom = async(values)=>{
      try {
          await axios.put(`${URLBACKEND}/rooms/${values.codigo_habitacion}`,values, {withCredentials:true})
          cargarRooms()
          Alert.fire({
            title: 'Success',
            text:'Editado correctamente',
            icon: 'success'
          })
      } catch ({response}) {
          console.log(response.data.message)
          Alert.fire({
            title: 'Error',
            text: response.data.message,
            icon: 'error'
          })
      }
    }
    const eliminarRoom = async(id)=>{
      try {
        await axios.delete(`${URLBACKEND}/rooms/${id}`, {withCredentials:true})
        Alert.fire({
          title:'Success',
          text:'Eliminado',
          icon: 'success'
        })
        cargarRooms()
      } catch (error) {
        Alert.fire({
          title:'Error!!',
          text: error,
          icon: 'error'
        })
      }
    }
    const crearRoom = async(values)=>{
      try {
        const {data} = await axios.post(`${URLBACKEND}/rooms`, values, {withCredentials:true})
        Alert.fire({
          title:'Success',
          text: 'creado correctamente',
          icon:'success'
        })
        cargarRooms()
      } catch (error) {
        Alert.fire({
          title:'Error!!',
          text: error,
          icon:'error'
        })
      }
    }
    const reservarRoom = async(data)=>{
    try {
        await axios.post(`${URLBACKEND}/bookings/`,data, {withCredentials:true})
        Alert.fire({
          title: 'Success',
          text:'Reservada correctamente',
          icon: 'success'
        })
    } catch ({response}) {
        console.log(response.data.message)
        Alert.fire({
          title: 'Error',
          text: response.data.message,
          icon: 'error'
        })
    }
    }
    const cargarBookings = async(id)=>{
      try {
          const {data} = await axios.get(`${URLBACKEND}/bookings/${id}`,{withCredentials:true})
          setbookings(data)
          console.log(data)
      } catch ({response}) {
          console.log(response.data.message)
      }
    }
    const editarBooking = async(values)=>{
      try {
        await axios.put(`${URLBACKEND}/bookings/${values.idbookings}`, values, {withCredentials:true})
       cargarBookings(usuario.idusuario)
    } catch ({response}) {
        console.log(response.data.message)
    }
    }
    const deleteBooking = async (id) => {
      try {
          await axios.delete(`${URLBACKEND}/bookings/${id}`, { withCredentials: true });
          // Actualizar la lista de reservas después de eliminar
          cargarBookings(usuario.idusuario);
      } catch ({ response }) {
          console.log(response.data.message);
      }
  };
      useEffect(() => {
      cargarRooms()
    }, [])
    
  return (
    <HotelContext.Provider value={{rooms, setrooms, bookings, setbookings ,editarRoom, reservarRoom, deleteBooking, editarBooking ,cargarBookings, eliminarRoom, crearRoom}}>
        {children}
    </HotelContext.Provider>
  )
}
