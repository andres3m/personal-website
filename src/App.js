import React, { useRef } from "react";
import "./App.css";
import Navbar from "./Components/NavBar/navBar.js";
import ContactForm from "./Components/ContactForm/contactForm.js";
import ProjectCards from "./Components/ProjectCards/projectCards.js";
import ContactLinks from "./Components/ContactLinks/contactLinks.js";
import { ProjectItems } from "./ProjectsData/ProjectsData.js";
import ProfilePic from "./Assets/profilePic.png";

function App() {
  const sectionRefs = useRef([]);

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
              Hello, I'm Andrés,
              <br />
              &lt; Full Stack Developer /&gt;
            </h1>
            <p id="job-title">
            Leveraging 9 years of experience in tech,<br /> 
            I transitioned from hardware maintenance to software development, combining hands-on technical expertise with newly acquired coding skills to create software solutions to complex problems.
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
          I'm a bilingual (Spanish and English speaker) <strong>Full Stack Developer</strong> based in Birmingham, UK, with two years of experience building from static websites to full-stack applications, primarily using JavaScript, Typescript, React, and Node.js.
          <br />
          
          <br />
          My most recent experience includes working as{" "}
          <strong>Back-end Developer</strong>, where I implemented key software updates in .NET and C#. My role involved creating Web APIs, customizing engine configuration files to meet customer requirements, and handling testing and deployments using Azure DevOps with hosting on AWS.
          <br />

          <br />
          I enjoy staying on the cutting edge of technology and regularly explore new tools and frameworks, such as Go, Python, Vue.js, vector databases, and integrating large language models (LLMs).
          <br />

          <br />
          Before transitioning into web development, I spent 7 years as an Electronics Technician in the <strong>live event</strong>,{" "}  
          <strong>automotive</strong>, <strong>marine</strong>, and <strong>aerospace</strong> industries. This experience fueleld my <strong>passion for problem-solving</strong>,{" "}
          <strong>continuous learning</strong>, driving my shift into web development.
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
        <ProjectCards items={ProjectItems} />
      </section>
      <section id="contact" ref={(el) => (sectionRefs.current[3] = el)}>
        <div id="contact-container">
          <ContactForm />
          <ContactLinks />
        </div>
      </section>
        <footer>
          <p id="footer-text">© 2024 Andrés Martínez</p>
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
