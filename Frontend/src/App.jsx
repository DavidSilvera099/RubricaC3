import './App.css'
import { RutasApp } from './RutasApp'
import { HotelProvider } from './contexto/Hotel/HotelProvider'
import { UsuarioProvider } from './contexto/Usuario/UsuarioProvider'

function App() {


  return (
    <>
      <UsuarioProvider>
        <HotelProvider>
          <RutasApp/>
          </HotelProvider>
      </UsuarioProvider>
    </>
  )
}

export default App
