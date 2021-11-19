import React from 'react';
import { Link } from "react-router-dom"
import { AiFillHome } from "react-icons/ai"
import { FaGamepad } from "react-icons/fa"
import { IoIosContact } from "react-icons/io"
import { BiDirections } from "react-icons/bi"



function NavBar() {

    return (
        <>

            <Link to='/'>
                <AiFillHome size='100' color='red' />
            </Link>
            <Link to='/newMovies'>
                <FaGamepad size='100' color='red' />
            </Link>
            <Link to='/contact'>
                <IoIosContact size='100' color='red' />
            </Link>
            <Link to='/instruction'>
                <BiDirections size='100' color='red' />
            </Link>

        </>
    )
}


// const Nav = styled.div`
//     display: flex;
//     justify-content: space-between
//     align-items: center;
//     flex-wrap: wrap;
// `

export default NavBar
