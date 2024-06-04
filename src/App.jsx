import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./component/register/Register";
import Login from "./component/Login/Login";
import Navbarcom from "./component/Navbar/Navbar";
import MainPage from "./component/home/mainPage/MainPage";
import Cart from "./component/addtocard/Cart";
import SignOut from "./component/logout/SignOut";
import FooterCom from "./component/footer/FooterCom";
import Sidebarcom from "./component/sidebar/Sidebar";
import Sell from "./SubComponent/sell/Sell";
import GiftCard from "./SubComponent/GiftCards/GiftCard";
import Pay from "./SubComponent/pay/Pay";
import Coupons from "./SubComponent/Coupons/Coupons";
import GiftIdeas from "./SubComponent/GiftIdeas/GiftIdeas";
import ProductList from "./SubComponent/buyAgain/BuyAgain";
import Books from "./SubComponent/books/Books";

const App = () => {
  return (
    <>
      <Router>
        <Navbarcom></Navbarcom>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/profile" element={<Sidebarcom></Sidebarcom>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/signOut" element={<SignOut></SignOut>}></Route>
          <Route path="/sell" element={<Sell></Sell>}></Route>
          <Route path="/giftcard" element={<GiftCard></GiftCard>}></Route>
          <Route path="/pay" element={<Pay></Pay>}></Route>
          <Route path="/coupons" element={<Coupons></Coupons>}></Route>
          <Route path="/giftideas" element={<GiftIdeas></GiftIdeas>}></Route>
          <Route path="/buyAgain" element={<ProductList></ProductList>}></Route>
          <Route path="/books" element={<Books></Books>}></Route>
        </Routes>
        <FooterCom></FooterCom>
      </Router>
    </>
  );
};

export default App;
