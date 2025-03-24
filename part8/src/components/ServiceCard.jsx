const ServiceCard = ({image, alt, title, description}) => (
    <div className="service-card">
        <div className="service-card-image">
            <img 
                src={image} 
                alt={alt} 
                onError={(e) => {
                    console.error(`Error loading image: ${image}`);
                    e.target.style.display = 'none';
                }}
            />
        </div>
        <div className="service-card-content">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

export default ServiceCard;