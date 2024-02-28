import React from 'react'
import '../Style/Contact.scss'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Contact(){

    return(
        <section className='ContactMe'>
            <h1>Un projet en tête ? Parlons-en !</h1>
            <div className='iconContact'>
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