import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react'
import Figure from './Figure'
import Guess from './Guess'
//import AddGameForm from './AddGameForm'


const url = "http://localhost:4000/movies"


function Home() {
    const [levelOne, setLevelOne] = useState([])
    const [levelTwo, setLevelTwo] = useState([])
    const [levelThree, setLevelThree] = useState([])
    const [randomedWord, setRandomedWord] = useState('')
    const [start, setStart] = useState(false)
    //const [play, setPlay] = useState()


    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setLevelOne(data.map(data => data.character))
                setLevelTwo(data.map(data => data.title))
                setLevelThree(data.map(data => data.quote))
            })
    }, [])

    const addGame = (newGame) => {
        //console.log(newTransaction)
        setLevelOne([...levelOne, newGame])
        setLevelTwo([...levelTwo, newGame])
        setLevelThree([...levelThree, newGame])
      }
    


    const handleSelectLevel = (e) => {
        let random
        if (e.target.value === "levelOne") {
            random = levelOne[Math.floor(Math.random() * levelOne.length)]
            setRandomedWord(random)
            console.log(randomedWord)
        }
        if (e.target.value === "levelTwo") {
            random = levelTwo[Math.floor(Math.random() * levelTwo.length)]
            setRandomedWord(random)
            console.log(randomedWord)
        }
        if (e.target.value === "levelThree") {
            random = levelThree[Math.floor(Math.random() * levelThree.length)]
            setRandomedWord(random)
            console.log(randomedWord)
        }
        setStart(prev => !prev)
    }


    return (
        <>
            <div className="main-container">
                <div className="selectLevel">
                    <Button
                        value="levelOne"
                        onClick={handleSelectLevel}
                    >Level One</Button>

                    <Button
                        value="levelTwo"
                        onClick={handleSelectLevel}
                    >Level Two</Button>

                    <Button
                        value="levelThree"
                        onClick={handleSelectLevel}
                    >Level Three</Button>
                </div>

                <div className="game-container">
                    <Figure />
                    <Guess word={randomedWord.toUpperCase()} start={start} />
                </div>
               
            </div>
        </>
    )
}

export default Home
