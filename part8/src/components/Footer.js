import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../images/T&CLogo.jpg";

function Footer() {
    return(
        
        <footer>
            <div className="footer-container">
                <div className="footer-logo-social">
                    <img src={logo} alt="logo" />
                    <div className="social-icons">
                        <a href="https://www.facebook.com" className="fa fa-facebook"></a>
                        <a href="https://www.instagram.com" className="fa fa-instagram"></a>
                    </div>
                </div>
                <div className="footer-columns">
                    <div className="footer-column">
                        <h3>Services</h3>
                        <ul>
                            <li><NavLink to="/Residential">Residential Services</NavLink></li>
                            <li><NavLink to="/Commercial">Commercial Services</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="https://maps.google.com/?q=495+Mountain+View+Road" target="_blank" rel="noopener noreferrer">495 Mountain View Road</a></li>
                            <li><a href="tel:444-444-4444">(444)-444-4444</a></li>
                            <li>Mon-Fri 7:00am - 5:00pm</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;