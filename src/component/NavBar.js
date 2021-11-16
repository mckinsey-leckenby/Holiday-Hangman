import React from 'react';
import { Link } from "react-router-dom"
import {AiFillHome} from "react-icons/ai"
import {SiAboutdotme} from "react-icons/si"
import {IoIosContact} from "react-icons/io"
import {BiDirections} from "react-icons/bi"

function NavBar() {
   
    return (
        <>
            <Link to='/'>
                <AiFillHome/>
            </Link>
            <Link to='/about'>
              <SiAboutdotme/>
            </Link>
            <Link to='/contact'>
                <IoIosContact/>
            </Link>
            <Link to='/instruction'>
                <BiDirections/>
            </Link>

        </>
    )
}

export default NavBar
