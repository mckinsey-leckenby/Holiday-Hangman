
import React, { useState, useEffect } from 'react'
import Figure from './Figure'


const url = "http://localhost:4000/movies"

// const words1 = [movies.character]
// const words2 = [movies.title]
// const words3 = [movies.quote]
// let selectedWord1 = words1[Math.floor(Math.random() * words1.length)];
// let selectedWord2 = words2[Math.floor(Math.random() * words2.length)];
// let selectedWord3 = words3[Math.floor(Math.random() * words3.length)];



function Home() {
    const [data, setData] = useState([])
    const [levelOne, setLevelOne] = useState([])
    const [levelTwo, setLevelTwo] = useState([])
    const [levelThree, setLevelThree] = useState([])
    const [playable, setPlayable] = useState(true);
    const [correctLetters, setCorrectLetters] = useState([]);
    const [wrongLetters, setWrongLetters] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setLevelOne(data.map(data => data.character))
                setLevelTwo(data.map(data => data.title))
                setLevelThree(data.map(data => data.quote))
            })
    }, [])

    // let randomizedWords1 = levelOne[Math.floor(Math.random() * levelOne.length)]
    // let randomizedWords2 = levelTwo[Math.floor(Math.random() * levelTwo.length)]
    // let randomizedWords3 = levelThree[Math.floor(Math.random() * levelThree.length)]
    // console.log(randomizedWords1)

    // let selectedWord1 = randomizedWords1
    // let selectedWord2 = randomizedWords2
    // let selectedWord3 = randomizedWords3
    
    // console.log(randomizedWords2)

    // console.log(levelOne)
    // console.log(levelTwo)
    // console.log(levelThree)

    // useEffect(() => {
    //     const handleKeydown = event => {
    //       const { key, keyCode } = event;
    //       if (playable && keyCode >= 65 && keyCode <= 90) {
    //         const letter = key.toLowerCase();
    //         if (randomizedWords1.includes(letter)) {
    //           if (!correctLetters.includes(letter)) {
    //             setCorrectLetters(currentLetters => [...currentLetters, letter]);
    //         //   } else {
    //         //     show(setShowNotification);
    //           }
    //         } else {
    //           if (!wrongLetters.includes(letter)) {
    //             setWrongLetters(currentLetters => [...currentLetters, letter]);
    //           } else {
    //             show(setShowNotification);
    //           }
    //         }
    //       }
    //     }
    //     window.addEventListener('keydown', handleKeydown);
    
    //     return () => window.removeEventListener('keydown', handleKeydown);
    //   }, [correctLetters, wrongLetters, playable]);



    return (
        <>
            <div className="main-container">
                <div className="game-container">
                    <Figure />
                    
                </div>

            </div>
        </>
    )
}

export default Home
