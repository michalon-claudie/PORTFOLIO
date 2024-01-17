import React from 'react'
import '../Style/Header.scss'

export default function Header (){
    
    return(
        <div className='titleAndNavBar'>
            <div className='Title'>
                <h1>MICHALON Claudie</h1>
            </div>
            <div className='iconContainer'>
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
            </div>
        </div>
    )
}