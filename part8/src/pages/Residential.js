import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import AdditionalService from "../components/AdditionalServiceCard";
import { ResidentialMainServicesData, ResidentialAdditionalServicesData } from "../components/ServicesData";

const ResidentialServices = () => {
    return (
        <main id="main-content">
            <section className="services">
                <h2 className="section-title">Our Residential Services</h2>
                <div className="service-cards">
                {ResidentialMainServicesData.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            alt={service.alt}
                            title={service.title}
                            description={service.description}
                        />
                    ))};
                </div>
            </section>

            <section className="additional-services">
                <h2 className="section-title">Additional Services</h2>
                <div className="additional-services-content">
                    {ResidentialAdditionalServicesData.map((service, index) => (
                        <AdditionalService
                            key = {index}
                            title = {service.title}
                            description = {service.description}
                        />
                    ))};
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
