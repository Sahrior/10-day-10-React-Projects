import React, { useState } from 'react'
import styled from "styled-components"
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay'



const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(true)

  const toggoleGamePlay = () =>{
    setIsGameStarted(prev => !prev)
  }

  return (
    <>
      { isGameStarted ? <GamePlay/> : <StartGame toggle = {toggoleGamePlay} /> }
    </>
  )
}

export default App



