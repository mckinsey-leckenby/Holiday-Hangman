import React from 'react'
import styled from 'styled-components'

function GameOver() {
    let audio2 = new Audio("/losechristmas.mp3")
    const lost = "https://c.tenor.com/sYx5h9Lzb0MAAAAC/spongebob-sucks-to-suck.gif"
    return (
        <div onClick={audio2.play()}>
            <Container>YOU THOUGHT</Container>
            <div className="game-over-img">
                <img src={lost} alt="game over" className="results" />
            </div>

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

export default GameOver

