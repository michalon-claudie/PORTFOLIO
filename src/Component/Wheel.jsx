import React, { useState } from 'react';
import Modal from '../Component/Modal.jsx'; 
import '../Style/Wheel.scss';

const Wheel = () => {
  const projects = [
    { id: 1, name: 'Projet 1', description: 'Description du Projet 1' },
    { id: 2, name: 'Projet 2', description: 'Description du Projet 2' },
    // ... Ajoutez d'autres projets ici
  ];

  const [wheelPosition, setWheelPosition] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  const spinWheel = () => {
    const randomPosition = Math.floor(Math.random() * projects.length);
    setWheelPosition(randomPosition);
    setSelectedProject(projects[randomPosition]);
  };

  return (
    <div className="wheel" style={{ transform: `rotate(${wheelPosition * (360 / projects.length)}deg)` }}>
      <div className="spinner"></div>
      <button onClick={spinWheel}>Tourner la roue</button>

      {/* Affichez la modal si un projet est sélectionné */}
      {selectedProject && <Modal project={selectedProject} />}
    </div>
  );
};

export default Wheel;