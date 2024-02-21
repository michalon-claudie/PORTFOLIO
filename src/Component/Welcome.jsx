import React, { useState, useEffect } from 'react'
import img from '../images/MICHALON.webp'
import '../Style/Welcome.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Welcome(){
const [message, setMessage] = useState('');
const originalMessage = "< Bienvenue, je suis Claudie Michalon, développeuse frontend />";
const [showPhoneNumber, setShowPhoneNumber] = useState(false);

useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
        setMessage(originalMessage.slice(0, index));
        index++;

        if (index > originalMessage.length) {
            clearInterval(intervalId);
        }
    }, 150);
}, []);


const handlePhoneIconClick = () => {
    setShowPhoneNumber(!showPhoneNumber);
};
return (
    <section id="Accueil" className='welcomeContainer'>
        <div className= 'helloAndContactContainer'>
            <p>{message}</p>
            <div className='iconContact'>
                <a href="https://github.com/michalon-claudie">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/claudie-michalon-8b1a0422a/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href="MAILTO:michalon.claudie@outlook.fr">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <FontAwesomeIcon icon={faPhoneVolume} onClick={handlePhoneIconClick} className={showPhoneNumber ? 'active' : ''} />
            </div>
            {showPhoneNumber && <p className="phoneNumber">+33621646708</p>}
        </div>
            <img src={img} alt="MICHALONDevReact" className="imgTransition" />
    </section>
);
}