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
            <div className='links-container'>
            <a href={item.demoLink} className="project-link" target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            <a href={item.repoLink} className="project-link" target="_blank" rel="noopener noreferrer">
              Code
            </a>
            </div>
          </div>
        ))}
      </div>
  );
};

export default ProjectCards;
