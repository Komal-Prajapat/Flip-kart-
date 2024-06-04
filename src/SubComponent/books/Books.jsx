import React, { useRef } from 'react';
// import './productList.css';
import Navbar2 from '../../component/navbar2/Navbar2';

// Product Component
const Product = ({ product }) => (
  <div className="product">
    <img src={product.image} alt={product.name} />
    <p className="product-name">{product.name}</p>
    <p className="product-price">₹{product.price}</p>
    <p className="product-mrp">M.R.P: ₹{product.mrp}</p>
    <p className="product-delivery">{product.delivery}</p>
  </div>
);

// Books Component
const Books = () => {
  const products = [
    {
      id: 1,
      name: "Cetaphil Face Wash",
      image: "https://m.media-amazon.com/images/I/41hF9m0mEiL.AC_SX250.jpg",
      price: "343.00",
      mrp: "399.00",
      delivery: "Get it by Sat, June 8"
    },
    {
      id: 2,
      name: "Simple Kind To Skin Refreshing",
      image: "https://m.media-amazon.com/images/I/5147WcMxN3L.AC_SX250.jpg",
      price: "280.00",
      mrp: "385.00",
      delivery: "Get it by Thu, June 6"
    },  {
      id: 1,
      name: "Cetaphil Face Wash",
      image: "https://m.media-amazon.com/images/I/41tzDx54wBL.AC_SX250.jpg",
      price: "343.00",
      mrp: "399.00",
      delivery: "Get it by Sat, June 8"
    },
    {
      id: 2,
      name: "Simple Kind To Skin Refreshing",
      image: "https://m.media-amazon.com/images/I/51bStGhF7WL.AC_SX250.jpg",
      price: "280.00",
      mrp: "385.00",
      delivery: "Get it by Thu, June 6"
    },  {
      id: 1,
      name: "Cetaphil Face Wash",
      image: "https://m.media-amazon.com/images/I/51sNq-cTPEL.AC_SX250.jpg",
      price: "343.00",
      mrp: "399.00",
      delivery: "Get it by Sat, June 8"
    },
    {
      id: 2,
      name: "Simple Kind To Skin Refreshing",
      image: "https://m.media-amazon.com/images/I/417btP82dCL.AC_SX250.jpg",
      price: "280.00",
      mrp: "385.00",
      delivery: "Get it by Thu, June 6"
    },
    // Add more products as needed
  ];

  const productContainerRef = useRef(null);

  const scroll = (scrollOffset) => {
    productContainerRef.current.scrollLeft += scrollOffset;
  };

  return (
  <>
    
    <Navbar2></Navbar2>
    <div className="product-list">
      <h2>Hot off the press</h2>
      {/* <h3>Bestsellers in Beauty</h3> */}
      <div className="product-container" ref={productContainerRef}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <button className="scroll-button left" onClick={() => scroll(-200)}>{"<"}</button>
      <button className="scroll-button right" onClick={() => scroll(200)}>{">"}</button>
    </div>
  </>
  );
};

export default Books;
