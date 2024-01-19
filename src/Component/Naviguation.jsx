import React, { useEffect, useState,useRef }from 'react'
import '../Style/Naviguation.scss'

export default function Naviguation (){
    const [activeSection, setActiveSection] = useState('Accueil');
    
    useEffect(() => {
        const handleScroll = () => {
        const Accueil = document.getElementById('Accueil');
        const Projets = document.getElementById('Projets');
        const A_propos = document.getElementById('A_propos');
        const scrollPosition = window.scrollY;

        if (
            scrollPosition >= Accueil.offsetTop &&
            scrollPosition < Projets.offsetTop
          ) {
            setActiveSection('Accueil');
          } else if (
            scrollPosition >= Projets.offsetTop &&
            scrollPosition < A_propos.offsetTop
          ) {
            setActiveSection('Projets');
          } else if (
            scrollPosition >= Projets.offsetTop &&
            scrollPosition < A_propos.offsetTop
          ) {
            setActiveSection('A_propos');
          } else{
            setActiveSection('Contact')
          }

        };
        const handleScrollWithLoad = () => {
            handleScroll();
            window.addEventListener('scroll', handleScroll);
          };

        window.addEventListener('load', handleScrollWithLoad);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [])
    return(
        <div className='NavBar'>
            <nav className='navList'>
            <a href="#Accueil" className={activeSection === 'Accueil' ? 'active' : ''}>Accueil</a>
            <a href="#Projets" className={activeSection === 'Projets' ? 'active' : ''}>Projets</a>
            <a href="#A_propos" className={activeSection === 'A_propos' ? 'active' : ''}>A propos</a>
            <a href="#Contact" className={activeSection === 'A_propos' ? 'active' : ''}>Contact</a>
            </nav>
        </div>
    )
}