import React from 'react';
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <Link to='/'>
                Home
            </Link>
            <Link to='/about'>
                About
            </Link>
            <Link to='/contact'>
                Contact
            </Link>
            <Link to='/instruction'>
                Instruction
            </Link>

        </>
    )
}

export default NavBar
