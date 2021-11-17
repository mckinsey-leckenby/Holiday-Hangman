import React from 'react'
import styled from 'styled-components'

function Instruction() {
    return (
        <InsContainer>
            This game is a version of the widely popular Hangman. As in all other Hangman games, your goal is to guess the letters that make up a word. If you make five wrong guesses, you lose the game!
            This version of Hangman is Christmas movie themed, so each level scales in difficulty.
            Level one consists of character names. Level two consists of the movie title. The last and hardest level consists of a specific quote from the movie.
            Good Luck!
        </InsContainer>
    )
}



const InsContainer = styled.div`
        font-size: 40px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-wrap: wrap;
        top: 100px;
        color: white;
        font-family: 'Mountains of Christmas', cursive;
        padding-top: 4em;
        text-shadow: 2px 2px #ff0000;

`

export default Instruction
