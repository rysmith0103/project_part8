import "../styles/About.css";
import riverIMG from "../images/river.jpg";
import signIMG from "../images/T&CSign.jpg";


const About = () => {
    return (
        <main id="main-content">
            <section className="image-section">
                <div className="about-image">
                    <img src={riverIMG} alt="About Us Image" />
                    <div className="about-text">
                        <h1>About Us</h1>
                        <p>Over 48 Years in Business</p>
                    </div>
                </div>
            </section>

            <section className="founders-section">
                <div className="text-content">
                    <h2>Experts in Landscaping Design</h2>
                    <p className="highlight-text">
                        Since 1976, Town & Country Landscaping has been serving Berks County and surrounding areas
                    </p>
                    <p>
                        Town & Country Landscaping is a family-owned and operated company. The owner, Barry MacKenzie, along with his daughter, Jessica Mock, and son-in-law, Kevin Mock, pride themselves on the quality of their work and services. Town & Country Landscaping provides services for both residential and commercial properties. No job is too small for the highly skilled professionals working with us who are committed to making your property look its absolute best by using the highest quality equipment, plant material, and products.
                    </p>
                </div>
                <div className="image-content">
                    <img src={signIMG} alt="Landscape Design" />
                </div>
            </section>

            <section className="mission">
                <h2 className="section-title">Our <span className="highlight">Mission</span></h2>
                <p className="mission-text">
                    At Town & Country Landscaping, we are dedicated to meeting all of your outdoor living needs. From decks to patios to pergolas, no job is too small.
                </p>
                <p className="mission-text">
                    As a family-owned and operated business, owner Barry MacKenzie, along with his daughter Jessica Mock and son-in-law Kevin Mock, ensure every project meets our high standards of quality and service.
                </p>
                <p className="mission-text">
                    We offer customized landscaping for residential and commercial properties, using only the best equipment, plants, and products. View our project gallery to see our work, and feel free to reach out to schedule an appointment or ask any questions.
                </p>
            </section>

            <section className="why-choose-us">
                <h2 className="section-title">Why <span className="highlight">Choose Us?</span></h2>
                <div className="features">
                    <div className="feature-box">
                        <span className="icon">🌿</span>
                        <h3>Specialized Company</h3>
                        <p>We focus on providing top-quality residential and commercial landscaping services.</p>
                    </div>
                    <div className="feature-box">
                        <span className="icon">✅</span>
                        <h3>Licensed & Insured</h3>
                        <p>Our team is fully licensed, bonded, and insured, ensuring safety and professionalism.</p>
                    </div>
                    <div className="feature-box">
                        <span className="icon">🛠️</span>
                        <h3>Dependable Services</h3>
                        <p>We take great pride in delivering every project on time and within budget.</p>
                    </div>
                    <div className="feature-box">
                        <span className="icon">📅</span>
                        <h3>Day Scheduling</h3>
                        <p>We offer consistent scheduling, visiting your property on the same day and time each week.</p>
                    </div>
                    <div className="feature-box">
                        <span className="icon">💬</span>
                        <h3>Free Consultations</h3>
                        <p>We provide free consultations and accurate quotes to help you plan your landscaping needs.</p>
                    </div>
                    <div className="feature-box">
                        <span className="icon">🏆</span>
                        <h3>Reputable Company</h3>
                        <p>With over 45 years of experience, we are known for our quality service and exceptional results.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
