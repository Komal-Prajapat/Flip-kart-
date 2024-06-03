import React, { useState } from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import './navbar.css';

const Navbarcom = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const handleToggle = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav className="navbar">
      <div className="navbar-section">
        <Link to={"/"}>
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.JZQkrLG78s4A3yoPPuOmbQHaCa&pid=Api&P=0&h=180"
            alt="Amazon Logo"
            className="navbar-logo"
          />
        </Link>
        <button className="navbar-toggle" onClick={handleToggle}>
          <FaBars />
        </button>
      </div>
      <div className={`navbar-links ${isNavExpanded ? "expanded" : ""}`}>
        <div className="navbar-user-info">
          <p className="navbar-user-name">Deliver to User</p>
      <div className="location">
      <CiLocationOn  className='location_icon'/>
          <p className="navbar-user-address">Your Address</p>
      </div>
        </div>
        <div className="navbar-search">
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search..."
          />
          <button className="navbar-search-button">
            <FaSearch />
          </button>
        </div>
        <div className="navbar-user-dropdown">
          <p className="navbar-user-name">Hello, User</p>
          <div className="navbar-dropdown">
            <button className="navbar-dropdown-button">Account & List</button>
            <div className="navbar-dropdown-content">
              <Link to="/account">Your Account</Link>
              <Link to="/orders">Your Orders</Link>
              <Link to="/wishlist">Your Wish List</Link>
              <Link to="/signout">Sign Out</Link>
            </div>
          </div>
        </div>
        <Link to="/returns">
          <button className="navbar-button">Returns & Orders</button>
        </Link>
        <Link to="/items">
          <button className="navbar-button">My Items</button>
        </Link>
        <Link to="/Addtocard">
          <button className="navbar-button navbar-signup">Add to card</button>
        </Link>
        
        <Link to="/register">

          <button className="navbar-button navbar-signin">Sign In</button>
        </Link>
        <Link to="/login">
          <button className="navbar-button navbar-signup">Sign Up</button>
        </Link> 
      </div>
    </nav>
  );
};

export default Navbarcom;
