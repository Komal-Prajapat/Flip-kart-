import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Navbar2 from "../navbar2/Navbar2";
import { PiAsteriskSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebarcom = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <Navbar2 />
      <div className="profilephoto">
        <CgProfile className="icon" />
        <h2>Hello, user</h2>
        <Link to={"/"}>
          <PiAsteriskSimpleFill className="crose" />
        </Link>
      </div>
      <div className="sidebar">
        <div className="details" style={{ padding: "10px" }}>
          <h3>Trending</h3>
          <ul>
            <li>Best Sellers</li>
            <li>New Releases</li>
            <li>Movers and Shakers</li>
          </ul>
          <hr />
          <h3>Digital Content and Devices</h3>
          <ul>
            <li>Echo & Alexa</li>
            <li>Fire TV</li>
            <li>Kindle E-Reader & eBooks</li>
            <li>Audible Audiobooks</li>
            <li>Amazon Prime Video</li>
            <li>Amazon Prime Music</li>
          </ul>
          <hr />
          <h3>Shop by Category</h3>
          <ul>
            <li>Mobiles</li>
            <li>Computer</li>
            <li>TV Appliances Electronics</li>
            <li>Men's Fashion</li>
            {showAll && (
              <>
                <li>Home</li>
                <li>Kitchen</li>
                <li>Pets</li>
                <li>Beauty</li>
                <li>Health</li>
                <li>Grocery</li>
                <li>Sports</li>
                <li>Fitness</li>
                <li>Bags</li>
                <li>Luggage</li>
                <li>Toys</li>
                <li>Baby Products</li>
                <li>Kid's Fashion</li>
                <li>Car</li>
                <li>Books</li>
                <li>Movies</li>
                <li>Music & Video Games</li>
              </>
            )}
          </ul>
          <button onClick={handleToggle} className="lessmorebtn">
            {showAll ? "See Less " : "See All "}
            {showAll ? <AiOutlineUp /> : <AiOutlineDown />}
          </button>
          <hr />
          <button className="signout-button">Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebarcom;
