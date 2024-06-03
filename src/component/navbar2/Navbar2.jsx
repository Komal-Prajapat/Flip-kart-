import React, { useState } from 'react';
import './navbar2.css';

const Navbar2 = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="navbar2">
        <div className="toggle-button" onClick={handleToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isActive ? 'active' : ''}>
          <li>Amazon miniTv</li>
          <li>Sell</li>
          <li>Gift Card</li>
          <li>Amazon Pay</li>
          <li>Buy Again</li>
          <li>Coupons</li>
          <li>Health, Household & Personal Care</li>
          <li>Gift Ideas</li>
          <li>Books</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar2;
