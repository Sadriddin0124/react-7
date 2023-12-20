import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./Components/Homework1/Auth";
import Cars from "./Components/Homework1/Cars";
import SingleCar from "./Components/Homework1/SingleCar";
import Homeworks from "./Components/Homeworks";
import Products from "./Components/Homework2/products";
import Productid from "./Components/Homework2/productid";
import Menu from "./Components/Homework2/menu";
import Cabinet from "./Components/Homework2/Cabinet";
import Dashboard from "./Components/Homework2/Dashboard";
import Details from "./Components/Homework2/Details";
import Balance from "./Components/Homework2/Balance";
import Settings from "./Components/Homework2/Settings";
import Homework3 from "./Components/Homework3/Homework3";

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Homeworks/>}></Route>
              <Route path="auth" element={<Auth/>} />
              <Route path="cars" element={<Cars />} />
              <Route path="single_car/:id" element={<SingleCar />} />
              <Route path="products" element={<Products/>}></Route>
              <Route path="product/:id" element={<Productid/>}></Route>
              <Route path="menu" element={<Menu/>}></Route>
              <Route path="cabinet" element={<Cabinet/>}></Route>
              <Route path="dashboard" element={<Dashboard/>}></Route>
              <Route path="settings" element={<Settings/>}></Route>
              <Route path="details/:id" element={<Details/>}></Route>
              <Route path="balance" element={<Balance/>}></Route>
              <Route path="homework3" element={<Homework3/>}></Route>
            </Routes>
        </div>
      </div>
    );
  }
}
