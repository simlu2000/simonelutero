import { Link } from 'react-router-dom';
import logo from './img/logo.jpg'; 
import './style/styleNavbar.css';

function Navbar() {

    return (
        <>
            <header>
                <div id="navbar" className="header">
                    <div className="container header-container">
                        <img src={logo} alt="Logo" className="logo" />
                        <div className="menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav className="menu">
                            <ul id="navbarmenu">
                                <Link to="/"><p className="navbar-text">Home</p></Link>
                                <Link to="/AboutScreen"><p id="secondOption" className="navbar-text">About</p></Link>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )

}
export default Navbar;