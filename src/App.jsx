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
        </Routes>
        <FooterCom></FooterCom>
      </Router>
    </>
  );
};

export default App;
