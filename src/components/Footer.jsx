import React from 'react';
import './Footer.css';
// import logo from '../assets/logo.png'; // Make sure to adjust the path to your logo

const Footer = () => {
  return (
    <footer className="footer">
      <div>Landing page Image by <a href="https://www.freepik.com/free-photo/sport-equipment_4391522.htm#query=fitness%20background&position=6&from_view=keyword&track=ais&uuid=d942a70d-a308-4674-9b95-be35fb37fab3">Freepik</a></div>
      <div className="footer-content">
        {/* <img src={logo} alt="Logo" className="footer-logo" /> */}
        <div className="footer-contact">
          <h4>Contact Information</h4>
          <p>Email: your.email@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;