import React from 'react'
import resume from '../images/myresume.png'
import pdfResume from '../images/CV_MICHALON_Claudie_012024.pdf'
import '../Style/Resume.scss'

export default function Resume(){
    const downloadResume = () => {
        window.open(pdfResume);
    };
    return(
    <section id="Resume"className='resume'>
        <div className='resumePart'>
            <h2>My Resume</h2>
            <img src={resume} alt="myResume"/>
            <Skill name="Education - Openclassroom Intégrateur Web" level={100} />
            <Skill name="Education - Autodidacte Wordpress- UX Design" level={50} />
            <button onClick={downloadResume}>Download CV</button>
        </div>
        <div className="skills">
            <h2>Skills</h2>
            <Skill name="Html" level={90} />
            <Skill name="CSS" level={90} />
            <Skill name="Sass" level={85} />
            <Skill name="JavaScript" level={70} />
            <Skill name="React" level={80} />
            <Skill name="Redux" level={70} />
            <Skill name="SEO" level={80} />
            <Skill name="Optimisation" level={80} />
            <Skill name="Gestion de projet" level={80} />
            <Skill name="Github/GitLab" level={60} />
            <Skill name="Responsive" level={85} />
            <Skill name="Node JS" level={40} />
            <Skill name="Mongodb" level={30} />
            <Skill name="WordPress" level={30} />
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