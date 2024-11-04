import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg';
import githubIcon from '../img/github.png';
import linkedinIcon from '../img/linkedin.png';
import instagramIcon from '../img/instagram.png';
import emailIcon from '../img/email.png';
import '../style/style.css';

function Footer() {

    return (
        <>
            <footer id="foot" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer_info"><Link to="/" className="footer_link">Home</Link></div>
                        <div className="footer_info"><Link to="/AboutScreen" className="footer_link">About</Link></div>
                        <div className="footer_info"><a href="https://github.com/simlu2000" className="footer_link">GitHub</a></div>
                    </div>
                    <div id="social" className="row">
                        <a href="https://github.com/simlu2000" className="link">
                            <img src={githubIcon} alt="GitHub" className="social_icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/simone-lutero-027317216/" className="link">
                            <img src={linkedinIcon} alt="LinkedIn" className="social_icon" />
                        </a>
                        <a href="https://www.instagram.com/sim0ne_lu" className="link">
                            <img src={instagramIcon} alt="Instagram" className="social_icon" />
                        </a>
                        <a href="mailto:simone.lutero1@gmail.com" className="link">
                            <img src={emailIcon} alt="E-mail" className="social_icon" />
                        </a>
                    </div>
                    <div id="copyright" className="row">
                        <div className="footer_info">Simone Lutero copyright @2024</div>
                    </div>
                </div>
            </footer>
        </>
    )

}
export default Footer;