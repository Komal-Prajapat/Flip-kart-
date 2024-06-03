import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Register from "./component/register/Register";
import Login from "./component/Login/Login";
import Navbarcom from "./component/Navbar/Navbar";

import MainPage from "./component/home/mainPage/MainPage";

import Cart from "./component/addtocard/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Navbarcom></Navbarcom>
        <Routes>
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Routes>
        {/* <Footer></Footer> */}
      </Router>
    </>
  );
};

export default App;
