import React, { useState } from "react";
import "../styles/FaqItem.css";
import EditDialog from "./edit-dialog";
import DeleteDialog from "./delete-dialog";

const FAQItem = ({ _id, question, answer, img_name, related_services, category, updated_date, editBlogPost, removeFaq }) => {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const openEditDialog = () => {
    setShowEditDialog(true);
  };
  const closeEditDialog = () => {
    setShowEditDialog(false);
  };
  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };
  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };



  console.log("FAQItem img_name:", img_name);
  console.log("Post ID:", _id )

  return (
    <div className="faq-item">
      {showDeleteDialog ? (
        <DeleteDialog 
        closeDialog={closeDeleteDialog} 
        _id={_id}
        question={question}
        removeFaq={removeFaq}
        />
        ) : ""}

      {showEditDialog ? (
        <EditDialog
         _id={_id}
         closeDialog={closeEditDialog} 
         question={question}
         answer={answer}
         img_name={img_name}
         related_services={related_services}
         category={category}
         updated_date={updated_date}
         editBlogPost={editBlogPost}
         />
         ) : ("")} 

      <div className="top-bar">
        <h3>{question}</h3>
        <div className="actions">
          <a href="#" onClick={openEditDialog}>&#9998;</a>
          <a href="#" onClick={openDeleteDialog}>&#x2715;</a>
        </div>
      </div>
      <p>{answer}</p>
      {img_name && <img src={img_name} alt={question} className="faq-image" />}
      <div className="faq-details">
        <strong>Related Services:</strong> {related_services.join(", ")}
        <br />
        <strong>Category:</strong> {category}
        <br />
        <small>Last updated: {updated_date}</small>
      </div>
    </div>
  );
};

export default FAQItem;
