import './App.css'
import './reset-Css.css'
import { RutasApp } from './RutasApp'
import { HotelProvider } from './contexto/Hotel/HotelProvider'
import { UsuarioProvider } from './contexto/Usuario/UsuarioProvider'
import 'bootstrap/dist/css/bootstrap.min.css';

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
