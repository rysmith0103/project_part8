import { Link } from "react-router-dom";
import lawnMaintenance from "../images/lawnMaintenance.jpg";
import springCleanup from "../images/springCleanup.jpg";
import mulchCleanup from "../images/mulch.jpg";

const ResidentialServices = () => {
    return (
        <main id="main-content">
            <section className="services">
                <h2 className="section-title">Our Residential Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <img src={lawnMaintenance} alt="Lawn Maintenance" />
                        <h3>Lawn Maintenance</h3>
                        <p>Regular mowing, line trimming, fertilization, and aeration to keep your lawn lush and healthy.</p>
                    </div>
                    <div className="service-card">
                        <img src={springCleanup} alt="Spring & Fall Clean-Up" />
                        <h3>Spring & Fall Clean-Up</h3>
                        <p>Comprehensive seasonal clean-ups to prepare your lawn and garden beds for a vibrant growing season.</p>
                    </div>
                    <div className="service-card">
                        <img src={mulchCleanup} alt="Mulching & Bed Maintenance" />
                        <h3>Mulching & Bed Maintenance</h3>
                        <p>Keep your garden beds neat and protect your plants with premium mulch that retains moisture and suppresses weeds.</p>
                    </div>
                </div>
            </section>

            <section className="additional-services">
                <h2 className="section-title">Additional Services</h2>
                <div className="additional-services-content">
                    <div className="additional-service">
                        <h3>Landscape Design & Installation</h3>
                        <p>Custom landscape designs tailored to enhance your property’s beauty and value.</p>
                    </div>
                    <div className="additional-service">
                        <h3>Hardscaping</h3>
                        <p>Transform your outdoor living space with patios, walkways, retaining walls, and more.</p>
                    </div>
                    <div className="additional-service">
                        <h3>Plant Health & Pruning</h3>
                        <p>Maintain the health and appearance of your trees and shrubs year-round.</p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h2>Ready to Transform Your Outdoor Space?</h2>
                <Link to="/contact" className="cta-button">Get a Free Quote</Link>
            </section>
        </main>
    );
};

export default ResidentialServices;
