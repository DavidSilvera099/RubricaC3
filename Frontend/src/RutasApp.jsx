import React, { useContext } from 'react'
import { Header } from './componentes/Header'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './componentes/Login'
import { Register } from './componentes/Register'
import { Home } from './pages/Home'
import { RoomsPage } from './pages/RoomsPage'
import { MisReservas } from './pages/MisReservas'
import { UsuarioContext } from './contexto/Usuario/UsuarioContext'
import { CrudRoomAdmin } from './pages/CrudRoomAdmin'

export const RutasApp = () => {
  const {usuario} = useContext(UsuarioContext)
  const isAdmin = usuario? usuario.admin : false
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/login' element={!usuario?<Login/>:<Navigate to={'/'}/>} />
          <Route path='/register' element={!usuario?<Register/>: <Navigate to={'/'}/>} />
          <Route path='/habitaciones' element={<RoomsPage/>}/>
          <Route path='/misreservas' element={usuario?<MisReservas/>: <Navigate to={'/'}/>} />
          <Route path='/crudadmin' element={isAdmin?<CrudRoomAdmin/>: <Navigate to={'/'}/>} />
        </Routes>
    </>
  )
}
