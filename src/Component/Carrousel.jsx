import React, {useState} from 'react'

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
        <div className="carousel">
            <button onClick={goToPreviousImage} className="nav-button previous">&lt;</button>
            <div className="project">
                <img src={project.images[currentImageIndex]} alt={project.title} />
                <h2>{project.title}</h2>
            </div>
            <button onClick={goToNextImage} className="nav-button next">&gt;</button>
        </div>
    );
};
