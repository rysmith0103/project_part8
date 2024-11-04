import { Link } from "react-router-dom";
import "../styles/Commercial.css";
import crispLawn from "../images/lawn.jpeg";
import walkway from "../images/landscape.jpg";
import hardscape from "../images/hardscape2.jpg";

const Commercial = () => {
    return (
        <main id="main-content">
            <section className="services">
                <h2 className="section-title">Our Commercial Services</h2>
                <div className="service-cards">
                    <div className="service-card">
                        <img src={crispLawn} alt="Lawn & Grounds Maintenance" />
                        <h3>Lawn & Grounds Maintenance</h3>
                        <p>Comprehensive lawn care, including mowing, trimming, and seasonal clean-ups to maintain a professional appearance.</p>
                    </div>
                    <div className="service-card">
                        <img src={walkway} alt="Landscape Enhancements" />
                        <h3>Landscape Enhancements</h3>
                        <p>Plant installations, seasonal flower rotations, and garden bed design to elevate your business’s curb appeal.</p>
                    </div>
                    <div className="service-card">
                        <img src={hardscape} alt="Hardscaping & Outdoor Construction" />
                        <h3>Hardscaping & Outdoor Construction</h3>
                        <p>Patios, retaining walls, and custom outdoor structures that provide functionality and aesthetics.</p>
                    </div>
                </div>
            </section>

            <section className="additional-services">
                <h2 className="section-title">Additional Services</h2>
                <div className="additional-services-content">
                    <div className="additional-service">
                        <h3>Snow & Ice Management</h3>
                        <p>Reliable snow and ice removal to keep your property safe and accessible during winter.</p>
                    </div>
                    <div className="additional-service">
                        <h3>Irrigation Management</h3>
                        <p>Efficient irrigation systems to keep your landscapes healthy while reducing water waste.</p>
                    </div>
                    <div className="additional-service">
                        <h3>Parking Lot Maintenance</h3>
                        <p>Regular cleaning and maintenance to ensure a neat and professional appearance around your business.</p>
                    </div>
                </div>
            </section>

            <section className="cta">
                <h2>Want to Make a Lasting Impression?</h2>
                <Link to="/contact" className="cta-button">Request a Free Quote</Link>
            </section>
        </main>
    );
};

export default Commercial;
