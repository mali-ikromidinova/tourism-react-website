import { Button } from "../Button";
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-header">
                    Join the Adventure newsletterto receive our best vacation deals
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe at any time
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your email" className="footer-input" />
                        <Button buttonstyle='btn--outline'>Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>About Us</h2>
                        <Link to="/sign-up">How it works</Link>
                        <Link to="/">Testimonails</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Contact Us</h2>
                        <Link to="/">Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                
                <div className="footer-links-wrapper">
                    <div className="footer-links-items">
                        <h2>Videos</h2>
                        <Link to="/">Submit video</Link>
                        <Link to="/">Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div>
                    <div className="footer-links-items">
                        <h2>Social Media</h2>
                        <Link to="/">Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rigths">
                        TRVL 2020
                    </small>
                    <div className="social-icons">
                        <Link to="/" className="social-icon-link facebook" target="_blank" aria-label="Facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="/" className="social-icon-link insragram" target="_blank" aria-label="Instagram">
                            <i className="fab fa-instagram"></i>
                        </Link> 
                        <Link to="/" className="social-icon-link youtube" target="_blank" aria-label="Youtube">
                            <i className="fab fa-youtube"></i>
                        </Link>
                        <Link to="/" className="social-icon-link twitter" target="_blank" aria-label="Twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/" className="social-icon-link linkedin" target="_blank" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </Link>    
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Footer;