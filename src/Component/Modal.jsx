import React, {useState} from 'react';

export default function Modal({ project, closeModal }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    };

    const prevImage = (e) => {
        e.preventDefault();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="carousel">
                        <img src={project.images[currentImageIndex]} alt={project.title} />
                        <div className="carousel-controls">
                            <button onClick={(e) => { prevImage(e); stopPropagation(e); }}>Previous</button>
                            <button onClick={(e) => { nextImage(e); stopPropagation(e); }}>Next</button>
                        </div>
                    </div>
                    <h3>{project.title}</h3>
                    <p>Date: {project.date}</p>
                    <p>Languages: {project.languages.join(', ')}</p>
                    <p>{project.infos || project.description}</p>
                    {project.link && <a href={project.link}>Voir le projet</a>}
                </div>
            </div>
        </div>
    );
}