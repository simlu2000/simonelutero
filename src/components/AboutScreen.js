import React from 'react';
import '../style/style.css';
import me from '../img/sl.jpg';
import email from '../img/email.png';
import instagram from '../img/instagram.png';
import linkedin from '../img/linkedin.png';
import github from '../img/github.png';
import Navbar from './Navbar';

const AboutScreen = () => {
  return (
    <div>
      <Navbar />

      <section id="first" className="hero">
        <div className="container hero-content">
          <img id="me" className="hero-image" src={me} alt="Simone Lutero" />
          <h1 className="title">Something<br />
            <p className="name">About me</p>
          </h1>
          <a id="me_button" className="hero-cta button" href="#aboutme">Discover myself</a>
        </div>
      </section>

      <section className="me-menu">
        <div className="container">
          <ul>
            <li><a href="#mebox" className="button pj">Personal info</a></li>
            <li><a href="#myedu" className="button pj">Education</a></li>
            <li><a href="#myskills" className="button pj">Skills</a></li>
            <li><a href="#interests" className="button pj">Interests</a></li>
          </ul>
        </div>
      </section>

      <section id="me_data">
        <section className="aboutme" id="aboutme">
          <div className="container">
            <div className="works-item box" id="mebox">
              <div className="works-item-tags">Personal info</div>
              <div className="work-info">
                <div className="work-info-label">First Name</div>
                <div className="work-info-content"><p>Simone</p></div>
              </div>
              <div className="work-info">
                <div className="work-info-label">Last Name</div>
                <div className="work-info-content"><p>Lutero</p></div>
              </div>
              <div className="work-info">
                <div className="work-info-label">Age</div>
                <div className="work-info-content"><p>24</p></div>
              </div>
              <div className="work-info">
                <div className="work-info-label">Nationality</div>
                <div className="work-info-content"><p>Italian</p></div>
              </div>
              <div className="work-info">
                <div className="work-info-label">Based in</div>
                <div className="work-info-content"><p>Rapallo, GE</p></div>
              </div>
              <div className="work-info">
                <div className="work-info-label">E-mail</div>
                <div className="work-info-content"><a className="link" href="mailto:simone.lutero1@gmail.com">simone.lutero1@gmail.com</a></div>
              </div>
              <div className="work-info">
                <div className="work-info-label">Languages</div>
                <div className="work-info-content"><p>Italian, English</p></div>
              </div>
              <div className="work-info">
                <div className="work-info-label">Socials</div>
                <div className="work-info-content">
                  <a href="https://github.com/simlu2000" className="link"><img src={github} alt="GitHub" className="social_icon" /></a>
                  <a href="https://www.linkedin.com/in/simone-lutero-027317216/" className="link"><img src={linkedin} alt="LinkedIn" className="social_icon" /></a>
                  <a href="https://www.instagram.com/sim0ne_lu" className="link"><img src={instagram} alt="Instagram" className="social_icon" /></a>
                  <a href="mailto:simone.lutero1@gmail.com" className="link"><img src={email} alt="E-mail" className="social_icon" /></a>
                </div>
              </div>
              <div className="work-info">
                <div className="work-info-label">About me</div>
                <div className="work-info-content">
                  <p>I am currently a computer science student at the University of Genoa. Passionate about consumer electronics and technology since I was a child, I have always found technological advancement a source of inspiration and curiosity. Since photography is my second passion, I also have an artistic mind. My goal is to become a full stack web developer, combining my passion for technology with my artistic streak. I am determined to create engaging and intuitive digital experiences, developing both the front and back-end for projects that combine innovation and aesthetics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutme" id="myedu">
          <div className="container">
            <div className="works-item box">

              <div className="works-item-tags">Education</div>
              <div id="edu_row" className="row">
                <div className="edu">
                  <h3 className="edu_years">2014-2019</h3>
                  <div className="edu_info">
                    <h4>Istituto Fortunio Liceti, Rapallo</h4>
                    <h5>Corporate information systems</h5>
                  </div>
                </div>
                <div className="edu">
                  <h3 className="edu_years">2019-Now</h3>
                  <div className="edu_info">
                    <h4>University of Genoa</h4>
                    <h5>Computer science student</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="works-item box">
              <div className="works-item-tags">Experiences</div>
              <div id="exp_row" className="row">
              <div className="edu">
                  <h3 className="edu_years">April 2024 - Actually</h3>
                  <div className="edu_info exp-desc">
                    <h4>ALTEN ITALIA</h4>
                    <h5>Internship in Full Stack Development</h5>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section className="aboutme" id="myskills">
          <div className="container">
            <div className="works-item box">
              <div className="works-item-tags">Languages & Technologies </div>
              <div className="row">
                <div className="lang_skill">C</div>
                <div className="lang_skill">C++</div>
                <div className="lang_skill">SQL</div>
                <div className="lang_skill">PHP</div>
                <div className="lang_skill">Google Firebase</div>

              </div>
              <div className="row">
                <div className="lang_skill">HTML</div>
                <div className="lang_skill">CSS</div>
                <div className="lang_skill">JavaScript</div>
                <div className="lang_skill">ReactJS</div>
                <div className="lang_skill">Vue.js</div>
              </div>
            </div>
          </div>
        </section>

        <section className="aboutme" id="interests">
          <div className="container">
            <div className="works-item box">
              <div className="works-item-tags">My interests</div>
              <div className="row">
                <div className="int_emoji">&#128187;</div>
                <div className="int_emoji">&#128247;</div>
                <div className="int_emoji">&#127909;</div>
                <div className="int_emoji">&#9992;</div>
              </div>
              <div className="row">
                <div className="int_emoji">&#127829;</div>
                <div className="int_emoji">&#127749;</div>
                <div className="int_emoji">&#128054;</div>
                <div className="int_emoji">&#x1F30A;</div>

              </div>
            </div>
          </div>
        </section>

        <section id="cv">
          <div className="container hero-content">
            <a id="cv_button" href="/simoneluterocv.pdf" className="hero-cta button" download="simoneluterocv.pdf">Download my CV!</a>
          </div>
        </section>
      </section>

      <button id="GoOnTop" className="top-button" onClick={() => window.scrollTo(0, 0)} style={{ fontSize: '2em' }}>&#9757;</button>

      
    </div>
  );
};

export default AboutScreen;
