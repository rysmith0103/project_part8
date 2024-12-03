import "../styles/dialog.css";
import React, { useState } from "react";

const DeleteDialog = (props) => {
  const [result, setResult] = useState("");

  const deleteFaq = async () => {
    try {
      const response = await fetch(`https://project-backend-dzh5.onrender.com/api/faqs/${props._id}`, {
        method: "DELETE",
      });

      if (response.status === 200) {
        setResult("FAQ successfully deleted");
        if (props.removeFaq) {
          props.removeFaq(props._id); // Call the function 
        }
        props.closeDialog();
      } else {
        console.error("Error deleting FAQ", response);
        setResult("Error deleting FAQ. Please try again.");
      }
    } catch (error) {
      console.error("Error connecting to the server:", error);
      setResult("Error connecting to the server.");
    }
  };

  return (
    <div id="delete-dialog" className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span
            id="dialog-close"
            className="w3-button w3-display-topright"
            onClick={props.closeDialog}
          >
            &times;
          </span>
          <div id="delete-content">
            <h3>Are you sure you want to delete the Post: "{props.question}"?</h3>
            <section>
              <button onClick={deleteFaq}>Yes</button>
              <button onClick={props.closeDialog}>No</button>
            </section>
            <span>{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
