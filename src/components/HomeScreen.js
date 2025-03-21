import React from 'react';
import slImage from '../img/sl.jpg';
import About from './About';
import Works from './Works';
import { Button } from '@mui/material'; 

function HomeScreen() {
  return (
    <div className='main-content'>
      <section id="first" className="hero">
        <div className="container hero-content">
          <img id="me" className="hero-image" src={slImage} alt="Simone Lutero" />
          <h1 className="title">
            Hello, I'm <br />
            <span className="name">Simone Lutero</span>
          </h1>
          <Button
            variant="outlined"
            color="primary"
            href="#works"
            sx={{
              color: '#d4eca5',
            }}
          >
            Discover my works
          </Button>
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