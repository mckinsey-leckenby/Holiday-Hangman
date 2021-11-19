import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Figure from './Figure'
import GameOver from './GameOver'
import YouWin from './YouWin'
import styled from 'styled-components'



function Guess({ word, setStart, start, start1 }) {

    const [correctLetter, setCorrectLetter] = useState([])
    const [wrongLetter, setWrongLetter] = useState([])
    const [status, setStatus] = useState('')
    const [letters, setLetters] = useState('abcdefghijklmnopqrstuvwxyz')

    //=============================LETTERS================================
    let eachLetter
    let letterArr = Array.from(letters.toUpperCase())
    eachLetter = letterArr.map((letter, index) => {
        return <Button
            className='letter'
            key={index}
            value={letter}
            onClick={(e) => {
                e.target.style.backgroundColor = 'black'
                if (word.includes(letter)) {
                    setCorrectLetter([...correctLetter, letter])
                    if (!maskedWord.includes("_")) {
                        setStatus("win")
                    }
                } else {
                    setWrongLetter([...wrongLetter, letter])
                    if (wrongLetter.length === 6) {
                        setStart(prev => !prev)
                        setStatus("lost")
                    }
                }
            }}>{letter}</Button>
    })
    //=============================LETTERS================================
    
    const maskedWord = word.split('').map((letter, index) => {
        if (correctLetter.includes(letter) || letter === " " || letter === "," || letter === "'" || letter === "." || letter === "?" || letter === "!") {
            return letter
        }
        else {
            return "_"
        }
    }
    )
    let win = (!maskedWord.includes("_"))
    const lettersAndBlanks = <div classname="letters-blanks"><Container>{maskedWord}</Container>{eachLetter}</div>
    const letsPlay = <Figure wrongLetter={wrongLetter.length} start={start} setStart={setStart} status={status} setStatus={setStatus} />
    console.log(word)
    return (
        <div className="game">
            {status === "lost" && <GameOver status={status} />}
            {win && <YouWin status={status} />}
            {status !== "lost" && [letsPlay, lettersAndBlanks]}
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

export default Guess


