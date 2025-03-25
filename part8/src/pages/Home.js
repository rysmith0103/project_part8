import { useEffect, useRef } from 'react';
import "../styles/Home.css";
import Slideshow from "../components/Slideshow";
import mower from "../images/grassmowing.jpg";
import slide1 from "../images/slideshow/ss1.jpg";
import slide2 from "../images/slideshow/ss2.jpg";
import slide3 from "../images/slideshow/ss3.jpg";
import slide4 from "../images/slideshow/ss4.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    const slideshowImages = [slide1, slide2, slide3, slide4];
    const servicesRef = useRef(null);
    const designSectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        if (designSectionRef.current) {
            observer.observe(designSectionRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
            if (designSectionRef.current) {
                observer.unobserve(designSectionRef.current);
            }
        };
    }, []);

    return (
        <div className="page-wrapper">
            <div className="slideshow-container">
                <Slideshow images={slideshowImages} />
            </div>

            <section className="design-section" ref={designSectionRef}>
                <div className="text-content">
                    <h2>Providing services since 1976</h2>
                    <p className="highlight-text">LANDSCAPE DESIGN, HARDSCAPING, MAINTENANCE & MORE...</p>
                    <p>Town & Country Landscaping has been dedicated to enhancing the beauty and value of properties across Berks County and the surrounding areas. Our team of experienced professionals specializes in delivering top-quality landscaping services, including detailed landscape design, hardscaping, and comprehensive maintenance.</p>
                </div>
                <div className="image-content">
                    <img src={mower} alt="Image of Lawn Mower cutting grass" />
                </div>
            </section>

            <section className="services-section" ref={servicesRef}>
                <h2>First-Class Services</h2>
                <div className="service-boxes">
                    <div className="service-box">
                        <h3>COMMERCIAL</h3>
                        <p>We offer professional landscaping and maintenance services to keep your commercial property looking pristine year-round. Whether it's routine care, seasonal plantings, or complete landscape overhauls, we have the expertise to elevate your business's exterior.</p>
                        <Link to="/Commercial" className="btn">Learn More</Link>
                    </div>
                    <div className="service-box">
                        <h3>RESIDENTIAL</h3>
                        <span className="badge">MOST POPULAR</span>
                        <p>Transform your outdoor space into a beautiful retreat. Our residential services include lawn maintenance, hardscaping, custom landscape designs, and more. We ensure that your home's landscape is a true reflection of your style and vision.</p>
                        <Link to="/Residential" className="btn">Learn More</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
