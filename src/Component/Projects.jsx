import React, {useState} from 'react'
import Modal from '../Component/Modal'
import projectsData from '../Projects.json'
import '../Style/Project.scss'

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="Projets"className='Projects'>
            <h2>Mes projets</h2>
            <div className='projectsContainer'>
                {projectsData.map(project => (
                    <div key={project.id} className='project'>
                        <img src={project.cover} alt={project.title} onClick={() => openModal(project)} />
                    </div>
                ))}
            </div>
            {selectedProject && <Modal project={selectedProject} closeModal={closeModal} />}
        </section>
    );
}