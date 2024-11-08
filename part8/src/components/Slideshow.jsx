import React, { useState, useEffect } from 'react';
// import '../styles/Slideshow.css';



const Slideshow = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer); 
    }, [images.length, interval]);

    return (
        <div className="slideshow">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />
        </div>
    );
};

export default Slideshow;
