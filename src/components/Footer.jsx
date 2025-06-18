import React from "react";
import "./Footer.css";
import footerLogo from "../assets/image.png"; // Make sure the file exists here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={footerLogo} alt="Mauli Construction Logo" />
        </div>
        <span className="reserved-rights"> &copy; 2025 Mauli Construction And Fabrication. All rights reserved.</span>
        <p className="contact-number">Contact: +91 8010490096</p>
        <p className="contact-number">Contact: +91 8698465857</p>
        <p className="contact-number">Contact: +91 9370772494</p>
      </div>
    </footer>
  );
};

export default Footer;
