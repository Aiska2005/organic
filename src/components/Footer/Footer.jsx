import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
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
              <input placeholder="Your Email Address" type="text" />
              <button>Subscripe</button>
            </div>
          </div>
          <div className="footer-info">
            <div className="footer-contact">
              <h1>Contact Us</h1>
              <div>
                <span>Email</span>
                <p>needhelp@Organia.com</p>
              </div>
              <div>
                <span>Phone</span>
                <p>666 888 888</p>
              </div>
              <div>
                <span>Address</span>
                <p>88 road, borklyn street, USA</p>
              </div>
            </div>
            <div className="footer-organick">
              <div className="footer-logo">
                <img src="/public/assets/header/Logo.png" alt="" />
                <h1>Organick</h1>
              </div>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum simply dummy text of the printing
              </p>

              <div className="footer-social">
                <div>
                  <BsInstagram />
                </div>
                <div>
                  <BsFacebook />
                </div>
                <div>
                  <AiOutlineTwitter />
                </div>
                <div>
                  <FaPinterest />
                </div>
              </div>
            </div>
            <div className="footer-pages">
              <h1>Utility Pages</h1>
              <div className="pt-25">
                <p>Style Guide</p>
                <p>404 Not Found</p>
                <p>Password Protected</p>
                <p>Licences</p>
                <p>Changelog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="end">
        <h3>Copyright © <span>Organick</span></h3>
      </div>
    </footer>
  );
};

export default Footer;
