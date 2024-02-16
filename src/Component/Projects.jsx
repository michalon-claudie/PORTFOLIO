import React, {useState} from 'react'
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
        <section className='Projects'>
            <h2>Mes projets</h2>
            <div className='projectsContainer'>
                {projectsData.map(project => (
                    <div key={project.id} className='project'>
                        <img src={project.img} alt={project.title} onClick={() => openModal(project)} />
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <img src={selectedProject.img} alt={selectedProject.title} />
                            <h3>{selectedProject.title}</h3>
                            <p>Date: {selectedProject.date}</p>
                            <p>Languages: {selectedProject.languages.join(', ')}</p>
                            <p>{selectedProject.infos || selectedProject.description}</p>
                            {selectedProject.link && <a href={selectedProject.link}>Voir le projet</a>}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}