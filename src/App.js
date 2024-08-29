import React, { useRef } from 'react';
import './App.css';
import Navbar from './Components/NavBar/navBar.js';
import ProfilePic from './Assets/profilePic.jpg';
import ContactForm from './Components/ContactForm/contactForm.js';

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

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Navbar/>
      <section id="home" ref={(el) => (sectionRefs.current[0] = el)}>        
          <div id="home-container">
            <div id="name-title-container">
              <span id="name">Andres Espin</span>
              <br/>
              <span id="job-title">Web Developer</span>
            </div>
            <img src={ProfilePic} id="my-pic" alt='Portrait of Andres'></img>
          </div>
      </section>
      <section id="about" ref={(el) => (sectionRefs.current[1] = el)}>
          <h1>About</h1>
          <p>
            I'm Spanish based in Birmingham. I originally studied Electronics Engineering in Spain. 
            For the past 7 years I have worked with hardware in several industries like show event, automotive, marine and aerospace.
            I enjoyed the problem solving nature of my job and the possibilities of tech. But then I was attracted by the chance of use my skills to help thousands of users through software.
            So I switched careers and learnt coding full time at School of Code. To create a full stack app in a few weeks from no coding, confirmed that this is what I really want to do.
            My experience makes me aware of the possiblities that hard work, dedication and team work can take up to.
            Feel free to take a look into my portfolio.
          </p>
      </section>
      <section id="portfolio" ref={(el) => (sectionRefs.current[2] = el)}>
          <h1>Portfolio</h1>
          <div id="projects-container">
            <div id="project-1">Project 1</div>
            <div id="project-2">Project 2</div>
            <div id="project-3">Project 3</div>
            <div id="project-4">Project 4</div>
          </div>
      </section>
        <section id="contact" ref={(el) => (sectionRefs.current[3] = el)}>
          <h1>Contact</h1>
          <p>
            Thanks for making it this far! If you're still wanting to know more about me check out my GitHub page, LinkedIn, or contact me via email using the links below.
          </p>
          <ContactForm/>
      </section>      
    </div>
  );
}

export default App;