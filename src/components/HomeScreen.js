import React from 'react';
import slImage from '../img/sl.jpg';
import About from './About';
import Works from './Works';
import { Button } from '@mui/material';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

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
      color: { value: "#d4eca5" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 5 }, random: true },
      links: { enable: true, distance: 150, color: "#d4eca5", opacity: 0.4, width: 1 },
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

      <section id="first" className="hero" style={{ height:'100vh',position: 'relative', zIndex: 1, overflow: 'hidden' }}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
        />
        <div id="intro-area" className="container hero-content" style={{ position: 'relative', zIndex: 1 }}>
          <div>
            <img id="me" className="hero-image" src={slImage} alt="Simone Lutero" />
          </div>
          <div>
            <h1 className="title">
              Hello, I'm <br />
              <span className="name">Simone Lutero</span>
            </h1>
            <Button
              variant="outlined"
              href="#works"
              sx={{ color: "#d4eca5", borderColor: "#d4eca5" }}
            >
              Discover my works
            </Button>
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
