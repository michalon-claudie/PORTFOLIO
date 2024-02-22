import React, { useEffect, useState,useRef }from 'react'
import '../Style/Naviguation.scss'

export default function Naviguation (){
    const [activeSection, setActiveSection] = useState('Accueil');
    const accueilRef = useRef(null);
    const projetsRef = useRef(null);
    const aproposRef = useRef(null);
    const contactRef = useRef(null);
    const resumeRef = useRef(null);
    const navBarRef = useRef(null);
    
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (
              scrollPosition >= accueilRef.current.offsetTop &&
              scrollPosition < projetsRef.current.offsetTop
            ) {
              setActiveSection('Accueil');
            navBarRef.current.classList.add('fixed-nav');
            } else if (
              scrollPosition >= projetsRef.current.offsetTop &&
              scrollPosition < aproposRef.current.offsetTop
            ) {
              setActiveSection('A_propos');
              navBarRef.current.classList.remove('fixed-nav');
            } else if (
              scrollPosition >= aproposRef.current.offsetTop &&
              scrollPosition < contactRef.current.offsetTop
            ) {
              setActiveSection('Project');
              navBarRef.current.classList.remove('fixed-nav');
            } else if (
              scrollPosition >= contactRef.current.offsetTop
            ) {
              setActiveSection('Resume');
              navBarRef.current.classList.remove('fixed-nav');
              } else if (
                scrollPosition >= contactRef.current.offsetTop
              ){
                setActiveSection('Contact');
                navBarRef.current.classList.remove('fixed-nav');
              } else {
                setActiveSection('');
                navBarRef.current.classList.remove('fixed-nav');
              }
      
            if (scrollPosition >= navBarRef.current.offsetTop) {
              navBarRef.current.classList.add('fixed-nav');
            } else {
              navBarRef.current.classList.remove('fixed-nav');
            }
          };
          const handleScrollWithLoad = () => {
            handleScroll();
            window.addEventListener('scroll', handleScroll);
          };
      
          handleScrollWithLoad();
      
          window.addEventListener('load', handleScrollWithLoad);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
        return (
            <div className={`NavBar ${activeSection === 'Accueil' ? 'active' : ''}`} ref={navBarRef}>
            <nav className='navList'>
                <a href="#Accueil" ref={accueilRef} className={activeSection === 'Accueil' ? 'active' : ''}>Accueil</a>
                <a href="#A_propos" ref={aproposRef} className={activeSection === 'A_propos' ? 'active' : ''}>A propos</a>
                <a href="#Projets" ref={projetsRef} className={activeSection === 'Projets' ? 'active' : ''}>Projets</a>
                <a href="#Resume" ref={resumeRef} className={activeSection === 'Resume' ? 'active' : ''}>Mon CV </a>
                <a href="#Contact" ref={contactRef} className={activeSection === 'Contact' ? 'active' : ''}>Contact</a>
            </nav>
            </div>
        );
        }