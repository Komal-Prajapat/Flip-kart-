import React from "react";
import "./pay.css";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiGift } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";

import Navbar2 from "../../component/navbar2/Navbar2";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

const Pay = () => {
  return (
    <div>
      <Navbar2 />
      <div className="topbar">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.22d-lhaSQg_OmK9D4VPpSwHaE8&pid=Api&rs=1&c=1&qlt=95&w=109&h=73"
          alt="Amazon Pay Logo"
        />
      </div>

      <div className="data">
        <div className="leftside">
          <div className="headingpay">
            <p className="text">
              Amazon Pay Balance<span className="rs">rs212.00</span>
            </p>
          </div>
          <hr style={{ width: "100%" }} />
          <ul>
            <Link>
              {" "}
              <li className="list">
                <IoIosAddCircleOutline className="leftbaricon" />
                Add Money
              </li>
            </Link>
            <Link>
              {" "}
              <li className="list">
                <CiGift className="leftbaricon" />
                Add Gift Card
              </li>
            </Link>
            <Link>
              {" "}
              <li className="list">
                <CiSettings className="leftbaricon" />
                Account Settings
              </li>
            </Link>
          </ul>
        </div>

        <div className="rightside">
          <div className="row">
            <div className="col">
              <i className="fas fa-exchange-alt icon"></i>
              <p className="text">Your Transaction</p>
            </div>
            <div className="col">
              <i className="fas fa-gift icon"></i>
              <p className="text">Rewards</p>
            </div>
            <div className="col">
              <i className="fas fa-hand-holding-heart icon"></i>
              <p className="text">Donate</p>
            </div>
            <div className="col">
              <i className="fas fa-credit-card icon"></i>
              <p className="text">Check EMI options</p>
            </div>
            <div className="col">
              <i className="fas fa-wallet icon"></i>
              <p className="text">Your saved cards</p>
            </div>
          </div>
          <div className="row">
            <h3>Recharges</h3>
            <div className="col">
              <i className="fas fa-mobile-alt icon red"></i>
              <p className="text">Mobile Recharge</p>
            </div>
            <div className="col">
              <i className="fas fa-store icon lightblue"></i>
              <p className="text">App Store Code</p>
            </div>
            <div className="col">
              <i className="fas fa-tv icon"></i>
              <p className="text">DTH Recharge</p>
            </div>
            <div className="col">
              <i className="fas fa-play icon"></i>
              <p className="text">Google Play Recharge</p>
            </div>
            <div className="col">
              <i className="fas fa-subscript icon"></i>
              <p className="text">Subscription</p>
            </div>
            <div className="col">
              <i className="fas fa-tachometer-alt icon"></i>
              <p className="text">Buy FASTag</p>
            </div>
          </div>

          <div className="row">
            <div className="col-2">
              <i className="fas fa-exchange-alt icon"></i>
              <p className="text">Your Transaction</p>
            </div>
            <div className="col-2">
              <i className="fas fa-gift icon"></i>
              <p className="text">Rewards</p>
            </div>
            <div className="col-2">
              <i className="fas fa-hand-holding-heart icon"></i>
              <p className="text">Donate</p>
            </div>
            <div className="col-2">
              <i className="fas fa-credit-card icon"></i>
              <p className="text">Check EMI options</p>
            </div>
       <div className="col-2">
              <i className="fas fa-exchange-alt icon"></i>
              <p className="text">Your Transaction</p>
            </div>
            <div className="col-2">
              <i className="fas fa-gift icon"></i>
              <p className="text">Rewards</p>
            </div>
            <div className="col-2">
              <i className="fas fa-hand-holding-heart icon"></i>
              <p className="text">Donate</p>
            </div>
            <div className="col-2">
              <i className="fas fa-credit-card icon" style={{color:'blue'}}></i>
              <p className="text">Check EMI options</p>
            </div>
       <div className="col-2">
              <i className="fas fa-exchange-alt icon" style={{color:'red'}}></i>
              <p className="text">Your Transaction</p>
            </div>
            <div className="col-2">
              <i className="fas fa-gift icon"style={{color:'yellow'}}></i>
              <p className="text">Rewards</p>
            </div>
            <div className="col-2">
              <i className="fas fa-hand-holding-heart icon" style={{color:'pink'}}></i>
              <p className="text">Donate</p>
            </div>
            <div className="col-2" >
              <i className="fas fa-credit-card icon" style={{color:'green'}}></i>
              <p className="text">Check EMI options</p>
            </div>  <div className="col-2" >
              <i className="fas fa-credit-card icon" style={{color:'pink'}}></i>
              <p className="text">Check EMI options</p>
            </div>
      
          
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
