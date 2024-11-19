import React, {useState} from "react";
import "../styles/dialog.css";


const AddDialog = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
      
        const formData = new FormData(event.target);
      
        // Ensure related_services is always present
        if (!formData.get("related_services")) {
          formData.set("related_services", ""); // Default to an empty string
        }
      
        for (let [key, value] of formData.entries()) {
          console.log(`${key}:`, value); // Debugging: Log form data
        }
      
        try {
          const response = await fetch("http://localhost:3002/api/faqs", {
            method: "POST",
            body: formData,
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log("Response:", data); // Log the response
            setResult("Blog post added successfully!");
            props.addBlogPost(data);
            props.closeDialog();
          } else {
            const errorData = await response.json();
            console.log("Error Response:", errorData); // Log error response
            setResult(`Error: ${errorData.message}`);
          }
        } catch (error) {
          console.error("Request failed:", error); // Log network errors
          setResult("An error occurred while adding the blog post.");
        }
      };
      
      

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({...values, [name] : value}));
    };

    const handleImageChange = (event) => {
        const name = event.target.name;
        const value = event.target.files[0];
        setInputs((values) => ({ ...values, [name]: value }));
      };

    return(
    <div id="add-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeDialog}>
            &times;
          </span>
            <form id="add-blog-form" onSubmit={onSubmit} encType="multipart/form-data">
                <p>
                    <label htmlFor="question">Blog Title:</label>
                    <input
                    type="text"
                    id="question"
                    name="question"
                    value={inputs.question || ""}
                    onChange={handleChange}
                    required
                    />
                </p>
                <p>
                    <label htmlFor="answer">Content:</label>
                    <textarea
                    id="answer"
                    name="answer"
                    rows="6"
                    value={inputs.answer || ""}
                    onChange={handleChange}
                    required
                    />
                </p>
                <p>
                    <label htmlFor="category">Category:</label>
                    <input
                    type="text"
                    id="category"
                    name="category"
                    value={inputs.category || ""}
                    onChange={handleChange}
                    required
                    />
                </p>
                <p>
                    <label htmlFor="related_services">Related Services (comma-separated):</label>
                    <input
                    type="text"
                    id="related_services"
                    name="related_services"
                    value={inputs.related_services || ""}
                    onChange={handleChange}
                    required
                    />
                </p>
                <section className="columns">
                    <p id="img-prev-section">
                    <img
                        id="img-prev"
                        src={inputs.img ? URL.createObjectURL(inputs.img) : ""}
                        alt=""
                    />
                    </p>
                    <p id="img-upload">
                    <label htmlFor="img">Upload Image:</label>
                    <input
                        type="file"
                        id="img"
                        name="img"
                        onChange={handleImageChange}
                        accept="image/*"
                    />
                    </p>
                </section>
                <p>
                    <label htmlFor="updated_date">Updated Date:</label>
                    <input
                    type="date"
                    id="updated_date"
                    name="updated_date"
                    value={inputs.updated_date || ""}
                    onChange={handleChange}
                    required
                    />
                </p>
                <p>
                    <button type="submit">Submit</button>
                </p>
                <p>{result}</p>
            </form>
        </div>
      </div>
    </div>
    );
};

export default AddDialog;