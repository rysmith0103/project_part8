import React, { useState, useEffect } from "react";
import axios from "axios";
import FAQItem from "../components/FAQItem";
import "../styles/Blog.css";
import AddDialog from "../components/add-dialog";

const Blog = () => {
  const [faqs, setFaqs] = useState([]);
  const [showAddDialog, setShowAddDialog] = useState(false);

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

  const addBlogPost = (blogPost) => {
    setFaqs((blogPosts) => [...blogPosts, blogPost]);
  };

  const openAddDialog = () => {
    setShowAddDialog(true);
  };

  const closeAddDialog = () => {
    setShowAddDialog(false);
  };

  return (
    <div>
      <h1>Frequently Asked Questions</h1>
      <button id="add-blog" onClick={openAddDialog}>Create a Post</button>

      {showAddDialog ? (<AddDialog closeDialog={closeAddDialog} addBlogPost={addBlogPost}/>) : ("")}
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
