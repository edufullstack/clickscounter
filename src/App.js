import './App.css'
import Boton from './componentes/boton'
import Contador from './componentes/contador'
import { useState } from 'react'

function App() {
  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(numClics + 1)
  }
  const reiniciarContador = () => {
    setNumClics(0)
  }
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <h1>Click Counter</h1>
      </div>
      <div className='contenedor-contador'>
        <Contador numClics={numClics} />
        <Boton texto='Click' esBotonDeClic={true} manejarClic={manejarClic} />
        <Boton
          texto='Reset'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}
        />
      </div>
    </div>
  )
}

export default App
