import React from 'react'
import styled from 'styled-components'

function Instruction() {
    return (
        <InsContainer>
            <h3> This game is a version of the widely popular Hangman. As in all other Hangman games, your goal is to guess the letters that make up a word. If you make five wrong guesses, you lose the game!
                This version of Hangman is Christmas movie themed, so each level scales in difficulty.</h3>
            <ul>
                <li>Level one consists of character names.</li>
                <li>Level two consists of the movie title.</li>
                <li>The last and hardest level consists of a specific quote from the movie.</li>
            </ul>
            <h1>Good Luck!</h1>

        </InsContainer>
    )
}



const InsContainer = styled.div`

        display: flex;
        align-items:center;
        font-size: 40px;
        justify-content: space-between;
        text-align: center;
        flex-direction:column;
        top: 100px;
        color: white;
        font-family: 'Mountains of Christmas', cursive;
        padding-top: 4em;
        text-shadow: 2px 2px #ff0000;
        ul {
             list-style:none;
        }

`

export default Instruction
