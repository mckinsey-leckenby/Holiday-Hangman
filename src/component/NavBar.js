import React from 'react';
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <>
            <Link to='/about' activeStyle>
                About
            </Link>
            <Link to='/contact' activeStyle>
                Contact
            </Link>
            <Link to='/instruction' activeStyle>
                Instruction
            </Link>

        </>
    )
}

export default NavBar
