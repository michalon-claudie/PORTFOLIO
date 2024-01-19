import React, { useEffect, useState,useRef }from 'react'
import '../Style/Naviguation.scss'

export default function Naviguation (){
    const [activeSection, setActiveSection] = useState('Accueil');
    const navRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
        const Accueil = document.getElementById('Accueil');
        const Projets = document.getElementById('Projets');
        const A_propos = document.getElementById('A_propos');
        const scrollPosition = window.scrollY;
        const navOffsetTop = navRef.current.offsetTop;
        }})
    return(
        <div className='titleAndNavBar'>
            <div className='Title'>
                <h1>MICHALON Claudie</h1>
            </div>
            <div className='iconContainer'>
                <nav className='navList'>
                <a href="#Accueil" className={activeSection === 'Accueil' ? 'active' : ''}>Accueil</a>
                <a href="#Projets" className={activeSection === 'Projets' ? 'active' : ''}>Projets</a>
                <a href="#A_propos" className={activeSection === 'A_propos' ? 'active' : ''}>A propos</a>
                </nav>
            </div>
        </div>
    )
}