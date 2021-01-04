import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="main-footer">
        <div className="container">
          <h2>EASYBUY</h2>
          <ul>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Journal</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
          </ul>
          <div className="social-icons">
            <a href="#">
              <span>
                <i className="fab fa-facebook-f"></i>
              </span>
            </a>
            <a href="#">
              <span>
                <i className="fab fa-twitter"></i>
              </span>
            </a>
            <a href="#">
              <span>
                <i className="fab fa-instagram"></i>
              </span>
            </a>
            <a href="#">
              <span>
                <i className="fab fa-youtube"></i>
              </span>
            </a>
          </div>
        </div>
      </footer>
      <footer className="sub-footer">
        <div className="container">
          <div>
            <p>&copy; 2020 EASYBUY</p>
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
          </div>
          <div>
            <span>
              <i className="fab fa-cc-visa"></i>
            </span>
            <span>
              <i className="fab fa-cc-paypal"></i>
            </span>
            <span>
              <i className="fab fa-cc-amazon-pay"></i>
            </span>
            <span>
              <i className="fab fa-cc-mastercard"></i>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
