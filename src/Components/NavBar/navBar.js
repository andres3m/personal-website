import React, { useState, useEffect } from 'react';
import './navBar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const sections = ['home', 'about', 'portfolio', 'contact'];
    const offsets = sections.map(section => document.getElementById(section).offsetTop);
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    for (let i = sections.length - 1; i >= 0; i--) {
      if (scrollPosition >= offsets[i]) {
        setActiveLink(sections[i]);
        break;
      }
    }
  };

  const handleMouseMove = (e) => {
    if (e.clientY < 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <nav className={`navbar ${isVisible ? 'visible' : 'hidden'}`}>
      <ul className="nav-links">
        <li className={activeLink === 'home' ? 'active' : ''}>
          <a href="#home">Home</a>
        </li>
        <li className={activeLink === 'about' ? 'active' : ''}>
          <a href="#about">About</a>
        </li>
        <li className={activeLink === 'portfolio' ? 'active' : ''}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;