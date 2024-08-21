import React from 'react'
import { useState, useEffect, useRef } from 'react'

const Timer = ({ iniciarTimer, setIniciarTimer, flagMinasActivadas }) => {

    const [segundos, setSegundos] = useState(0)
    const [intervalTimer, setIntervalTimer] = useState(null)
    const timerActivado = useRef(false)
    const firstTime = useRef(true)

    const incrementarTiempo = () => {
        let timer = setInterval(() => {
            setSegundos((segundos) => segundos + 1)
        }, 1000);
        setIntervalTimer(timer)
    }

    const HandleClick = (event) => {
        setIntervalTimer(clearInterval(intervalTimer))
        setIniciarTimer(false)
        timerActivado.current = false
        firstTime.current = true
    }

    useEffect(() => {
        if (firstTime.current || timerActivado.current) {
            firstTime.current = false
            return
        }

        incrementarTiempo()
        timerActivado.current = true


    }, [iniciarTimer])

    useEffect(() => {
        if (flagMinasActivadas)
            HandleClick()

    }, [flagMinasActivadas])



    return (
        <>
            <button onClick={HandleClick}>Pausa</button>
            <label>{segundos}</label>
        </>

    )
}

export default Timer