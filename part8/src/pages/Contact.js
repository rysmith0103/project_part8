import "../styles/Contact.css";
import topImage from "../images/contactus.jpg";
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
        <main id="main-content">
            <section className="image-section">
                <div className="about-image">
                    <img src={topImage} alt="About Us Image" />
                    <div className="about-text">
                        <h1>Contact Us</h1>
                        <p>Fill out the Form Below and We Will be in Touch Soon!</p>
                    </div>
                </div>
            </section>

            <section className="contact-section">
                <div className="contact-container">
                    <ContactForm />
                </div>
                <div className="iframe-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.8565406392427!2d-75.94295412399471!3d40.301144171458475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c670ff2b32411d%3A0x5c914fa815672649!2sTown%20%26%20Country%20Landscaping!5e0!3m2!1sen!2sus!4v1729115800805!5m2!1sen!2sus"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </main>
    );
};

export default Contact;
