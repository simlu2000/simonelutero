import logo from '../img/logo.jpg'; 
import '../style/styleNavbar.css';
import { faHome, faCode, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Navbar() {
   
    return (
        <>
            <div id="navbar">
                <a href="#first" className="option-menu"><FontAwesomeIcon icon={faHome}/></a>
                <a href="#about"  className="option-menu"><FontAwesomeIcon icon={faAddressCard}/></a>
                <a href="#wapa" className="option-menu"><FontAwesomeIcon icon={faCode}/></a>

            </div>
        </>
    );

}

export default Navbar;
