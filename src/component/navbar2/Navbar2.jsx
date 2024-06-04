import React, { Profiler, useState } from "react";
import "./navbar2.css";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";


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
        <ul className={isActive ? "active" : ""}>
        <Link to={"/profile"}>
            {" "}
            <CgProfile className="menubtn" />
          
          </Link>
          
          <a href="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav">  <li>Amazon miniTv</li></a>
          
          <Link to={"/sell"}>
            {" "}
            <li>Sell</li>
          </Link>
          <Link to={"/giftcard"}>
            <li>Gift Card</li>
          </Link>
          <Link to={"/pay"}>
            {" "}
            <li>Amazon Pay</li>
          </Link>
          <Link to={"/buyAgain"}>
            {" "}
            <li>Buy Again</li>
          </Link>
          <Link to={"/coupons"}>
            {" "}
            <li>Coupons</li>
          </Link>
          <Link to={"/health"}>
            {" "}
            <li>Health, Household & Personal Care</li>
          </Link>
          <Link to={"/giftideas"}>
            {" "}
            <li>Gift Ideas</li>
          </Link>
          <Link to={"/books"}>
            {" "}
            <li>Books</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Navbar2;
