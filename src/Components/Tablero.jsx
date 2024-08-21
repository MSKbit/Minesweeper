import React, { useLayoutEffect } from 'react'
import Celda from './Celda'
import { useEffect, useState, useRef } from 'react'

import { obtenerBooleanoAleatorio } from '../Utils/misc.js'

const Tablero = ({flagsColocadas,setFlagsColocadas, setIniciarTimer, flagMinasActivadas, setFlagMinasActivadas}) => {
    const numFilas = 10
    const numColumnas = 10
    const numMinas = 20
    let arrayMinasTemp = []
    let arrayTemp = []

    const [estructuraTablero, setEstructuraTablero] = useState([])
    // const [flagsColocadas, setFlagsColocadas] = useState(0)
    const [arrayMinas, setArrayMinas] = useState([])
    // const [flagMinasActivadas, setFlagMinasActivadas] = useState(false)
    const firstUpdate = useRef(true)

    const CrearEstadoInicialTablero = (numFilas, numColumnas) => {
        let array = []
        let cellsArray = []
        let minasColocadas = 0

        for (let i = 0; i < numFilas; i++) {
            cellsArray = []
            for (let j = 0; j < numColumnas; j++) {
                const mina = minasColocadas < numMinas ? obtenerBooleanoAleatorio() : false
                const numMinasCercanas = 0
                if (minasColocadas === numMinas)
                    var x = 0
                if (mina) {
                    minasColocadas++
                    arrayMinasTemp.push({ fila: i, columna: j })
                }

                cellsArray.push({
                    mina,
                    numMinasCercanas,
                })

            }
            arrayTemp.push(cellsArray)
        }

        setArrayMinas(arrayMinasTemp)

        ColocarNumerosEnCeldas()

        // ColocarNumerosEnCeldas()
        console.log('Array inicial');

        console.log(arrayTemp);

        // return array
    }

    const ColocarNumerosEnCeldas = () => {
        for (let r = 0; r < numFilas; r++) {
            for (let c = 0; c < numColumnas; c++) {
                if (!arrayTemp[r][c].mina) {
                    const numMinas = ContarMinasCercanas(r, c);
                    if (numMinas > 0)
                        arrayTemp[r][c].numMinasCercanas = numMinas;
                }
            }
        }


    }

    const ContarMinasCercanas = (row, col) => {
        let numMinas = 0;
        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if (r >= 0 && r < numFilas && c >= 0 && c < numColumnas && arrayTemp[r][c].mina) {
                    numMinas++;
                }
            }
        }
        return numMinas
    }

    useEffect(() => {
        CrearEstadoInicialTablero(numFilas, numColumnas)
        console.log('Array temp:');
        console.log(arrayTemp);
        setEstructuraTablero(arrayTemp)
        // console.log(estructuraTablero);
        
        // ColocarNumerosEnCeldas()
    }, [])

    useEffect(() => {

        if(firstUpdate.current){

            firstUpdate.current=false
            return
        }

        const tableroTemp = structuredClone(estructuraTablero)
        for (let i = 0; i < arrayMinas.length; i++) {
            const { fila, columna } = arrayMinas[i];
            tableroTemp[fila][columna].minaRevelada = true
        }
        setEstructuraTablero(tableroTemp)
        alert('PERDISTE!')


    }, [flagMinasActivadas])




    return (
        <>
            <table className='tablero' >
                <tbody>
                    {estructuraTablero.map((val, key) => {
                        return (
                            <tr key={key}>
                                {val.map((valCol, keyCol) => {
                                    // console.log(valCol);
                                    return <Celda key={keyCol}
                                        fila={key} columna={keyCol}
                                        mina={valCol.mina}
                                        minaRevelada={valCol.minaRevelada || false}
                                        setFlagMinasActivadas={setFlagMinasActivadas}
                                        setIniciarTimer={setIniciarTimer}
                                        setEstructuraTablero={setEstructuraTablero}
                                        flagsColocadas={flagsColocadas}
                                        setFlagsColocadas={setFlagsColocadas}
                                        numMinas={numMinas}
                                        children={valCol.numMinasCercanas}></Celda>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Tablero