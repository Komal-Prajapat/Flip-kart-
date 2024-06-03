import React from "react";
import './sell.css';
import Navbar2 from "../../component/navbar2/Navbar2";

const Sell = () => {
  return (
 <>
       <Navbar2></Navbar2>
    <div className="sell">
  
      <div className="data">
        <h1>Become a seller on Amazon.in</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio sit
          consequatur recusandae rerum ipsum quibusdam minima assumenda dolorum
          ducimus, tenetur asperiores sunt mollitia, voluptate enim nisi fugit
          accusamus harum ut nostrum fugiat non. Nesciunt.
        </p>
        <button className="stratsell">Start Selling</button>
      </div>
      <div className="image">
        <img src="https://c.media-amazon.com/images/G/31/amazonservices/New_PRO.webp" alt="Seller on Amazon" style={{height:'400px'}}/>
      </div>
    </div>
 </>
  );
};

export default Sell;
