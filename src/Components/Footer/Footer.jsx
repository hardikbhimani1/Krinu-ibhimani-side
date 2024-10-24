import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/i-bhimani-Logo-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="col-md-4">
            <img src={logo} alt="BitCoding Solutions Logo" className="footer-logo" />
            <p>
              ibhimani Inc. facilitates the digital place for your organization
              and provides an innovative solution that puts your organization to
              new heights in the 21st century
            </p>
            <ul className="social-icons">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Services</h3>
            <ul className="service-ul">
              <li className="service-li">
                <a href="/">Alibaba Minisite</a>
              </li >
              <li className="service-li">
                <a href="/">Alibaba Product Listing</a>
              </li>
              <li className="service-li">
                <a href="/">Alibaba Product Optimization</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Recent Posts</h3>
            <div className="post">
              <div className="date">20 Feb, 202 3</div>
              <a href="/">How to Build a Chatbot using Node.JS</a>
            </div>
            <div className="post">
              <div className="date">15 Feb, 2023</div>
              <a href="/">Top 5 AI Trends to Watch in 2023</a>
            </div>
            <div className="post">
              <div className="date">10 Feb, 2023</div>
              <a href="/">
                Why Flutter is the Best Choice for Cross-Platform App
                Development
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
