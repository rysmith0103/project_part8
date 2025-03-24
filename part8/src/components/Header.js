import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../images/T&CLogo.jpg";

function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isNavOpen ? 'hidden' : '';
    };

    // Close menu when clicking a link
    const handleLinkClick = () => {
        setIsNavOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <header id="main-header" className={isScrolled ? 'scrolled' : ''}>
            <div id="logo-nav-box">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                
                {/* Hamburger menu icon */}
                <div className={`hamburger-menu ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Navigation menu with toggle class */}
                <div id="main-nav-container" className={isNavOpen ? "open" : ""}>
                    <nav id="main-nav">
                        <ul>
                            <li><NavLink onClick={handleLinkClick} to="/">Home</NavLink></li>
                            <li><NavLink onClick={handleLinkClick} to="/About">About Us</NavLink></li>
                            <li><NavLink onClick={handleLinkClick} to="/Commercial">Commercial Services</NavLink></li>
                            <li><NavLink onClick={handleLinkClick} to="/Residential">Residential Services</NavLink></li>
                            <li><NavLink onClick={handleLinkClick} to="/contact" className="contact-us-btn">Contact Us</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;