import React from 'react'
import win from "./images/win.jpg"
import styled from 'styled-components'

function YouWin({ status }) {
    let audio3 = new Audio("/winchristmas.mp3")

    const imageWin = "https://media0.giphy.com/media/1GTZA4flUzQI0/giphy.gif"

    return (
        <div onClick={audio3.play()} >
            {/* {status === "win" && audio3.play()} */}
            <Container>YOU WIN</Container>
            <img src={imageWin} alt="you win" className="results" />
        </div>
    )
}

const Container = styled.h1`
        font-size: 40px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-wrap: wrap;
        top: 100px;
        color: white;
        font-family: 'Mountains of Christmas', cursive;
        padding-top: 4em;
        text-shadow: 2px 2px #ff0000;`

export default YouWin