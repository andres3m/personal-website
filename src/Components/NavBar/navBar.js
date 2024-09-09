import React, { useState, useEffect, useCallback } from 'react';
import './navBar.css';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className={activeLink === 'home' ? 'active' : ''}>
          <a href="#home">Home</a>
        </li>
        <li className={activeLink === 'about' ? 'active' : ''}>
          <a href="#about">About</a>
        </li>
        <li className={activeLink === 'portfolio' ? 'active' : ''}>
          <a href="#portfolio">Projects</a>
        </li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;