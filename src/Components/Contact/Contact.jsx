import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-form-container">
        <h2
          style={{
            fontFamily:
              "SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial, sans-serif",
          }}
        >
          Contact Us
        </h2>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
