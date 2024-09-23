import React from 'react'
import '../Style/About.scss'
import MCPicture from '../images/MICHALON.webp'

export default function About(){
    return(
        <section id="A_propos"className='AboutSection'>
            <h3>Enchanté et Bienvenue sur mon portfolio !</h3>
            <div className='AboutSectionP'>
                <p>
                    Je suis Claudie, ancienne infirmière et développeuse web fraichement diplômée.
                </p>
                <img src={MCPicture} alt="MichalonC"/>
            </div>
            <ul>
                <li>
                    Ancienne Infirmière
                </li>
                <li>
                    Diplomée d'Openclassroom -Développeur Front-end
                </li>
                <li>
                    1ère expérience - Start-up
                </li>
                <li>
                    En cours: Formation en Back-end et UX design en autodidacte
                </li>
                <li>
                    En cours: Projet personnel et à la recherche de nouvelles opportunités
                </li>
            </ul>
        </section>
    )
}