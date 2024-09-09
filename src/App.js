import React, { useRef } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/navBar.js";
import ContactForm from "./Components/ContactForm/contactForm.js";
import ProjectCards from "./Components/ProjectCards/projectCards.js";
import ContactLinks from "./Components/ContactLinks/contactLinks.js";

import ProfilePic from "./Assets/profilePic.png";
import PokemonLogo from "./Assets/pokemonLogo.png";
import ImagineriumLogo from "./Assets/imagineriumLogo.png";
import AcrossTheGlobeLogo from "./Assets/acrossTheGlobeLogo.png";

function App() {
  const sectionRefs = useRef([]);

  const items = [
    {
      image: PokemonLogo,
      title: "Pokédex",
      description:
        "First project at School of code: a static website built using HTML, CSS, and JavaScript, featuring search functionality for Pokémon based on dynamically retrieved data from the PokéAPI. Gained experience in DOM manipulation and API integration.",
      demoLink: "https://andres3m.github.io/Pokedex/",
      repoLink: "https://github.com/andres3m/Pokedex",
    },
    {
      image: AcrossTheGlobeLogo,
      title: "ATG Definitions",
      description:
        "One week group project: Multilingual learning resource full-stack app featuring data management through functional CRUD operations, built using PERN stack. Gained experience handling front-end and back-end integration, data flow and testing.",
      demoLink: "https://youtu.be/mKE3oAl9YBE",
      repoLink: "https://github.com/andres3m/soc-across-the-globe-project",
    },
    {
      image: ImagineriumLogo,
      title: "Imaginerium",
      description:
        "Four week group project: Character and world building full-stack app. It allows creation, edition and sharing of characters. Built with PostreSQL, Express, Node and Next.js, featuring authentication and authorisation with next-auth.",
      demoLink: "https://imaginerium.netlify.app/",
      repoLink:
        "https://github.com/SchoolOfCode/bc13_final-project_front-end-room-8-boolean-hooligans",
    },
  ];

  // Scroll to the contact section when the button is clicked
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar />
      <section id="home" ref={(el) => (sectionRefs.current[0] = el)}>
        <div id="home-container">
          <div id="name-title-container">
            <h1 id="name">
              Hello, I'm Andres,
              <br />
              a hardware technician turned Software Developer.
            </h1>
            <p id="job-title">
              After gaining experience working with hardware,<br /> 
              I decided to expand my skill set by learning coding to develop software solutions.
            </p>
            <button id="contact-button" onClick={scrollToContact}>
              Contact me
            </button>
          </div>
          <img src={ProfilePic} id="my-pic" alt="Portrait of Andres"></img>
        </div>
      </section>
      <section id="about" ref={(el) => (sectionRefs.current[1] = el)}>
        <h1>About</h1>
        <p id="about-p">
          I'm a Spanish professional based in Birmingham, UK, with a background
          in Electronics Engineering. Before transitioning to software
          development, I spent 7 years working as a technician in industries
          such as show events, automotive, marine, and aerospace. My role in
          these industries sparked my passion for problem-solving and the
          potential of technology.
          <br />
          <br />
          After discovering the world of coding, I decided to change careers and
          enrolled in the <strong>School of Code</strong> bootcamp, where I was
          selected from over 4,000 applicants. During the program, I gained
          proficiency in JavaScript, CSS, HTML, TypeScript and Agile methodologies.
          <br />
          <br />
          After the bootcamp, I began my journey as a{" "}
          <strong>Junior Software Developer (Back-end focused)</strong>, where I had the opportunity to work with technologies such as C# and .NET framework, AWS, SQL,XML
          <br />
          <br />
          I contributed to business solutions by developing a{" "}
          <em>C# Web API</em>, implementing core business software updates,
          customizing engine configuration files based on customer requirements,
          and conducting testing.
          <br />
          <br />
          I’m currently seeking my next opportunity as a{" "}
          <strong>Front-End</strong> or <strong>Full-Stack Developer</strong>.
          Feel free to explore my portfolio and reach out if you’re interested
          in my work!
        </p>
      </section>
      <section id="portfolio" ref={(el) => (sectionRefs.current[2] = el)}>
        <h1>Projects</h1>
        <ProjectCards items={items} />
      </section>
      <section id="contact" ref={(el) => (sectionRefs.current[3] = el)}>
        <div id="contact-container">
          <ContactForm />
          <ContactLinks />
        </div>
      </section>
        <footer>
          <p id="footer-text">© 2024 Andres Espin</p>
          <a
            id="footer-repo-link"
            href="https://github.com/andres3m/personal-website"
          >
            See it in GitHub
          </a>
        </footer>
    </div>
  );
}

export default App;
