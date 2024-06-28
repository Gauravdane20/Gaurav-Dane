import React from "react";
import "./Footer.css";
// import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import linkedin_icon from "../../assets/linkedin.png";
import github_icon from "../../assets/github.png";
import twitter_icon from "../../assets/twitter.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* <img src={footer_logo} alt="" /> */}
          <h2>GauRav</h2>
          <p>
            I am a passionate Full Stack Developer specializing in the MERN
            (MongoDB, Express.js, React, Node.js) stack. With a strong
            foundation in both front-end and back-end development.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Gaurav Dane. All Rights Reserved
        </p>
        <div className="footer-bottom-right">
          <a
            href="https://www.linkedin.com/in/gaurav-dane-7742ba250/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin_icon} alt="" />
          </a>
          <a
            href="https://github.com/Gauravdane20"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github_icon} alt="" />
          </a>
          <a
            href="https://twitter.com/IamGauravDane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter_icon} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
