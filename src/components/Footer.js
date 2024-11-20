import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../style/style.css';


function Footer() {

    return (
        <>
            <footer id="foot" className="footer">
                <div className="container">
                    <div id="social" className="row">
                        <a href="https://github.com/simlu2000" className="link">
                            <FontAwesomeIcon icon={faGithub} className='social_icon'/>
                        </a>
                        <a href="https://www.linkedin.com/in/simone-lutero-027317216/" className="link">
                            <FontAwesomeIcon icon={faLinkedin} className='social_icon'/>
                        </a>
                        <a href="https://www.instagram.com/sim0ne_lu" className="link">
                            <FontAwesomeIcon icon={faInstagram} className='social_icon' />
                        </a>
                        <a href="mailto:simone.lutero1@gmail.com" className="link">
                            <FontAwesomeIcon icon={faEnvelope} className='social_icon'/>
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