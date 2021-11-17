import React from 'react'
import AddGameForm from './AddGameForm'

function About({ addGame }) {
    return (
        <div>
            <h1>ABOUT</h1>

            <AddGameForm addGame = {addGame}/>
        </div>
    )
}

export default About
