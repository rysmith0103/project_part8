import React, { useState, useEffect } from "react";
import axios from "axios";
import FAQItem from "../components/FAQItem";
import "../styles/Blog.css";

const Blog = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://project-backend-dzh5.onrender.com/api/faqs/");
        setFaqs(response.data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq) => (
        <FAQItem
          key={faq._id}
          question={faq.question}
          answer={faq.answer}
          img_name={faq.img_name ? `https://project-backend-dzh5.onrender.com/${faq.img_name}` : null}
          related_services={faq.related_services}
          category={faq.category}
          updated_date={faq.updated_date}
        />
      ))}
    </div>
  );
};

export default Blog;
