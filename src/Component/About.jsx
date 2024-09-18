import React from 'react'
import '../Style/About.scss'

export default function About(){
    return(
        <section id="A_propos"className='AboutSection'>
            <h3>Enchanté et Bienvenue sur mon portfolio !</h3>
            <p className='AboutSectionP'>
                <br/>
                Après plusieurs années dans le domaine de la santé, j'ai ressenti le besoin de changer. 
                <br/>
                Suite à de multiples recherches et beaucoup d'apprentissage en autodidacte, 
                j'ai décidé de m'orienter dans le développement web, en particulier dans le domaine du Frontend.
            </p>
            <p className='AboutSectionPNumbertwo'>
                Une fois diplomée, j'ai mis en pratique mes connaissances. <br/>Une dynamique start-up Troyenne m'a fait confiance et m'a permis de mettre en pratique ce que j'avais appris. 
                De plus, durant l'exercice de mes fonctions,  j'ai pu me former au back-end, aux concepts d'UX/UI design et au gestion de bases de données.
                <br/>J'aime apprendre seule mais apprendre auprès de professionels passionnés fut très enrichissant. 
                <br/>
                Toutefois, cette expérience fut écourtée en raisons de problèmes économiques au sein de l'entreprise. 
                C'est pourquoi je suis à la recherche d'une nouvelle opportunité.
                <br/>
            </p>
            <p className='AboutSectionPNumberthree'>
                Mon intérêt ne fait que grandir au fil de mes projets.
                Chaque jour, je continue de créer des projets et de m'exercer afin de proposer des expériences numériques dynamiques et intéressantes.<br/>
                N'hésitez pas à parcourir mon site et à bientôt !
            </p>
        </section>
    )
}