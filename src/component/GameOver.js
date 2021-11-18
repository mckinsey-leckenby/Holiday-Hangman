import React from 'react'


function GameOver({ start1 }) {

    const gameOverImg = "https://ctl.s6img.com/society6/img/YZpWoE3FofByxzNZvChACGvMcd8/w_1500/prints/~artwork/s6-original-art-uploads/society6/uploads/misc/7f84f0c88327438d9a679e85e983c92f/~~/game-over-christmas-day-prints.jpg"
    return (
        <div>
<audio></audio>
            <h1>Game Over</h1>
            <h2>YOU TRIED</h2>
            <div className="game-over-img">
                <img src={gameOverImg} alt="game over" />
            </div>
        </div>
    )
}

export default GameOver

