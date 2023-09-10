import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer-subscribe">
            <div className="footer-title">
              <h1>Subscribe to our Newsletter</h1>
            </div>
            <div className="footer-input">
              <input type="text" />
              <button>Subscripe</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
