import React, { useState } from 'react';

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        zip: '',
        services: '',
        comments: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);
        setResult("");

        try {
            const formDataToSend = new FormData(event.target);
            formDataToSend.append("access_key", "5c82a567-bdaf-49e3-83ee-30d23e92b34e");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setResult("Thank you! We'll be in touch soon.");
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    zip: '',
                    services: '',
                    comments: ''
                });
                event.target.reset();
            } else {
                setResult("Oops! Something went wrong. Please try again.");
                console.error("Error", data);
            }
        } catch (error) {
            setResult("Oops! Something went wrong. Please try again.");
            console.error("Error", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="estimate-form">
            <h2>Get a Free Estimate</h2>
            <p>Fill out the short form below for a free estimate on landscaping services.</p>
            <form onSubmit={onSubmit}>
                <input 
                    type="hidden" 
                    name="access_key" 
                    value="5c82a567-bdaf-49e3-83ee-30d23e92b34e" 
                />
                
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Your Name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    aria-label="Your Name"
                />
                
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    aria-label="Your Email"
                />
                
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="Phone Number" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="[0-9]{3}[-. ]?[0-9]{3}[-. ]?[0-9]{4}"
                    aria-label="Phone Number"
                />
                
                <input 
                    type="text" 
                    id="zip" 
                    name="zip" 
                    placeholder="Zip Code" 
                    required 
                    value={formData.zip}
                    onChange={handleChange}
                    pattern="[0-9]{5}"
                    aria-label="Zip Code"
                />
                
                <select 
                    id="services" 
                    name="services" 
                    required 
                    value={formData.services}
                    onChange={handleChange}
                    aria-label="Select Services"
                >
                    <option value="">Select Your Services</option>
                    <option value="Lawn Maintenance">Lawn Maintenance</option>
                    <option value="Spring/Fall Clean-Up">Spring/Fall Clean-Up</option>
                    <option value="Mulching and Bed Maintenance">Mulching and Bed Maintenance</option>
                    <option value="Hardscaping">Hardscaping</option>
                    <option value="Landscape Design and Installation">Landscape Design and Installation</option>
                </select>
                
                <textarea 
                    id="comments" 
                    name="comments" 
                    placeholder="Additional Comments or Questions" 
                    value={formData.comments}
                    onChange={handleChange}
                    aria-label="Additional Comments"
                ></textarea>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Get Your Free Estimate'}
                </button>
            </form>
            
            {result && (
                <p 
                    id="result" 
                    className={result.includes("thank you") ? "success" : "error"}
                    role="alert"
                >
                    {result}
                </p>
            )}
        </div>
    );
}