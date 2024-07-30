import React from "react";
//import Account from "../Account/Account";
//buyproduct
import CardItem from "../CardItem/CardItem";
import CardProduct from "../CardProduct/CardProduct";
//confirmbuyproduct
//Descriptionbox
import BasicCard from "../DescriptionProduct/descriptionProduct";
//DescriptionOrder
//footer
import SignIn from "../login";
//import NavBar from "../NavBar/NavBar";
//productdisplay
import { ProductImages } from "../ProductImages";
//produtName
import HoverRating from "../productStars/productStars";
import ProductComponent from "../productTotal/productTotal";
import { Route, Routes } from "react-router-dom";

function Main() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/components" element={<HoverRating />} />
      <Route path="/components" element={<ProductImages />} />
      <Route path="/component2" element={<CardItem />} />
    </Routes>
  );
}

export default Main;
/*
<Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/account" component={Account} />
            <Route path="/carditem" component={CardItem} />
          </Switch>
        </div>
      </Router> */
