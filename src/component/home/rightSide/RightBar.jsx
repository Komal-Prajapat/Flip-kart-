import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './RightBar.css'; 
import Cart from '../../addtocard/Cart';


const products = Array.from({ length: 15 }, (_, index) => ({
  id: index,
  image: 'https://via.placeholder.com/150',
  name: `Product ${index + 1}`,
  rating: 4.5,
  reviews: Math.floor(Math.random() * 1000),
  price: (Math.random() * 100 + 10).toFixed(2),
  boughtCount: Math.floor(Math.random() * 1000),
  deliveryDate: new Date(new Date().setDate(new Date().getDate() + 1)).toDateString(),
}));

const RightBar = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="rightbar">
      <h2 className="rightbar-heading">Results</h2>
      <p className="rightbar-description">
        Check each product page for other buying options, price, and other details may vary based on product size and colors.
      </p>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <div className="product-rating">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <span>({product.reviews})</span>
              </div>
              <p className="product-bought-count">{product.boughtCount} bought in the past month</p>
              <h4 className="product-price">${product.price}</h4>
              <p className="product-delivery">Get it by Tomorrow, {product.deliveryDate}</p>
              <button className="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default RightBar;
