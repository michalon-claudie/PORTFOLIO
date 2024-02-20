import React from 'react'
import resume from '../images/myresume.png'
import '../Style/Resume.scss'

export default function Resume(){
    return(
    <div id="Resume"className='resume'>
        <h2>My Resume</h2>
        <img src={resume} alt="myResume"/>
        <div className="skills">
            <h3>Skills</h3>
            <Skill name="JavaScript" level={80} />
            <Skill name="React" level={90} />
            {/* */}
        </div>
    </div>
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