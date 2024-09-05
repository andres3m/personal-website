import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/NavBar/navBar.js';
import ContactForm from './Components/ContactForm/contactForm.js';
import ProjectCards from './Components/ProjectCards/projectCards.js';
import ContactLinks from './Components/ContactLinks/contactLinks.js';

import ProfilePic from './Assets/profilePic.jpg';
import PokemonLogo from './Assets/pokemonLogo.png';
import ImagineriumLogo from './Assets/imagineriumLogo.png';
import AcrossTheGlobeLogo from './Assets/acrossTheGlobeLogo.png';



function App() {
  const sectionRefs = useRef([]);
  
  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     e.preventDefault();
  //     const scrollDirection = e.deltaY > 0 ? 'down' : 'up';
  //     const currentSectionIndex = sectionRefs.current.findIndex(
  //       (ref) => ref.getBoundingClientRect().top === 0
  //     );

  //     if (scrollDirection === 'down') {
  //       const nextSectionIndex = Math.min(
  //         currentSectionIndex + 1,
  //         sectionRefs.current.length - 1
  //       );
  //       sectionRefs.current[nextSectionIndex]?.scrollIntoView({ behavior: 'smooth' });
  //     } else {
  //       const prevSectionIndex = Math.max(currentSectionIndex - 1, 0);
  //       sectionRefs.current[prevSectionIndex]?.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   };

  //   window.addEventListener('wheel', handleScroll, { passive: false });

  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, []);

  const items = [
    {
      image: PokemonLogo,
      title: 'Pokédex',
      description: 'Static website built with HTML, CSS and Javascript. Fetching data from an API',
      demoLink: 'https://andres3m.github.io/Pokedex/',
      repoLink: 'https://github.com/andres3m/Pokedex'
    },
    {
      image: ImagineriumLogo,
      title: 'Imaginerium',
      description: 'Character and world building app. Next.JS, next-auth, PERN.',
      demoLink: 'https://imaginerium.netlify.app/',
      repoLink: 'https://github.com/SchoolOfCode/bc13_final-project_front-end-room-8-boolean-hooligans',
    },
    {
      image: AcrossTheGlobeLogo,
      title: 'SoC Across the globe',
      description: 'Multilingual learning resource app that displays data (with operational CRUD routes and functionality). PERN',
      demoLink: 'https://youtu.be/mKE3oAl9YBE',
      repoLink: 'https://github.com/andres3m/soc-across-the-globe-project'
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar/>
      <section id="home" ref={(el) => (sectionRefs.current[0] = el)}>        
          <div id="home-container">
            <div id="name-title-container">
              <span id="name">Andrés Espín</span>
              <br/>
              <span id="job-title">Web Developer</span>
            </div>
            <img src={ProfilePic} id="my-pic" alt='Portrait of Andres'></img>
          </div>
      </section>
      <section id="about" ref={(el) => (sectionRefs.current[1] = el)}>
          <h1>About</h1>
          <p>
            I'm Spanish based in Birmingham, UK. I originally studied Electronics Engineering in Spain. 
            For the past 7 years I have worked with hardware in several industries like show event, automotive, marine and aerospace.
            I enjoyed the problem solving nature of my job and the possibilities of tech. But then I was attracted by the chance of use my skills to help thousands of users through software.
            So I switched careers and learnt coding full time at School of Code. To create a full stack app in a few weeks from no coding, confirmed that this is what I really want to do.
            My experience makes me aware of the possiblities that hard work, dedication and team work can take up to.
            Feel free to take a look into my portfolio.
          </p>
      </section>
      <section id="portfolio" ref={(el) => (sectionRefs.current[2] = el)}>
          <h1>Portfolio</h1>
          <ProjectCards items={items} />
      </section>
        <section id="contact" ref={(el) => (sectionRefs.current[3] = el)}>
          <h1>Contact</h1>
        <div id="contact-container">
          <ContactLinks/>
          <ContactForm/>
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