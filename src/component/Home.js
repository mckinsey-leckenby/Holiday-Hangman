import React, { useState, useEffect } from 'react'


const url = "http://localhost:4000/movies"
function Home() {
    const [data, setData] = useState([])
    const [levelOne, setLevelOne] = useState([])
    const [levelTwo, setLevelTwo] = useState([])
    const [levelThree, setLevelThree] = useState([])

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(data => {
                setLevelOne(data.map(data => data.character))
                setLevelTwo(data.map(data => data.title))
                setLevelThree(data.map(data => data.quote))
            })
    }, [])


    // console.log(levelOne)
    // console.log(levelTwo)
    console.log(levelThree)








    return (
        <>
            <div className="main-container">
                <h1>HOME</h1>
                <p>data</p>
            </div>
        </>
    )
}

export default Home
