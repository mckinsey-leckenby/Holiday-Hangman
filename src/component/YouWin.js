import React from 'react'

function YouWin({ start, setStart }) {
    let audio3 = new Audio("/winchristmas.mp3")
    const start3 = () => {
        audio3.play()
    }

    return (
        <div onClick={start3} >
            <h1>YOU WIN</h1>
        </div>
    )
}

export default YouWin
