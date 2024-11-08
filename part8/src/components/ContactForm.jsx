import React from 'react';


export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5c82a567-bdaf-49e3-83ee-30d23e92b34e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <div className="estimate-form">
            <h2>Get a Free Estimate</h2>
            <p>Fill out the short form below for a free estimate on landscaping services.</p>
            <form
                id="estimateForm"
                onSubmit={onSubmit} // Attach onSubmit handler
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
            {/* Display the result message */}
            <p id="result" className="error">{result}</p>
        </div>
    );
  }