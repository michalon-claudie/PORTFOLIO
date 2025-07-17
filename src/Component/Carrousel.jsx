import React, {useState, useEffect} from 'react'
import '../Style/Carrousel.scss'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Carousel({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToImage = (index) => {
        setCurrentImageIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (currentImageIndex + 1) % project.images.length;
            setCurrentImageIndex(newIndex);
        }, 3000); 
        return () => clearInterval(interval);
    }, [currentImageIndex, project.images.length]);

    return (
        <section className='actual_project'>
            <h2>Project Actuel </h2>
            <div className="carousel">
                <div className="project">
                {project.images.map((image, index) => (
                    <img 
                        key={index} 
                        src={image} 
                        alt={project.title} 
                        className={`carousel-image ${currentImageIndex === index ? 'active' : ''}`}
                    />
                ))}
                    <h2>{project.title}</h2>
                    <a href={project.githubLink} className="github-link">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
            <div className="bullets">
                {project.images.map((_, index) => (
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

