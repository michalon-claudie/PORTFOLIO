import React from 'react'
import projectsData from '../Projects.json'

export default function Projects(){
    return(
        <section className='Projects'>
            <h2>Mes projets</h2>
            <div className='projectsContainer'>
                {projectsData.map(project => (
                    <div key={project.id} className='project'>
                        <img src={project.img} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>Date: {project.date}</p>
                        <p>Languages: {project.languages.join(', ')}</p>
                        <p>{project.infos || project.description}</p>
                        {project.link && <a href={project.link}>Voir le projet</a>}
                    </div>
                ))}
            </div>
        </section>
    )
}