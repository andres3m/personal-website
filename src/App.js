import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavBar/navBar.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Navbar />
      <section id="about">
        <h1>About</h1>
        <p>This is the About section.</p>
      </section>
      <section id="portfolio">
        <h1>Portfolio</h1>
        <p>This is the Portfolio section.</p>
      </section>
      <section id="skills">
        <h1>Skills</h1>
        <p>This is the Skills section.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        <p>This is the Contact section.</p>
      </section>
    </div>
  );
}

export default App;
