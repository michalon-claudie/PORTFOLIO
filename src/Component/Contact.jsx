import React from 'react'
import '../Style/Contact.scss'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Contact(){

    return(
        <section id="Contact"className='ContactMe'>
            <h1>Un projet en tête ? Parlons-en !</h1>
            <div className='iconContact'>
            <a href="https://github.com/michalon-claudie" aria-label='Link to Github'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/claudie-michalon/"aria-label='Link to LinkedIn'>
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a href ="MAILTO:michalon.claudie@outlook.fr" aria-label='Send email'>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a href="tel:+33621646708" aria-label='Call me'>
                <FontAwesomeIcon icon={faPhoneVolume} />
                </a>
            </div>
        </section>
    )
}