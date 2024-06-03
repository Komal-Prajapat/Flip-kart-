import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbarcom = () => {
  return (
    <nav className="navbar">
      <div className="navbar-section">
        <Link to={"/"}>
          <img
            src="http://g-ec2.images-amazon.com/images/G/31/img14/anywhere/amazon-logo-500500._V327001990_.jpg"
            alt="Amazon Logo"
            className="navbar-logo"
          />
        </Link>
        <div className="navbar-user-info">
          <p className="navbar-user-name">Hello, User</p>
          <p className="navbar-user-address">Your Address</p>
        </div>
      </div>
      <div className="navbar-search" style={{width:'150px' , marginRight:'10px'}}>
        <input
          type="text"
          className="navbar-search-input"
          placeholder="Search..."
        />
        <button className="navbar-search-button" >
          <FaSearch />
        </button>
      </div>
      <div className="navbar-section" >
        {/* <div className="navbar-language">
          <IoLanguage className="navbar-language-icon" style={{marginLeft:'20px'}}/>
          <select className="navbar-language-select" style={{marginLeft:"20px"}}>
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
            <option>DE</option>
          </select>
        </div> */}
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
