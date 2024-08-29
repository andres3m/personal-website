import React from 'react';
import './slider.css';

const Slider = ({ items }) => {
  return (
    <div className="slider">
      <div className="slider-container">
        {items.map((item, index) => (
          <div key={index} className="slider-card">
            <img src={item.image} alt={item.title} className="slider-image" />
            <h2 className="slider-title">{item.title}</h2>
            <p className="slider-description">{item.description}</p>
            <a href={item.link} className="slider-link" target="_blank" rel="noopener noreferrer">
              Ver más
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
