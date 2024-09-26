import React, { useState, useEffect } from 'react'
import '../Style/Welcome.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Welcome(){
const [message, setMessage] = useState('');
const originalMessage = "< Bienvenue, je suis Claudie Michalon, infirmière et développeuse web />";

useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
        setMessage(originalMessage.slice(0, index));
        index++;

        if (index > originalMessage.length) {
            clearInterval(intervalId);
        }
    }, 150); 

    return () => {
        clearInterval(intervalId);
    };
}, []);




return (
    <section id="Accueil" className='welcomeContainer'>
        <div className= 'helloAndContactContainer'>
            <p>{message}</p>
            <div className='iconContact'>
                <a href="https://github.com/michalon-claudie" aria-label='Link to Github'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/claudie-michalon/"aria-label='Link to LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="MAILTO:michalon.claudie@outlook.fr" aria-label='Send me an email'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="tel:+33621646708" aria-label='Call me'>
                <FontAwesomeIcon icon={faPhoneVolume} />
                </a>
            </div>
        </div>
    </section>
);
}