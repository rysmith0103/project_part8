import "../styles/Contact.css";
import topImage from "../images/contactus.jpg";

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
                    <div className="estimate-form">
                        <h2>Get a Free Estimate</h2>
                        <p>Fill out the short form below for a free estimate on landscaping services.</p>
                        <form
                            id="estimateForm"
                            action="https://api.web3forms.com/submit"
                            method="POST"
                        >
                            <input type="hidden" name="access_key" value="5c82a567-bdaf-49e3-83ee-30d23e92b34e" />
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                            <input type="text" id="phone" name="phone" placeholder="Enter Phone" required />
                            <input type="text" id="zip" name="zip" placeholder="Zip Code" required />
                            <select id="services" name="services" required>
                                <option value="">Select Your Services</option>
                                <option value="Lawn Maintenance">Lawn Maintenance</option>
                                <option value="Spring/Fall Clean-Up">Spring/Fall Clean-Up</option>
                                <option value="Mulching and Bed Maintenance">Mulching and Bed Maintenance</option>
                                <option value="Hardscaping">Hardscaping</option>
                                <option value="Landscape Design and Installation">Landscape Design and Installation</option>
                            </select>
                            <textarea id="comments" name="comments" placeholder="Additional Comments"></textarea>
                            <button type="submit">Submit</button>
                        </form>
                        <p id="result" className="error"></p>
                    </div>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.8565406392427!2d-75.94295412399471!3d40.301144171458475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c670ff2b32411d%3A0x5c914fa815672649!2sTown%20%26%20Country%20Landscaping!5e0!3m2!1sen!2sus!4v1729115800805!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </main>
    );
};

export default Contact;
