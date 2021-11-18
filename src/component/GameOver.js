import React from 'react'


function GameOver() {

    let audio2 = new Audio("/losechristmas.mp3")
    const start2 = () => {
        audio2.play()
    }

    return (
        <div onClick={start2}>
            <h1>Game Over</h1>

        </div>
    )
}

export default GameOver
