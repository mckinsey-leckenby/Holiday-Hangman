import React from 'react'
import GameOver from './GameOver'
import styled from 'styled-components'

const Figure = ({ wrongLetter, setStart, start, status, setStatus }) => {
    const head = <circle cx="140" cy="70" r="20" />
    const body = [head,
        <line x1="140" y1="90" x2="140" y2="150" />]
    const headBodyLeft = [...body,
    <line x1="140" y1="120" x2="120" y2="100" />]

    const headBodyRight = [...headBodyLeft,
    <line x1="140" y1="120" x2="160" y2="100" />]

    const headBodyRfoot = [...headBodyRight,
    <line x1="140" y1="150" x2="120" y2="180" />]

    const headBodyLfoot = [...headBodyRfoot,
    <line x1="140" y1="150" x2="160" y2="180" />]

    const rod = <svg height="250" width="200" className="figure-container">
        {/* <!-- Rod --> */}
        <line x1="60" y1="20" x2="140" y2="20" />
        <line x1="140" y1="20" x2="140" y2="50" />
        <line x1="60" y1="20" x2="60" y2="230" />
        <line x1="20" y1="230" x2="100" y2="230" />  </svg>


    return (
        <>
            <div>
                {wrongLetter !== 6 ? (
                    <div>
                        <svg height="250" width="200" className="figure-container">
                            {/* <!-- Rod --> */}
                            {rod}
                            {wrongLetter === 1 && head}
                            {wrongLetter === 2 && body}
                            {wrongLetter === 3 && headBodyLeft}
                            {wrongLetter === 4 && headBodyRight}
                            {wrongLetter === 5 && headBodyRfoot}
                            {wrongLetter === 6 && headBodyLfoot}
                        </svg>
                    </div>
                ) : <GameOver />}
            </div>
        </>
    )
}

export default Figure
