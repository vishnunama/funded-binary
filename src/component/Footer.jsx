import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-left">
        <img style={{width:"200px"}} src="img/Binary.png" alt="FundedNext Logo" className="footer-logo" />
        <div className="footer-social-icons">
          <img src="img/discord.svg" alt="Discord" />
          <img src="img/facebook.svg" alt="Facebook" />
          {/* <img src="img/instagram.svg" alt="Instagram" /> */}
          <img src="img/twitter.svg" alt="Twitter" />
          <img src="img/youtube.svg" alt="YouTube" />
        </div>
        <p className="footer-email">support@fundednext.com</p>
      </div>
      <div className="footer-links">
        <div className="footer-column">
          <h4>Models</h4>
          <ul>
            <li>Express</li>
            <li>Evaluation</li>
            <li>Stellar</li>
            <li>Stellar Lite</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Education</h4>
          <ul>
            <li>Dashboard Tour</li>
            <li>Economic Calendar</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Community</h4>
          <ul>
            <li>Join Local Community</li>
            <li>Join Discord</li>
            <li>Join X</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Important Links</h4>
          <ul>
            <li>FAQ</li>
            <li>Affiliate Partner</li>
            <li>Global Events</li>
            <li>Risk Disclosure</li>
            <li>Server Status</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Privacy & Policy</h4>
          <ul>
            <li>Terms of Service</li>
            <li>Affiliate T&C</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
            <li>AML Policy</li>
            <li>Subscribe to newsletter</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <ul>
            <li>Email</li>
            <li>Live Chat</li>
            <li>Messenger</li>
            <li>Connect with us</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
