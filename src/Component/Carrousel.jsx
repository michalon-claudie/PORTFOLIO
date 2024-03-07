import React, {useState,useEffect} from 'react'
import '../Style/Carrousel.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Carousel({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [autoplayInterval, setAutoplayInterval] = useState(null);

    useEffect(() => {
        // Définir l'intervalle de défilement automatique
        const interval = setInterval(goToNextImage, 5000); // Changer d'image toutes les 5 secondes
        setAutoplayInterval(interval);

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(interval);
    }, [currentImageIndex]); // Mettre à jour l'effet lors du changement d'index d'image

    const goToPreviousImage = () => {
        const newIndex = (currentImageIndex - 1 + project.images.length) % project.images.length;
        setCurrentImageIndex(newIndex);
    };

    const goToNextImage = () => {
        const newIndex = (currentImageIndex + 1) % project.images.length;
        setCurrentImageIndex(newIndex);
    };

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <section className='actual_project'>
            <h2>Project Actuel </h2>
            <div className="carousel">
                <div className="project">
                    <img src={project.images[currentImageIndex]} alt={project.title} />
                    <h2>{project.title}</h2>
                    <a href={project.githubLink} className="github-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
            <div className="bullets">
                {project.images.map((image, index) => (
                    <button
                        key={index}
                        className={`bullet ${currentImageIndex === index ? 'active' : ''}`}
                        onClick={() => goToImage(index)}
                    />
                ))}
            </div>
        </section>
    );
};

