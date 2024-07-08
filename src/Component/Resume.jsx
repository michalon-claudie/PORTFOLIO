import React from 'react'
import resume from '../images/myresume.webp'
import pdfResume from '../images/CV MICHALON CLAUDIE 07_2024.pdf'
import '../Style/Resume.scss'

export default function Resume(){
    const downloadResume = () => {
        window.open(pdfResume);
    };
    return(
    <section id="Resume"className='resume'>
        <div className='resumePart'>
            <h2>Mon CV</h2>
            <img src={resume} alt="myResume"/>
            <Skill name="Education - Openclassroom Intégrateur Web" level={100} />
            <Skill name="Formation en entreprise SVELTEKIT/MySQL/UI" level={100} />
            <Skill name="Education - Autodidacte UI" level={50} />
            <button onClick={downloadResume}>Télécharger le CV</button>
        </div>
        <div className="skills">
            <h2>Mes Compétences</h2>
            <Skill name="Html" level={90} />
            <Skill name="CSS/Sass" level={90} />
            <Skill name="UI" level={40} />
            <Skill name="JavaScript" level={70} />
            <Skill name="React" level={80} />
            <Skill name="Redux" level={60} />
            <Skill name="Sveltekit" level={70} />
            <Skill name="SEO" level={80} />
            <Skill name="Optimisation" level={80} />
            <Skill name="Gestion de projet" level={80} />
            <Skill name="Github/GitLab" level={70} />
            <Skill name="Responsive" level={85} />
            <Skill name="Node JS" level={40} />
            <Skill name="MySQL" level={60} />
        </div>
    </section>
    );
}

function Skill({ name, level }) {
    return (
        <div className="skill">
            <div className="skill-name">{name}</div>
            <div className="progress-bar">
                <div className="progress" style={{ width: `${level}%` }}></div>
            </div>
        </div>
    );
}