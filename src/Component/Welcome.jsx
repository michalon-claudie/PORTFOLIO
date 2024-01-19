import React, { useState, useEffect } from 'react'
import img from '../images/MICHALON.webp'
import '../Style/Welcome.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <div className='helloAndContactContainer'>
                <p>{message}</p>
                <div className='iconContact'>
                    <a href="https://github.com/michalon-claudie">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/claudie-michalon-8b1a0422a/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href ="MAILTO:michalon.claudie@outlook.fr">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <FontAwesomeIcon icon={faPhoneVolume} />
                </div>
            </div>
            <img src={img} alt="MICHALONDevReact"/>
        </section>
    )
}