import React from 'react';
import './style/style.css';
import { Route, Routes, Link } from 'react-router-dom';
import logo from './img/logo.jpg';
import slImage from './img/sl.jpg';
import githubIcon from './img/github.png';
import linkedinIcon from './img/linkedin.png';
import instagramIcon from './img/instagram.png';
import emailIcon from './img/email.png';
import AboutScreen from './AboutScreen';
import Navbar from './navbar';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home scrollToTop={scrollToTop} />} />
        <Route path="/AboutScreen" element={<AboutScreen />} />
      </Routes>
      <button
        id="GoOnTop"
        className="top-button"
        onClick={scrollToTop}
        style={{ fontSize: '2em' }}
      >
        &#9757;
      </button>
      <footer id="foot" className="footer">
        <div className="container">
          <div className="row">
            <div className="footer_info"><Link to="/" className="footer_link">Home</Link></div>
            <div className="footer_info"><Link to="/AboutScreen" className="footer_link">About</Link></div>
            <div className="footer_info"><a href="https://github.com/simlu2000" className="footer_link">GitHub</a></div>
          </div>
          <div id="social" className="row">
            <a href="https://github.com/simlu2000" className="link">
              <img src={githubIcon} alt="GitHub" className="social_icon" />
            </a>
            <a href="https://www.linkedin.com/in/simone-lutero-027317216/" className="link">
              <img src={linkedinIcon} alt="LinkedIn" className="social_icon" />
            </a>
            <a href="https://www.instagram.com/sim0ne_lu" className="link">
              <img src={instagramIcon} alt="Instagram" className="social_icon" />
            </a>
            <a href="mailto:simone.lutero1@gmail.com" className="link">
              <img src={emailIcon} alt="E-mail" className="social_icon" />
            </a>
          </div>
          <div id="copyright" className="row">
            <div className="footer_info">Simone Lutero copyright @2024</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Home({ scrollToTop }) {
  return (
    <div className='main-content'>
      <section id="first" className="hero">
        <div className="container hero-content">
          <img id="me" className="hero-image" src={slImage} alt="Simone Lutero" />
          <h1 className="title">
            Hello, I'm <br />
            <span className="name">Simone Lutero</span>
          </h1>
          <a id="infobutton" className="hero-cta button" href="#briji">Discover my works</a>
        </div>
      </section>

      <section className="works-menu">
        <div className="container">
          <ul>
            <li><a href="#ciakmov" className="button pj">Ciakmov</a></li>
            <li><a href="#briji" className="button pj">Briji</a></li>
          </ul>
        </div>
      </section>

      <section id="info">
        <section className="works box" id="wapa">
          <div className="container">
            <div className="works-item">
              <div className="works-item-tags">Weather and Advanced Predictions App</div>
              <h2>WAPA</h2>
              <div className="work-info">
                <div className="work-info-label">About</div>
                <div className="work-info-content">
                  <p className="text">
                    Progressive Web App for climate forecasting created for the university thesis project.
                    The front-end part is still being improved and Google account access has yet to be implemented.
                  </p>
                  <h3 className="subtitle">Features Implemented:</h3>
                  <ul type="circle" className="func">
                    <li>Real-time display of weather conditions</li>
                    <li>Short and long-term forecasts, with details on data such as temperature, precipitation, humidity, and wind</li>
                    <li>Customize the forecast based on the user's location, on a special search from the relative search bar, or by selecting one of the favorite locations.</li>
                    <li>Opportunity to register and authenticate to WAPA for additional features such as the ability to add up to six preferred locations</li>
                    <li>Access to advanced atmospheric data, directly from NASA</li>
                  </ul>
                </div>
              </div>
              <div className="work-info">
                <div className="work-info-label">Links</div>
                <div className="work-info-content">
                  <a className="link" href="https://wapaweather.com">WAPA</a>
                </div>
              </div>
              <div className="work-info start">
                <div className="work-info-label">Start</div>
                <div className="work-info-content">
                  <p>07/2024</p>
                </div>
              </div>
              <div className="work-info end">
                <div className="work-info-label">End</div>
                <div className="work-info-content">
                  <p>10/2024</p>
                </div>
              </div>
              <section>
                <div className="hero-content">
                  <a href="/WAPA_Mockup_Linkedin.pdf" className="hero-cta button" download="WAPA_Mockup_Linkedin.pdf">See the Presentation</a>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="works box" id="briji">
          <div className="container">
            <div className="works-item">
              <div className="works-item-tags">Website of Recruitments</div>
              <h2>Briji</h2>
              <div className="work-info">
                <div className="work-info-label">About</div>
                <div className="work-info-content">
                  <p className="text">
                    Project created for the Web Design course, in a group of twenty people made up
                    of both computer scientists and designers. The objective of the project was to create a job
                    search platform. The site aims to facilitate the process of finding a challenging job by a
                    candidate and that of finding a candidate by companies. Data storage was done
                    via an AirTable database, and the platform was designed to work primarily on screens with a
                    resolution of 1920x1080px.
                  </p>
                  <h3 className="subtitle">Backend Side Features Implemented:</h3>
                  <ul type="circle" className="func">
                    <li>Print user data</li>
                    <li>Modify user data</li>
                    <li>Print a company profile corresponding to an advertisement</li>
                    <li>Edit announcement data</li>
                  </ul>
                  <p className="text">The back-end development of Login and Registration features for users/companies is yet to be carried out. Material Design was used for some components.</p>
                </div>
              </div>
              <div className="work-info">
                <div className="work-info-label">Links</div>
                <div className="work-info-content">
                  <a className="link" href="https://gruppo5webd.altervista.org/progetto_finale/">Briji</a><br />
                  <a className="link" href="https://github.com/simlu2000/WebDesign">Code</a>
                </div>
              </div>
              <div className="work-info start">
                <div className="work-info-label">Start</div>
                <div className="work-info-content">
                  <p>04/2023</p>
                </div>
              </div>
              <div className="work-info end">
                <div className="work-info-label">End</div>
                <div className="work-info-content">
                  <p>07/2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="works box" id="ciakmov">
          <div className="container">
            <div className="works-item">
              <div className="works-item-tags">Website for Film Search</div>
              <h2>Ciakmov</h2>
              <div className="work-info">
                <div className="work-info-label">About</div>
                <div className="work-info-content">
                  <p className="text">
                    Project created for the Web Application Development course, academic year 2021/2022.
                    The idea was to create a website that would allow users to search for films showing at cinemas near
                    Genoa and to see and insert reviews (only if registered). Furthermore,
                    the user can choose whether or not to receive
                    weekly newsletters (which can be sent by administrators via a specific administrative area) relating
                    to new films.
                  </p>
                  <h3 className="subtitle">Backend Side Features Implemented:</h3>
                  <ul type="circle" className="func">
                    <li>Signin / Login</li>
                    <li>Newsletter (PHPMailer)</li>
                    <li>Movie Ratings (score)</li>
                    <li>Administrative area</li>
                  </ul>
                </div>
              </div>
              <div className="work-info">
                <div className="work-info-label">Links</div>
                <div className="work-info-content">
                  <a className="link" href="https://github.com/simlu2000/SAW">Code</a>
                </div>
              </div>
              <div className="work-info start">
                <div className="work-info-label">Start</div>
                <div className="work-info-content">
                  <p>02/2022</p>
                </div>
              </div>
              <div className="work-info end">
                <div className="work-info-label">End</div>
                <div className="work-info-content">
                  <p>09/2022</p>
                </div>
              </div>
              <section>
                <div className="hero-content">
                  <a id="cv_button" href="/CIAKMOVPRES.pdf" className="hero-cta button" download="CIAKMOVPRES.pdf">See the Presentation</a>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
