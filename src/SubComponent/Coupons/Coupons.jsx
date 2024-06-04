import React, { useState } from "react";
import Navbar2 from "../../component/navbar2/Navbar2";
import { IoCutSharp } from "react-icons/io5";
import "./coupons.css";

const Coupons = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // Dummy data for product cards
  const products = [
    {
      id: 1,
      name: "Mobile",
      image:
        "https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_9_434x434._SS400_QL85_.jpg",
    },
    {
      id: 2,
      name: "Watch",
      image:
        "https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_8_434x434._SS400_QL85_.jpg",
    },
    {
      id: 3,
      name: "Laptop",
      image:
        "https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_7_434x434._SS400_QL85_.jpg",
    },
    {
      id: 1,
      name: "Car",
      image:
        "https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_6_434x434._SS400_QL85_.jpg",
    },
    {
      id: 2,
      name: "Laptop",
      image:
        "https://m.media-amazon.com/images/G/31/img22/Coupons/BAU/Halo/D71116630_halo_coupons_R_5_434x434._SS400_QL85_.jpg",
    },
  ];

  // Function to handle next card
  const nextCard = () => {
    const newIndex =
      currentCardIndex === products.length - 1 ? 0 : currentCardIndex + 1;
    setCurrentCardIndex(newIndex);
  };

  // Function to handle previous card
  const prevCard = () => {
    const newIndex =
      currentCardIndex === 0 ? products.length - 1 : currentCardIndex - 1;
    setCurrentCardIndex(newIndex);
  };

  return (
    <>
      <Navbar2 />
      <div className="coupons">
        <div className="iconc">
          <IoCutSharp />
        </div>
         <p style={{marginLeft:'100px'}}>Your Coupons</p>
         <p style={{marginLeft:'100px'}}>|</p>
        <div className="collected">
           <p style={{marginLeft:'100px'}}>Collected</p>
           <p style={{marginLeft:'100px'}}>0 Coupon</p>
        </div>
        <div className="Expiringsoon">
           <p style={{marginLeft:'100px'}}>Expiring Soon</p>
           <p style={{marginLeft:'100px'}}>0 Coupon</p>
        </div>
      </div>
<div className="coupons1">

</div>
      <div className="slider">
        <button className="prev" onClick={prevCard}>
          &lt;
        </button>
        <div className="cards">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`card ${index === currentCardIndex ? "active" : ""}`}
            >
              <img src={product.image} alt={product.name} className="IMAGE" />
               <p style={{marginLeft:'100px'}}>{product.name}</p>
            </div>
          ))}
        </div>
        <button className="next" onClick={nextCard}>
          &gt;
        </button>
      </div>

      <hr />
      <div className="btncouponsbtn">
        <button className="btn couponsbtn"> SHOP BY CATEGORY</button>
        <button className="btn couponsbtn">VIEW ALL COUPONS </button>
        <button className="btn couponsbtn">MY COLLECTED </button>
        <button className="btn couponsbtn">FAQs</button>
      </div>

      <div className="coupons3">

</div>
    </>
  );
};

export default Coupons;
