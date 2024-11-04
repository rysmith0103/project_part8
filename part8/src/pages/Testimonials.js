import "../styles/Testimonials.css";

const Testimonials = () => {
    return (
        <main id="main-content">
            <section className="testimonial-section">
                <div className="testimonial-header">
                    <h2>Customer Testimonials</h2>
                </div>

                <div className="testimonial-container">
                    <div className="testimonial">
                        <p>Town & Country Landscaping completely transformed our backyard into an outdoor oasis. Their attention to detail and quality of work is unmatched!</p>
                        <p className="customer-name">Craig</p>
                        <p className="location">Reading, PA</p>
                        <p className="rating">★★★★★</p>
                    </div>
                    <div className="testimonial">
                        <p>The team is professional, courteous, and always goes above and beyond. Our lawn has never looked better, and the seasonal maintenance keeps everything in top shape year-round.</p>
                        <p className="customer-name">Craig</p>
                        <p className="location">Reading, PA</p>
                        <p className="rating">★★★★★</p>
                    </div>
                    <div className="testimonial">
                        <p>We hired Town & Country for a full landscape design and couldn’t be happier with the results. They turned our ideas into a reality and made the process so easy.</p>
                        <p className="customer-name">Craig</p>
                        <p className="location">Reading, PA</p>
                        <p className="rating">★★★★★</p>
                    </div>
                </div>

                <div className="estimate-form">
                    <h2>Get a Free Estimate</h2>
                    <p>Fill out the short form below for a free estimate on landscaping services.</p>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Enter Phone" required />
                        <input type="text" placeholder="City/State" required />
                        <select>
                            <option>Select Your Services</option>
                            <option>Service 1</option>
                            <option>Service 2</option>
                        </select>
                        <textarea placeholder="Enter Project Details"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Testimonials;
