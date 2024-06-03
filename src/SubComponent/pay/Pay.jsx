import React from 'react'
import './pay.css'
import Navbar2 from '../../component/navbar2/Navbar2'
const Pay = () => {
  return (
    <div>
    <Navbar2></Navbar2>
  <div className="topbar">
  <img src="https://tse1.mm.bing.net/th?id=OIP.22d-lhaSQg_OmK9D4VPpSwHaE8&pid=Api&rs=1&c=1&qlt=95&w=109&h=73" alt="" />
  
  </div>

<div className="data">
    <div className="leftside">
       <div className="headingpay"> <p>Amazon Pay Balance<span>rs212.00</span></p></div>
       <hr style={{width:'100%'}}/>
        <li>Add Money</li>
        <li>Add Gift Card</li>
        <li>Account Settings</li>
    </div>
</div>

    </div>
  )
}

export default Pay
