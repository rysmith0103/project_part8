import React, { useEffect, useRef } from 'react';
import '../styles/Residential.css';
import Header from '../components/Header';
import ServiceCard from "../components/ServiceCard";
import AdditionalService from "../components/AdditionalService";
import { ResidentialMainServicesData, ResidentialAdditionalServicesData } from "../data/servicesData";
import { Link } from "react-router-dom";

const ResidentialServices = () => {
    const serviceCardsRef = useRef([]);
    const additionalServicesRef = useRef([]);
    const servicesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px'
        });

        // Observe services section
        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        // Observe service cards
        serviceCardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        // Observe additional services
        additionalServicesRef.current.forEach(service => {
            if (service) observer.observe(service);
        });

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
            serviceCardsRef.current.forEach(card => {
                if (card) observer.unobserve(card);
            });
            additionalServicesRef.current.forEach(service => {
                if (service) observer.unobserve(service);
            });
        };
    }, []);

    return (
        <div className="residential-page">
            <Header />
            <section className="services" ref={servicesRef}>
                <div className="services-content">
                    <h1 className="section-title">Residential Services</h1>
                    <p>Expert landscaping and maintenance services for your home. We create and maintain beautiful outdoor spaces that enhance your property's value and your quality of life.</p>
                </div>
            </section>

            <section className="service-cards">
                {ResidentialMainServicesData.map((service, index) => (
                    <div 
                        key={index}
                        ref={el => serviceCardsRef.current[index] = el}
                        className="service-card-wrapper"
                    >
                        <ServiceCard
                            image={service.image}
                            alt={service.alt}
                            title={service.title}
                            description={service.description}
                        />
                    </div>
                ))}
            </section>

            <section className="additional-services">
                <h2 className="section-title">Additional Services</h2>
                <div className="additional-services-content">
                    {ResidentialAdditionalServicesData.map((service, index) => (
                        <div 
                            key={index}
                            ref={el => additionalServicesRef.current[index] = el}
                            className="additional-service-wrapper"
                        >
                            <AdditionalService
                                title={service.title}
                                description={service.description}
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta">
                <h2>Ready to Transform Your Home's Outdoor Space?</h2>
                <Link to="/contact" className="cta-button">Get a Free Quote</Link>
            </section>
        </div>
    );
};

export default ResidentialServices;
