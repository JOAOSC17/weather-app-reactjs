import React, {useState, useEffect} from 'react'
import GameOver  from './Components/GameOver'
import GameBoard from './Components/GameBoard';
import game from './Game/game';
const MemoryGame = () => {
    const [gameOver, setGameOver]= useState(true);
    const [cards, setCards]= useState([]);
    useEffect(() => {
        setCards(game.createCardsFromTechs())
    }, [])
    function restart(){
        setGameOver(false);
    }
    return (
        <div>
        <GameBoard cards={cards}></GameBoard>
    <GameOver show={gameOver} handleRestart={restart}></GameOver>
   </div>
    )
}

export default MemoryGame;
