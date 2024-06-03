import React, { useState } from 'react';
import { FaStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './LeftSide.css'; // Import the CSS file

const LeftBar = () => {
  const [showMoreSellers, setShowMoreSellers] = useState(false);

  return (
    <div className="leftside-filter">
      {/* Delivery Day Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Delivery Day</h2>
        <label className="filter-checkbox">
          <input type="checkbox" />
          Get it in 2 Days
        </label>
        <label className="filter-checkbox">
          <input type="checkbox" />
          Get it by Tomorrow
        </label>
      </div>

      <hr />

      {/* Category Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Category</h2>
        <ul className="filter-list">
          <li>Greeting Cards</li>
          <li>Packaging Tape</li>
          <li>Poly & Plastic Packaging Bags</li>
          <li>Men's Flip-Flops & Slippers</li>
          <li>Gift Cards & Gift Vouchers</li>
          <li>Women's Flip-Flops & Slippers</li>
          <li>Men's Wallets</li>
          <li>Electronics</li>
        </ul>
      </div>

      <hr />

      {/* Customer Review Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Customer Review</h2>
        <div className="star-rating">
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
          <FaStar className="star" />
        </div>
      </div>

      <hr />

      {/* Brand Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Brand</h2>
        <label className="filter-checkbox">
          <input type="checkbox" />
          D-fix
        </label>
        <label className="filter-checkbox">
          <input type="checkbox" />
          VROKLA
        </label>
        <label className="filter-checkbox">
          <input type="checkbox" />
          AIPL
        </label>
        <label className="filter-checkbox">
          <input type="checkbox" />
          JPPL
        </label>
        <label className="filter-checkbox">
          <input type="checkbox" />
          NAUGHTY ANGELS
        </label>
        <label className="filter-checkbox">
          <input type="checkbox" />
          PRAGATI SYSTEMS
        </label>
      </div>

      <hr />

      {/* Price Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Price</h2>
        <p>135 - 6,800+</p>
        <input type="range" min="135" max="6800" className="price-range" />
      </div>

      <hr />

      {/* Deals & Discounts Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Deals & Discounts</h2>
        <ul className="filter-list">
          <li>All Discounts</li>
          <li>Today's Deals</li>
        </ul>
      </div>

      <hr />

      {/* Office Products Brands Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Office Products Brands</h2>
        <label className="filter-checkbox">
          <input type="checkbox" />
          Made For Amazon
        </label>
        <label className="filter-checkbox">
          <input type="checkbox" />
          Top Brands
        </label>
      </div>

      <hr />

      {/* Pay on Delivery Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Pay on Delivery</h2>
        <label className="filter-checkbox">
          <input type="checkbox" />
          Eligible for Pay on Delivery
        </label>
      </div>

      <hr />

      {/* Number of Sheets Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Number of Sheets</h2>
        <label className="filter-checkbox">
          <input type="checkbox" />
          Up to 149
        </label>
      </div>

      <hr />

      {/* New Arrivals Section */}
      <div className="filter-section">
        <h2 className="filter-heading">New Arrivals</h2>
        <ul className="filter-list">
          <li>Last 30 days</li>
          <li>Last 90 days</li>
        </ul>
      </div>

      <hr />

      {/* Discount Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Discount</h2>
        <ul className="filter-list">
          <li>10% off or more</li>
          <li>25% off or more</li>
          <li>35% off or more</li>
          <li>50% off or more</li>
          <li>60% off or more</li>
          <li>70% off or more</li>
        </ul>
      </div>

      <hr />

      {/* Seller Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Seller</h2>
        <label className="filter-checkbox">
          <input type="checkbox" />
          PackMax India
        </label>
        <label className="filter-checkbox">
          <input type="checkbox" />
          DFix
        </label>
        {showMoreSellers && (
          <>
            <label className="filter-checkbox">
              <input type="checkbox" />
              The SMART STORE CREATIONS
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" />
              PREZOTCH
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" />
              New Webshoppers
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" />
              Clicktech Retail
            </label>
            <label className="filter-checkbox">
              <input type="checkbox" />
              PROCKAGE BOX Co.
            </label>
          </>
        )}
        <button 
          className="see-more-button"
          onClick={() => setShowMoreSellers(!showMoreSellers)}
        >
          {showMoreSellers ? 'See Less' : 'See More'} {showMoreSellers ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      <hr />

      {/* Availability Section */}
      <div className="filter-section">
        <h2 className="filter-heading">Availability</h2>
        <label className="filter-checkbox">
          <input type="checkbox" />
          Include Out of Stock
        </label>
      </div>
    </div>
  );
};

export default LeftBar;
