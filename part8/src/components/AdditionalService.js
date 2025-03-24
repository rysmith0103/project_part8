import React from 'react';

const AdditionalService = ({ title, description }) => {
    return (
        <div className="additional-service">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default AdditionalService; 