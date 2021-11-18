import React from 'react'
import gameOver from "./images/gameOver.jpg"

function GameOver() {
    let audio2 = new Audio("/losechristmas.mp3")
    return (
        <div onClick={audio2.play()}>
            <h1>Game Over</h1>
            <h2>YOU TRIED</h2>
            <div className="game-over-img">
                <img src={gameOver} alt="game over" className="results" />
            </div>

        </div>
    )
}

export default GameOver

