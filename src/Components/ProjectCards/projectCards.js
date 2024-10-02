import React from "react";
import "./projectCards.css";

const ProjectCards = ({ items }) => {
  return (
    <div className="projectCards-container">
      {items.map((item, index) => (
        <div key={index} className="project-card">
          <img src={item.image} alt={item.title} className="project-image" />
          <h2 className="project-title">{item.title}</h2>
          <div className="badges-container">
            <img src={item.badge1} alt={item.badge1Alt} className="badge" />
            <img src={item.badge2} alt={item.badge2Alt} className="badge" />
            <img src={item.badge3} alt={item.badge3Alt} className="badge" />
            <img src={item.badge4} alt={item.badge4Alt} className="badge" />
            <img src={item.badge5} alt={item.badge5Alt} className="badge" />
            <img src={item.badge6} alt={item.badge6Alt} className="badge" />
          </div>

          <p className="project-description">{item.description}</p>
          <div className="links-container">
            <a
              href={item.demoLink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
            <a
              href={item.repoLink}
              className="project-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
