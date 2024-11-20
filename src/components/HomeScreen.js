import slImage from '../img/sl.jpg';
import About from './About';
import Works from './Works';
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
          <a id="infobutton" className="hero-cta button" href="#wapa">Discover my works</a>
        </div>
      </section>

      

      <section id="info">
        <Works />
      </section>

      <div id="about">
      <h1 className="container">About me</h1>
        <About />
      </div>

    </div>

  );
}
export default HomeScreen;  