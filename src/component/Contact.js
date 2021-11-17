import React from 'react'
import styled from 'styled-components'


function Contact() {
    return (

        <ContactContainer>
           The DJM Hangman application was built by the coding trio of Jeremiah Marcos, McKinsey Leckenby, and Daniel Sheehan.
           If you have any questions regarding the game or code itself, you can contact us at ...  
        </ContactContainer>
        <div>
            <h1>Contact us</h1>
            <h2>
                If you have any questions while
                using the Application please contact us via
                email at contact@djmhangmanapp.com
            </h2>
        </div>
    )
}

const ContactContainer = styled.div`
        font-size: 40px;
        display: flex;
        justify-content: space-between;
        text-align: center;
        flex-wrap: wrap;
        top: 100px;
        color: white;
        font-family: 'Mountains of Christmas', cursive;
        padding-top: 4em;
        text-shadow: 2px 2px #ff0000;

`




export default Contact
