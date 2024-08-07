import React, { useState, useEffect, useCallback } from 'react';
import './navBar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isVisible, setIsVisible] = useState(true);
  const [hasClicked, setHasClicked] = useState(false);

  const handleScroll = useCallback(() => {
    const sections = ['home', 'about', 'portfolio', 'contact'];
    const offsets = sections.map(section => document.getElementById(section).offsetTop);
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= offsets[i]) {
        setActiveLink(sections[i]);
        break;
      }
    }
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (hasClicked) {
      if (e.clientY < 60) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  }, [hasClicked]);

  const handleClick = () => {
    setHasClicked(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleScroll, handleMouseMove]);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <ul className="nav-links">
        <li className={activeLink === 'home' ? 'active' : ''} onClick={handleClick}>
          <a href="#home">Home</a>
        </li>
        <li className={activeLink === 'about' ? 'active' : ''} onClick={handleClick}>
          <a href="#about">About</a>
        </li>
        <li className={activeLink === 'portfolio' ? 'active' : ''} onClick={handleClick}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={activeLink === 'contact' ? 'active' : ''} onClick={handleClick}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;