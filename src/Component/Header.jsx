import React, { useState } from 'react'
import '../Style/Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

export default function Header (){
    const [isNavVisible, setNavVisibility] = useState(false);

    const handleIconOnClick =() =>{
        setNavVisibility(true);
    };

    const handleIconHover = () => {
        setNavVisibility(true);
    };

    const handleIconLeave = () => {
        setNavVisibility(false);
    };
    return(
        <div className='titleAndNavBar'>
            <div className='Title'>
                <h1>MICHALON Claudie</h1>
                <h2>Développeuse FRONT-END React</h2>
                <a href="mailto:michalon.claudie@outlook.fr">michalon.claudie@outlook.fr</a>
            </div>
            <div className='iconContainer' onClick={handleIconOnClick} onMouseEnter={handleIconHover} onMouseLeave={handleIconLeave}>
                <FontAwesomeIcon icon={faEllipsis} />
                {isNavVisible && (
                <nav className='navList'>
                    <li>
                        Acceuil
                    </li>
                    <li>
                        Mes Projets
                    </li>
                    <li>
                        A propos
                    </li>
                </nav>
                )}
            </div>
        </div>
    )
}