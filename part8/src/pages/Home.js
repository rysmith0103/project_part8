import "../styles/Home.css";
import mower from "../images/grassmowing.jpg";

const Home = () => {
    return (
        <main id="main-content">
            <div className="slideshow-container">
                <h1>***INSERT SLIDESHOW HERE***</h1>
            </div>

            <section className="design-section">
                <div className="text-content">
                    <h2>Providing services since 1976</h2>
                    <p className="highlight-text">LANDSCAPE DESIGN, HARDSCAPING, MAINTENANCE & MORE...</p>
                    <p>Town & Country Landscaping has been dedicated to enhancing the beauty and value of properties across Berks County and the surrounding areas. Our team of experienced professionals specializes in delivering top-quality landscaping services, including detailed landscape design, hardscaping, and comprehensive maintenance.</p>
                </div>
                <div className="image-content">
                    <img src={mower} alt="Image of Lawn Mower cutting grass" />
                </div>
            </section>

            <section className="testimonials-section">
                <div className="testimonial-box">
                    <p>“Town & Country Landscaping transformed our yard into a beautiful outdoor oasis. Their attention to detail and professionalism were exceptional!”</p>
                    <p className="author">John D.</p>
                </div>

                <div className="testimonial-box">
                    <p>“We were extremely pleased with the hardscaping work they completed for us. Their team was reliable, efficient, and a pleasure to work with.”</p>
                    <p className="author">Jane S.</p>
                </div>

                <div className="testimonial-box">
                    <p>“Our business property has never looked better. The team at Town & Country consistently provides outstanding service and care."</p>
                    <p className="author">Michael T.</p>
                </div>
            </section>

            <section className="services">
                <h2>First-Class Services</h2>
                <div className="service-boxes">
                    <div className="service-box">
                        <h3>COMMERCIAL</h3>
                        <p>We offer professional landscaping and maintenance services to keep your commercial property looking pristine year-round. Whether it’s routine care, seasonal plantings, or complete landscape overhauls, we have the expertise to elevate your business’s exterior.</p>
                        <a href="../services/commercial/index.html" className="btn">Learn More</a>
                    </div>
                    <div className="service-box">
                        <h3>RESIDENTIAL</h3>
                        <span className="badge">MOST POPULAR</span>
                        <p>Transform your outdoor space into a beautiful retreat. Our residential services include lawn maintenance, hardscaping, custom landscape designs, and more. We ensure that your home’s landscape is a true reflection of your style and vision.</p>
                        <a href="../services/residential/index.html" className="btn">Learn More</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
