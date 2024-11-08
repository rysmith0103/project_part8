import { Link } from "react-router-dom";
import "../styles/Commercial.css";
import ServiceCard from "../components/ServiceCard";
import AdditionalService from "../components/AdditionalServiceCard";
import { MainServicesData, additionalServicesData } from "../components/ServicesData";

const Commercial = () => {
    return (
        <main id="main-content">
            <section className="services">
                <h2 className="section-title">Our Commercial Services</h2>
                <div className="service-cards">
                    {MainServicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            alt={service.alt}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </section>

            <section className="additional-services">
                <h2 className="section-title">Additional Services</h2>
                <div className="additional-services-content">
                    {additionalServicesData.map((service, index) => (
                        <AdditionalService
                            key = {index}
                            title = {service.title}
                            description = {service.description}
                        />
                    ))}
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
