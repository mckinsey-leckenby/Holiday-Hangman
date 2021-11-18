import Button from 'react-bootstrap/Button'
import React, { useState, useEffect } from 'react'
import Guess from './Guess'

const url = "http://localhost:4000/movies"

function Home() {
    const [levelOne, setLevelOne] = useState([])
    const [levelTwo, setLevelTwo] = useState([])
    const [levelThree, setLevelThree] = useState([])
    const [randomedWord, setRandomedWord] = useState('')
    const [start, setStart] = useState(false)


    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setLevelOne(data.map(data => data.character))
                setLevelTwo(data.map(data => data.title))
                setLevelThree(data.map(data => data.quote))
            })
    }, [])



    let audio1 = new Audio("/openchristmas.mp3")
    const start1 = () => {
        audio1.play()
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
                {!start &&
                <div className="selectLevel">
                    <Button
                        value="levelOne"
                        onClick={handleSelectLevel}
                        onMouseOver={start1}
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
                }

                <div className="game-container">
                    {start && <Guess word={randomedWord.toUpperCase()} start={start} setStart={setStart} />}
                </div>

            </div>
        </>
    )
}

export default Home
