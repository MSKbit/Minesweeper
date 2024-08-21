import React, { useEffect } from 'react'
import Tablero from './Tablero'
import ContadorMinas from './ContadorMinas'
import Timer from './Timer'
import { useState } from 'react'

const Buscaminas = () => {
  const [numMinas, setNumMinas] = useState(20)
  const [flagsColocadas, setFlagsColocadas] = useState(0)
  const [iniciarTimer, setIniciarTimer] = useState(false)
    const [flagMinasActivadas, setFlagMinasActivadas] = useState(false)


  return (
    <>
      <ContadorMinas numMinas={numMinas} flagsColocadas={flagsColocadas} setFlagsColocadas={setFlagsColocadas}></ContadorMinas>
      <Timer iniciarTimer={iniciarTimer}  setIniciarTimer={setIniciarTimer} flagMinasActivadas={flagMinasActivadas}></Timer>
      <Tablero flagsColocadas={flagsColocadas} 
      setFlagsColocadas={setFlagsColocadas} 
      setIniciarTimer={setIniciarTimer} 
      flagMinasActivadas={flagMinasActivadas}
      setFlagMinasActivadas={setFlagMinasActivadas}></Tablero>
    </>

  )
}

export default Buscaminas