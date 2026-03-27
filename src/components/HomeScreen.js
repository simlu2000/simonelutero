import React from 'react';
import slImage from '../img/sl.jpg';
import About from './About';
import Works from './Works';
import { Button } from '@mui/material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LiquidChrome from './LiquidChrome';

function HomeScreen() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    fpsLimit: 60,
    detectRetina: true,
    fullScreen: { enable: false, zIndex: 0 },
    background: { color: "transparent" },
    particles: {
      number: { value: 80, density: { enable: true, area: 800 } },
      color: { value: "#00BFFF" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 5 }, random: true },
      links: { enable: true, distance: 150, color: "#00BFFF", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 2, direction: "none", straight: false, outModes: { default: "out" } }
    },
    interactivity: {
      detectOn: "canvas",
      events: { onHover: { enable: true, mode: "repulse" }, onClick: { enable: true, mode: "push" }, resize: true },
      modes: { push: { quantity: 4 }, repulse: { distance: 100, duration: 0.4 } }
    }
  };

  return (
    <div className="main-content" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>

      <section id="first" className="hero" style={{ width: '100%', height: '100vh', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        {/*<Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />*/}
       <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <LiquidChrome
            baseColor={[0, 0.1, 0.2]}
            speed={0.3}
            amplitude={0.3}
            interactive={true}
          />
        </div>
        <div id="intro-area" className="container hero-content" style={{ position: 'relative', zIndex: 10 }}>
          <div>
            <img id="me" className="hero-image" src={slImage} alt="Simone Lutero" />
          </div>
          <div>
            <h1 className="title">
              Hey, I'm
              <span className="name"> Simone ✨</span> <br></br>
              A  <span className="name">Software Developer</span>
            </h1>
            <h4>Jr Software Engineer & CS Graduate specializing in high-performance web applications. Focused on React and TypeScript, I am dedicated to writing clean, scalable code and designing intuitive user interfaces.</h4>

            <div className="container">
              <Button
                variant="outlined"
                href="#works"
                sx={{ color: "#00BFFF", borderColor: "#00BFFF", marginTop: '2%' }}
              >
                View Projects
              </Button>
              <div id="social" className="row">

                <a href="https://github.com/simlu2000" className="link">
                  <FontAwesomeIcon icon={faGithub} className='social_icon' />
                </a>
                <a href="https://www.linkedin.com/in/simone-lutero276/" className="link">
                  <FontAwesomeIcon icon={faLinkedin} className='social_icon' />
                </a>
                <a href="https://www.instagram.com/simo_lut" className="link">
                  <FontAwesomeIcon icon={faInstagram} className='social_icon' />
                </a>
                <a href="mailto:simone.lutero1@gmail.com" className="link">
                  <FontAwesomeIcon icon={faEnvelope} className='social_icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works">
        <Works />
      </section>

      <div id="about">
        <About />
      </div>

    </div>
  );
}

export default HomeScreen;
