import "../styles/dialog.css";
import React, { useState } from "react";

const EditDialog = (props) => {
  const [inputs, setInputs] = useState({
    _id: props._id,
    question: props.question,
    answer: props.answer,
    related_services: props.related_services,
    category: props.category,
    prev_img: props.img_name,
    editBlogPost: props.editBlogPost
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleImageChange = (event) => {
    const name = event.target.name;
    const value = event.target.files[0];
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    const response = await fetch(
      `https://project-backend-dzh5.onrender.com/api/faqs/${props._id}`,
      {
        method: "PUT",
        body: formData,
      }
    );

    if (response.status === 200) {
      setResult("FAQ successfully updated!");
      props.editBlogPost(await response.json());
      props.closeDialog();
    } else {
      console.log("Error editing FAQ", response);
      setResult("Error updating FAQ. Please try again.");
    }
  };

  return (
    <div id="edit-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <form id="edit-faq-form" onSubmit={onSubmit}>
            <p>
              <label htmlFor="question">Question:</label>
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
              <label htmlFor="answer">Answer:</label>
              <textarea
                id="answer"
                name="answer"
                value={inputs.answer || ""}
                onChange={handleChange}
                required
              ></textarea>
            </p>
            <p>
              <label htmlFor="related_services">Related Services:</label>
              <input
                type="text"
                id="related_services"
                name="related_services"
                value={inputs.related_services || ""}
                onChange={handleChange}
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

            <section className="columns">
              <p id="img-prev-section">
                <img
                  id="img-prev"
                  src={
                    inputs.img
                      ? URL.createObjectURL(inputs.img)
                      : inputs.prev_img
                      ? inputs.prev_img
                      : ""
                  }
                  alt="FAQ Visual"
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
              <button type="submit">Submit</button>
            </p>
            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditDialog;
