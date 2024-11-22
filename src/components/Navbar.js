import '../style/styleNavbar.css';
import { faHome, faCode, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function Navbar() {
   
    return (
        <>
            <div id="navbar">
                <button className="option-menu"><a href="#first"><FontAwesomeIcon icon={faHome}/></a></button>
                <button className="option-menu"><a href="#about"><FontAwesomeIcon icon={faAddressCard}/></a></button>
                <button className="option-menu"><a href="#projects"><FontAwesomeIcon icon={faCode}/></a></button>

            </div>
        </>
    );

}

export default Navbar;
