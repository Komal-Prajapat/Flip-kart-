import React from "react";
import "./giftidea.css";
// import { Navbar } from "react-bootstrap";
import Navbar2 from "../../component/navbar2/Navbar2";
const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://m.media-amazon.com/images/G/01/img19/events/valentinesday/circleimages/Valentines_circleimages_under_30._CB459024968_._SR80,80_.png",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://m.media-amazon.com/images/G/01/gcx/gf/IN/anniversary_1._CB464459415_._SR80,80_.png",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://m.media-amazon.com/images/G/01/gcx/gf/IN/wedding_1._CB464459414_._SR80,80_.png",
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://m.media-amazon.com/images/G/01/gcx/gf/IN/kids_2._CB464459412_._SR80,80_.png",
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://m.media-amazon.com/images/G/01/gcx/gf/IN/women_1._CB464459415_._SR80,80_.png",
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://m.media-amazon.com/images/G/01/gcx/gf/IN/housewarming_1._CB464459415_._SR80,80_.png",
  },
  {
    id: 7,
    name: "Product 7",
    image: "https://m.media-amazon.com/images/G/01/gcx/gf/IN/Local_Shops_Gift_Page._CB402895950_._SR80,80_.jpg",
  },
  {
    id: 8,
    name: "Product 8",
    image: "https://m.media-amazon.com/images/G/01/gcx/gf/categories/gc_gf_circle_300x300._CB409423739_._SR80,80_.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://m.media-amazon.com/images/G/01/gcx/gf/IN/women_1._CB464459415_._SR80,80_.png",
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://m.media-amazon.com/images/G/01/gcx/gf/IN/housewarming_1._CB464459415_._SR80,80_.png",
  },
  {id: 1,
  name: "Product 1",
  image: "https://m.media-amazon.com/images/G/01/img19/events/valentinesday/circleimages/Valentines_circleimages_under_30._CB459024968_._SR80,80_.png",
},
{
  id: 2,
  name: "Product 2",
  image: "https://m.media-amazon.com/images/G/01/gcx/gf/IN/anniversary_1._CB464459415_._SR80,80_.png",
},
];

const GiftIdeas = () => {
  return (
  <div className="
  ">
  <Navbar2></Navbar2>
      <div className="gift-ideas">
    
    <h2>Find the Perfect Gift</h2>
    <div className="gift-images-wrapper">
      <div className="gift-images">
        {products.map((product) => (
          <div key={product.id} className="gift-image">
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
    <h3>Gifts for Everyone</h3>
    <div className="button-group">
      <button>Private Deals</button>
      <button>Get It by Tomorrow</button>
    </div>
  </div>
  </div>
  );
};

export default GiftIdeas;
