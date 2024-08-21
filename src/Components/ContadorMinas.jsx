import React from 'react'

const ContadorMinas = ({numMinas, flagsColocadas, setFlagsColocadas}) => {
  return (
    <div>Banderas: {flagsColocadas}/{numMinas}</div>
  )
}

export default ContadorMinas