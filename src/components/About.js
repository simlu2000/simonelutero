import React from 'react';
import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Education from './Education';
import Experience from './Experience';
import Technologies from './Technologies';
import Interests from './Interests';



const About = () => {
  return (
    <div>
      <section id="me_data">
        <section className="aboutme" id="aboutme">
          <div className="container">
            <div className="box" id="mebox">
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
                  <a href="https://github.com/simlu2000" className="link">
                    <FontAwesomeIcon icon={faGithub} className='social_icon' />
                  </a>
                  <a href="https://www.linkedin.com/in/simone-lutero-027317216/" className="link">
                    <FontAwesomeIcon icon={faLinkedin} className='social_icon' />
                  </a>
                  <a href="https://www.instagram.com/sim0ne_lu" className="link">
                    <FontAwesomeIcon icon={faInstagram} className='social_icon' />
                  </a>
                  <a href="mailto:simone.lutero1@gmail.com" className="link">
                    <FontAwesomeIcon icon={faEnvelope} className='social_icon' />
                  </a>
                </div>
              </div>
              <div className="work-info">
                <div className="work-info-label">About me</div>
                <div className="work-info-content">
                  <p>I am currently a computer science student at the University of Genoa. Passionate about consumer electronics and technology since I was a child, I have always found technological advancement a source of inspiration and curiosity. Since photography is my second passion, I also have an artistic mind. My goal is to become a full stack web developer, combining my passion for technology with my artistic streak. I am determined to create engaging and intuitive digital experiences, developing both the front and back-end for projects that combine innovation and aesthetics.</p>
                </div>
              </div>

              <section className="aboutme" id="interests">
                <Interests />
              </section>

              <section className="aboutme" id="myskills">
                <Technologies />
              </section>

              <section className="aboutme timeline" id="myexp">
                <Experience />
              </section>

              <section className="aboutme timeline" id="myedu">
                <Education />
              </section>
            </div>

          </div>
        </section>



      </section>


    </div>
  );
};

export default About;
