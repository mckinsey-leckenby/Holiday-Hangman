import React, { useState } from 'react'
import Letters from './Letters'


function Guess({ word, start }) {
    const [correctLetter, setCorrectLetter] = useState([])
    const [wrongLetter, setWrongLetter] = useState([])
    const [winOrLose, setWinOrLose] = useState(false)

    const spaceFinder = word.split("")
    const wordSplitted = word.match(/\S/g)
    console.log(wordSplitted)
    console.log(spaceFinder)
    // console.log(correctLetter)

    const letterGuess = (e) => {
        if (start) {
            if (word.includes(e.target.value)) {
                if (!correctLetter.includes(e.target.value)) {
                    setCorrectLetter(currentLetter => [...currentLetter, e.target.value])
                    console.log(correctLetter)
                }

            } else {
                console.log("not a letter")
            }
        }
    }

    let onBlanks
    if (start) {
        onBlanks = word.split('').map(letter => {
            if (letter === " ") {
                return " "
            }
            else if (letter === ",") {
                return ","
            }
            else if (letter === "'") {
                return "'"
            }
            else if (letter === "?") {
                return "?"
            }
            else if (letter === ".") {
                return "."
            }
            else {
                return "__"
            }
        })
        onBlanks.join(" ")
    }


    return (
        <div className="game">
            <h1>{onBlanks}</h1>
            <h2>{word}</h2>
            <section className="letters">
                <Letters word={word} letterGuess={letterGuess} />
            </section>
        </div>
    )
}

export default Guess
