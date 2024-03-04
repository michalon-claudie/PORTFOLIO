import React, {useState} from 'react'
import '../Style/Carrousel.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Carousel({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        const newIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
        setCurrentImageIndex(newIndex);
    };

    const goToNextImage = () => {
        const newIndex = (currentImageIndex + 1) % project.images.length;
        setCurrentImageIndex(newIndex);
    };

    return (
        <section className='actual_project'>
            <h2>Project Actuel </h2>
            <div className="carousel">
                <button onClick={goToPreviousImage} className="nav-button previous">&lt;</button>
                <div className="project">
                    <img src={project.images[currentImageIndex]} alt={project.title} />
                    <h2>{project.title}</h2>
                    <a href={project.githubLink} className="github-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <button onClick={goToNextImage} className="nav-button next">&gt;</button>
            </div>
        </section>
    );
};

