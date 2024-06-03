import React from 'react';
import './cart.css'; 

const Cart = ({ cartItems = [] }) => { 
  return (
    <div className="cart">
      <h2 className="cart-heading">Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <h4 className="cart-item-price">${item.price}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
