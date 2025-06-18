import React, { useState } from 'react';
import './Contact.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import axios from 'axios'; 

const Contact = () => {
  
  

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Error sending message");
      console.error(err);
    }
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <p>Have a project in mind? We'd love to hear from you!</p>
        <form className="contact-form" onSubmit={handleSubmit}> 
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
