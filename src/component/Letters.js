import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'


function Letters({ maskedWord, word, setCorrectLetter, setWrongLetter, wrongLetter, correctLetter, setStart, setStatus }) {
    const [letters, setLetters] = useState('abcdefghijklmnopqrstuvwxyz')


    // const maskedWord = word.split('').map(letter => {
    //     if (correctLetter.includes(letter) || letter === " " || letter === "," || letter === "'" || letter === "." || letter === "?" || letter === "!") {
    //         return letter
    //     }
    //     else {
    //         return "_"
    //     }
    // })

    let letterArr = Array.from(letters.toUpperCase())
    let eachLetter = letterArr.map(letter => {
        return <Button
            className='letter'
            key={letter}
            value={letter}
            onClick={() => {
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



    return (
        <>
            <div>
                <h1>{maskedWord}</h1>
                {eachLetter}
            </div>
        </>
    )
}

export default Letters
