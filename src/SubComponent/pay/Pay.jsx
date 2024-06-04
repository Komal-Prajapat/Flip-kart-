import React from 'react'
import './pay.css'
import Navbar2 from '../../component/navbar2/Navbar2'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Pay = () => {
  return (
    <div>
      <Navbar2 />
      <div className="topbar">
        <img src="https://tse1.mm.bing.net/th?id=OIP.22d-lhaSQg_OmK9D4VPpSwHaE8&pid=Api&rs=1&c=1&qlt=95&w=109&h=73" alt="Amazon Pay Logo" />
      </div>

      <div className="data">
        <div className="leftside">
          <div className="headingpay">
            <p>Amazon Pay Balance<span>rs212.00</span></p>
          </div>
          <hr style={{ width: '100%' }} />
          <ul>
            <li>Add Money</li>
            <li>Add Gift Card</li>
            <li>Account Settings</li>
          </ul>
        </div>

        <div className="rightside">
          <div className="row">
            <div className="col"><i className="fas fa-exchange-alt icon"></i><p>Your Transaction</p></div>
            <div className="col"><i className="fas fa-gift icon"></i><p>Rewards</p></div>
            <div className="col"><i className="fas fa-hand-holding-heart icon"></i><p>Donate</p></div>
            <div className="col"><i className="fas fa-credit-card icon"></i><p>Check EMI options</p></div>
            <div className="col"><i className="fas fa-wallet icon"></i><p>Your saved cards</p></div>
          </div>
          <div className="row">
            <h3>Recharges</h3>
            <div className="col"><i className="fas fa-mobile-alt icon red"></i><p>Mobile Recharge</p></div>
            <div className="col"><i className="fas fa-store icon lightblue"></i><p>App Store Code</p></div>
            <div className="col"><i className="fas fa-tv icon"></i><p>DTH Recharge</p></div>
            <div className="col"><i className="fas fa-play icon"></i><p>Google Play Recharge</p></div>
            <div className="col"><i className="fas fa-subscript icon"></i><p>Subscription</p></div>
            <div className="col"><i className="fas fa-tachometer-alt icon"></i><p>Buy FASTag</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pay;
