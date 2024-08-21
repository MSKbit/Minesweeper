import { useState } from 'react'
// import './App.css'
import './Css/estilos.css'
import Buscaminas from './Components/Buscaminas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Buscaminas></Buscaminas>
    </>
  )
}

export default App
