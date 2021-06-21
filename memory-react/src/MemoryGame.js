import React, {useState} from 'react'
import { GameOver } from './Components/GameOver'

const MemoryGame = () => {
    const [gameOver, setGameOver]= useState(true);
    function restart(){
        setGameOver(false);
    }
    return (
    <GameOver show={gameOver} handleRestart={restart}></GameOver>
    )
}

export default MemoryGame;
