import React from 'react'
import '../Style/About.scss'
import MCPicture from '../images/MICHALON.webp'

export default function About(){
    return(
        <section id="A_propos"className='AboutSection'>
            <h3>Enchanté et Bienvenue sur mon portfolio !</h3>
            <div className='AboutSectionP'>
                <p>
                    Je suis Claudie, infirmière et développeuse web à ses heures perdues.
                </p>
                <img src={MCPicture} alt="MichalonC"/>
            </div>
            <ul>
                <li>
                    Infirmière diplômée Croix rouge française - 2018
                </li>
                <li>
                    Diplomée d'Openclassroom -Développeur Front-end
                </li>
                <li>
                    Expérience en infirmière, à travers différents secteurs et à travers la France.<br/>
                </li>
            </ul>
        </section>
    )
}