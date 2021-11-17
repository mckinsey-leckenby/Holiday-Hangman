import React from 'react'
import styled from 'styled-components'

function Instruction() {
    return (
        <InsContainer>
            <h1>This game is a version of the widely popular Hangman. As in all other Hangman games, your goal is to guess the letters that make up a word. If you make five wrong guesses, you lose the game!</h1>
        </InsContainer>
    )
}



const InsContainer = styled.div`
    display: flex;
        justify-content: space-between
        align-items: center;
        flex-wrap: wrap;
        top: 100px

`

export default Instruction
