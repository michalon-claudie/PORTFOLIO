import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ project, closeModal }) {

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <img src={project.img} alt={project.title} />
                    <h3>{project.title}</h3>
                    <p>Date: {project.date}</p>
                    <p>Languages: {project.languages.join(', ')}</p>
                    <p>{project.infos || project.description}</p>
                    {project.link && <a href={project.link}>Voir le projet</a>}
                    {project.githubLink && (
                        <a href={project.githubLink} className="github-link">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}