import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'


function Letters({ letterGuess, word }) {
    const [letters, setLetters] = useState('abcdefghijklmnopqrstuvwxyz')

    let letterArr = Array.from(letters.toUpperCase())
    let eachLetter = letterArr.map(letter => {
        return <Button
            className='letter'
            key={letter}
            value={letter}
            onClick={(e) => letterGuess(e)}
        >{letter}</Button>
    })


    return (
        <>
            {eachLetter}
        </>
    )
}

export default Letters
