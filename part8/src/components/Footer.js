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
                            <li><NavLink to="/Services">Residential</NavLink></li>
                            <li><NavLink to="/Services">Commercial</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><a href="#">495 Mountain View Road</a></li>
                            <li><a href="#">(444)-444-4444</a></li>
                            <li><a href="#">Mon-Fri 7:00am - 5:00pm</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;