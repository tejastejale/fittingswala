import { Route, Routes } from "react-router-dom"
import './App.css';
import Nav from './Components/Nav';
import { Users } from "./Screens/Users";
import { Home } from "./Screens/Home";
import { Customers } from "./Screens/Customer";
import React, { useState } from 'react'
import Login from "./Screens/Login";
import Products from "./Screens/Products";
import ProductDetails from "./Screens/Prodetails";
import { AnimatePresence } from "framer-motion";

function App(router) {
  return (<AnimatePresence>
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" key={router.pathname} element={<Home />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/products" element={<Products />}></Route>

        <Route path="/products/:productId" component={<ProductDetails />}></Route>

        <Route path="/customers" element={<Customers />}></Route>
      </Routes>
    </div></AnimatePresence>
  );
}

export default App;
