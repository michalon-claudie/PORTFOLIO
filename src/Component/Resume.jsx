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
            <button onClick={downloadResume}>Download CV</button>
        </div>
        <div className="skills">
            <h3>Skills</h3>
            <Skill name="JavaScript" level={80} />
            <Skill name="React" level={90} />
            {/* */}
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