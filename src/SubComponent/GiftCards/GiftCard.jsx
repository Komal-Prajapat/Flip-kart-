import React from 'react';
import Navbar2 from '../../component/navbar2/Navbar2';
import RightBar from '../../component/home/rightSide/RightBar';
import './giftcard.css'; // Import the CSS file

const GiftCard = () => {
  return (
    <div>
      <Navbar2 />
      <div className="giftcard">
        <i>
          <h2>The Gift Cards Store | A gift of choice</h2>
        </i>
        <p>
          Celebrate every occasion with your loved ones in a special way. Amazon India brings to you amazing email gift cards, gift boxes, greeting cards and other easy gifting ideas for every occasion such as anniversaries, birthdays, weddings, festivals, and more.
        </p>
      </div>
      <RightBar />
    </div>
  );
};

export default GiftCard;
