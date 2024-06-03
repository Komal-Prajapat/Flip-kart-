import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

const FooterCom = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col col-3 firstcol">
            <p>Get to Know Us</p>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div className="col col-3 firstcol">
            <p>Connect With Us</p>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="col col-3 firstcol">
            <p>Make Money With Us</p>
            <ul>
              <li>Sell on Amazon</li>
              <li>Sell Under Amazon Accelerator</li>
              <li>Protect And Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Become an Affiliate</li>
              <li>Fulfillment by Amazon</li>
              <li>Advertise Your Products</li>
            </ul>
          </div>
          <div className="col col-3">
            <p>Let Us Help You</p>
            <ul>
              <li>COVID-19 and Amazon</li>
              <li>Your Account</li>
              <li>Return Centre</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row row2">
          <div className="image">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.JZQkrLG78s4A3yoPPuOmbQHaCa&pid=Api&P=0&h=180"
              alt="Amazon Logo"
              className="navbar-logo"
            />
          </div>
          <div className="language-selector">
            <button onClick={toggleDropdown} className="language-button">
              <FontAwesomeIcon icon={faGlobe} className="icon" /> Language
            </button>
            {showDropdown && (
              <ul className="language-dropdown">
                <li>English</li>
                <li>Español</li>
                <li>Français</li>
                <li>Deutsch</li>
                <li>Italiano</li>
                <li>Português</li>
                <li>中文</li>
                <li>日本語</li>
                <li>한국어</li>
                <li>Русский</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCom;
