import React, { useState, useEffect } from 'react'
import img from '../images/MICHALON.webp'
import '../Style/Welcome.scss'

export default function Welcome(){
const [message, setMessage] = useState('');
const originalMessage = "< Bienvenue, je suis Claudie Michalon, développeuse frontend />";

useEffect(() => {
let index = 0;
const intervalId = setInterval(() => {
    setMessage(originalMessage.slice(0, index));
    index++;

    if (index > originalMessage.length) {
    clearInterval(intervalId);
    }
}, 100);
}, []);
    return(
        <section className='welcomeContainer'>
            <p>{message}</p>
            <img src={img} alt="MICHALONDevReact"/>
        </section>
    )
}