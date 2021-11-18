import React from 'react'
import win from "./images/win.jpg"

function YouWin({ status }) {
    let audio3 = new Audio("/winchristmas.mp3")

    const imageWin = "https://cdn5.vectorstock.com/i/1000x1000/69/19/congratulations-christmas-banner-with-bows-vector-21146919.jpg"

    return (
        <div onClick={audio3.play()} >
            {/* {status === "win" && audio3.play()} */}
            <h1>YOU WIN</h1>
            <img src={win} alt="you win" className="results" />
        </div>
    )
}

export default YouWin
