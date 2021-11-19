import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'


function AddGameForm() {

    const [movies, setMovies] = useState([])
    // console.log(movies)
    const [formData, setFormData] = useState({

        title: "",
        quote: "",
        character: "",
        id: ""

    })
    const addGame = (newGame) => {
        //console.log(newTransaction)
        setMovies([...movies, newGame])
        console.log(movies)
    }
    useEffect(() => {
        fetch('https://hangman-djm-json-server.herokuapp.com/movies')
            .then(resp => resp.json())
            .then(data => setMovies(data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        const newGame = {
            title: formData.title,
            quote: formData.quote,
            character: formData.character,
            id: uuidv4()
        }


        fetch('https://hangman-djm-json-server.herokuapp.com/movies', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(newGame)
        })
            .then(resp => resp.json())
            .then(data => addGame(data))
        setFormData({
            title: "",
            quote: "",
            character: "",
            id: ""
        })

    }

    const handleOnChange = (e) => {
        console.log(formData)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    let audio1 = new Audio("/openchristmas.mp3")
    const start1 = () => {
        audio1.play()
    }
    return (

        <GameFormContainer className="add-game-form" >
            <h2>Enter New Game Here!</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleOnChange} type="text" name="title" placeholder="Movie Title" value={formData.title} />
                <input onChange={handleOnChange} type="text" name="character" placeholder="Character" value={formData.character} />
                <input onChange={handleOnChange} type="text" name="quote" placeholder="Quote" value={formData.quote} />
                <button onClick={start1} type="submit">Add Movie</button>
            </form>
        </GameFormContainer>
    )
}
const GameFormContainer = styled.div`
        font-size: 25px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        top: 200px;
        color: white;
        font-family: 'Mountains of Christmas', cursive;
        
        text-shadow: 2px 2px #FF0000;`

export default AddGameForm