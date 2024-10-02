import "./contactLinks.css";
import React, { useState, useEffect } from "react";
import LinkedinLogo from "../../Assets/linkedinLogo.png";
import GitHubLogo from "../../Assets/githubLogo.png";
import XLogo from "../../Assets/xLogo.png";
import mailLogo from "../../Assets/mailLogo.png";

function ContactLinks() {
  const [tooltipText, setTooltipText] = useState("Copy email: andresmartinezuk@gmail.com");
  const [showTooltip, setShowTooltip] = useState(false);
  const emailAdress = "andresmartinezuk@gmail.com";

  const copyBtn = () => {
    navigator.clipboard.writeText(emailAdress).then(() => {
      setTooltipText("Email copied to clippboard!"); 
      setTimeout(() => setTooltipText("Copy email: andresmartinezuk@gmail.com"), 2000);
    });
  };

  return (
    <div className="contact-links-container">
      <a
        href="https://www.linkedin.com/in/andres-espin-martinez/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="contact-links-logo"
          src={LinkedinLogo}
          alt="Linkedin logo"
        />
      </a>
      <a href="https://github.com/andres3m" target="_blank" rel="noreferrer">
        <img
          className="contact-links-logo"
          src={GitHubLogo}
          alt="GitHub logo"
        />
      </a>
      <a href="https://twitter.com/andrees3m" target="_blank" rel="noreferrer">
        <img className="contact-links-logo" src={XLogo} alt="Twitter logo" />
      </a>
      <div
      className="email-button-container"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div className={`email-tooltip ${showTooltip ? 'show' : ''}`}>
        {tooltipText}
      </div>
      <button
        className="copy-email-btn"
        onClick={copyBtn}
      >
        <img className="email-logo" src={mailLogo} alt="Email logo" />
      </button>
    </div>
    </div>
  );
}

export default ContactLinks;
