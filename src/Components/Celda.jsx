import React, { useEffect, useState } from 'react'

const Celda = ({ fila, columna, mina, minaRevelada,setFlagMinasActivadas, setIniciarTimer, flagsColocadas, setFlagsColocadas, numMinas, children }) => {

  const [claseExtra, setClaseExtra] = useState('')
  // const [flagsColocadas, setFlagsColocadas] = useState(0)

  const HandleClick = (event) => {
    console.log(event);
    const { fila, columna, mina } = event.target.dataset
    console.log(fila, columna, mina);

    const boolMina = mina.toLowerCase() === 'true'

    setIniciarTimer(true)

    if (boolMina) {
      // console.log(estructuraTablero[paserInt(fila)][parseInt(columna)]);
      setClaseExtra('mine')
      setFlagMinasActivadas(true)
    }
    else {
      setClaseExtra('revealed')
    }

  }

  const HandleRightClick = (event) => {
    event.preventDefault()
    const { fila, columna, mina } = event.target.dataset
    if (flagsColocadas < numMinas && claseExtra === ''){
      setClaseExtra('flagged')
      setFlagsColocadas((flagsColocadas) => flagsColocadas+1)
    }
    else if(claseExtra==='flagged'){
      setClaseExtra('')
      setFlagsColocadas((flagsColocadas) => flagsColocadas-1)
    }

  }



  useEffect(() => {
    console.log('Flags colocadas:', flagsColocadas);
  }, )
  

  return (
    <td className={`cell ${minaRevelada ? 'mine' : claseExtra}`} onClick={HandleClick} onContextMenu={HandleRightClick} data-fila={fila} data-columna={columna} data-mina={mina}>{!mina && children}</td>
  )
}

export default Celda