import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg'; 
import '../style/styleNavbar.css';
import { faHome, faCode, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Navbar() {
   
    return (
        <>
            <div id="navbar">
                <Link to="/" id="home" className="option-menu"><FontAwesomeIcon icon={faHome}/></Link>
                <Link to="/AboutScreen" id="user-btn" className="option-menu"><FontAwesomeIcon icon={faAddressCard}/></Link>
                <Link to="/#wapa" id="projects-btn" className="option-menu"><FontAwesomeIcon icon={faCode}/></Link>

            </div>
        </>
    );

}

export default Navbar;
