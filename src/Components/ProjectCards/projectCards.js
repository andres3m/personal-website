import React from 'react';
import './projectCards.css';

const ProjectCards = ({ items }) => {
  return (
      <div className="projectCards-container">
        {items.map((item, index) => (
          <div key={index} className="project-card">
            <img src={item.image} alt={item.title} className="project-image" />
            <h2 className="project-title">{item.title}</h2>
            <p className="project-description">{item.description}</p>
            <a href={item.link} className="project-link" target="_blank" rel="noopener noreferrer">
              Ver más
            </a>
          </div>
        ))}
      </div>
  );
};

export default ProjectCards;
