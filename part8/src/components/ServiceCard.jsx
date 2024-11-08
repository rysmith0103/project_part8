const ServiceCard = ({image, alt, title, description}) => (
    <div className="service-card">
        <img src={image} alt={alt} />
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
);

export default ServiceCard;