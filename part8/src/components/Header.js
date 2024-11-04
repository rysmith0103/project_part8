import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/T&CLogo.jpg";

function Header() {

    return (
        <header id="main-header">
            <div id="logo-nav-box">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div id="main-nav-container">
                    <nav id="main-nav">
                        <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/About">About Us</NavLink></li>
                            <li><NavLink to="/Commercial">Commercial Services</NavLink></li>
                            <li><NavLink to="/Residential">Residential Services</NavLink></li>
                            <li><NavLink to="/Testimonials">Testimonials</NavLink></li>
                            <li><NavLink to="/Blog">Blog</NavLink></li>
                            <li><NavLink to="/contact" className="contact-us-btn">Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;