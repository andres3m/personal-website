import './contactLinks.css';
import LinkedinLogo from '../../Assets/linkedinLogo.png';
import GitHubLogo from '../../Assets/githubLogo.png';
import XLogo from '../../Assets/xLogo.png';


function ContactLinks() {
  return (
    <div className="contact-links-container">
      <a href="https://www.linkedin.com/in/andres-espin-martinez/" target="_blank" rel="noreferrer">
        {/* <div className="img-logo-container"> */}
          <img className="contact-links-logo" src={LinkedinLogo} alt="Linkedin logo" />
        {/* </div> */}
      </a>
      <a href="https://github.com/andres3m" target="_blank" rel="noreferrer">
        {/* <div className="img-logo-container"> */}
          <img className="contact-links-logo" src={GitHubLogo} alt="GitHub logo" />
        {/* </div> */}
      </a>
      <a href="https://twitter.com/andrees3m" target="_blank" rel="noreferrer">
        {/* <div className="img-logo-container"> */}
          <img className="contact-links-logo" src={XLogo} alt="Twitter logo" />
        {/* </div> */}
      </a>
    </div>
  );
}

export default ContactLinks;