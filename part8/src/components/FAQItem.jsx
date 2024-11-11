import React from "react";

const FAQItem = ({ question, answer, img_name, related_services, category, updated_date }) => {
  return (
    <div className="faq-item">
      <h3>{question}</h3>
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
