import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/NavBar/navBar.js';
import ContactForm from './Components/ContactForm/contactForm.js';
import ProjectCards from './Components/ProjectCards/projectCards.js';
import ContactLinks from './Components/ContactLinks/contactLinks.js';

import ProfilePic from './Assets/profilePic.png';
import PokemonLogo from './Assets/pokemonLogo.png';
import ImagineriumLogo from './Assets/imagineriumLogo.png';
import AcrossTheGlobeLogo from './Assets/acrossTheGlobeLogo.png';



function App() {
  const sectionRefs = useRef([]);

  const items = [
    {
      image: PokemonLogo,
      title: 'Pokédex',
      description: 'First project at School of code: a static website built using HTML, CSS, and JavaScript, featuring search functionality for Pokémon based on dynamically retrieved data from the PokéAPI. Gained experience in DOM manipulation and API integration.',
      demoLink: 'https://andres3m.github.io/Pokedex/',
      repoLink: 'https://github.com/andres3m/Pokedex'
    },
    {
      image: AcrossTheGlobeLogo,
      title: 'ATG Definitions',
      description: 'One week group project: Multilingual learning resource full-stack app featuring data management through functional CRUD operations, built using PERN stack. Gained experience handling front-end and back-end integration, data flow and testing.',
      demoLink: 'https://youtu.be/mKE3oAl9YBE',
      repoLink: 'https://github.com/andres3m/soc-across-the-globe-project'
    },
    {
      image: ImagineriumLogo,
      title: 'Imaginerium',
      description: 'Four week group project: Character and world building full-stack app. It allows creation, edition and sharing of characters. Built with PostreSQL, Express, Node and Next.js, featuring authentication and authorisation with next-auth.',
      demoLink: 'https://imaginerium.netlify.app/',
      repoLink: 'https://github.com/SchoolOfCode/bc13_final-project_front-end-room-8-boolean-hooligans',
    }
  ];

      // Scroll to the contact section when the button is clicked
      const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar/>
      <section id="home" ref={(el) => (sectionRefs.current[0] = el)}>        
          <div id="home-container">
            <div id="name-title-container">
              <h1 id="name">Hello, I'm Andres, Electrical and Electronics Technician turned a Softwate Developer.</h1>
              <p id="job-title">After gaining experience working with hardware, I decided to expand my skill set by learning coding to develop software solutions.</p>              
              <button id="contact-button" onClick={scrollToContact}>Contact me</button>
            </div>
            <img src={ProfilePic} id="my-pic" alt='Portrait of Andres'></img>
          </div>
      </section>
      <section id="about" ref={(el) => (sectionRefs.current[1] = el)}>
          <h1>About</h1>
          <p id="about-p">
            I'm Spanish based in Birmingham, UK. I originally studied Electronics Engineering in Spain. 
            For the past 7 years I have worked with hardware in several industries like show event, automotive, marine and aerospace.
            I enjoyed the problem solving nature of my job and the possibilities of tech. But then I was attracted by the chance of use my skills to help thousands of users through software.
            So I switched careers and learnt coding full time at School of Code. To create a full stack app in a few weeks from no coding, confirmed that this is what I really want to do.
            My experience makes me aware of the possiblities that hard work, dedication and team work can take up to.
            Feel free to take a look into my portfolio.
          </p>
      </section>
      <section id="portfolio" ref={(el) => (sectionRefs.current[2] = el)}>
          <h1>Projects</h1>
          <ProjectCards items={items} />
      </section>
        <section id="contact" ref={(el) => (sectionRefs.current[3] = el)}>
          <h1>Contact</h1>
        <div id="contact-container">
          <ContactForm/>
          <ContactLinks/>
        </div>
        <footer>
          <p id="footer-text">© 2024 Andres Espin</p>
          <a id = "footer-repo-link" href="https://github.com/andres3m/personal-website">See it in GitHub</a>
        </footer>
      </section>      
    </div>
  );
}

export default App;