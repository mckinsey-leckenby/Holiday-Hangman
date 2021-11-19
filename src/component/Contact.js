import React from 'react'
import styled from 'styled-components'


function Contact() {
    return (

        <ContactContainer>
            <h4>
                The DJM Hangman application was built by the coding trio of Jeremiah Marcos, McKinsey Leckenby, and Daniel Sheehan.
                If you have any questions regarding the game or code itself, you can contact us at ...
            </h4>
            <ul>
                <li> Jeremiah <a href="https://www.linkedin.com/in/jeremiah-marcos-915aba1ab/">LinkedIn</a></li>
                <li> McKinsey <a href="https://www.linkedin.com/in/mckinsey-leckenby-629849b8/">LinkedIn</a></li>
                <li> Daniel <a href="https://www.linkedin.com/in/daniel-sheehan-6981a7226/">LinkedIn</a></li>
            </ul>
        </ContactContainer>
    )
}

const ContactContainer = styled.div`
        display: flex;
        font-size: 40px;
        justify-content:center;
        text-align: center;
        flex-wrap: wrap;
        top: 100px;
        color: white;
        font-family: 'Mountains of Christmas', cursive;
        padding-top: 4em;
        text-shadow: 2px 2px #ff0000;
        `




export default Contact
