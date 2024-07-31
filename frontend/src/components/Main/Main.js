import React from "react";
//import Account from "../Account/Account";
//buyproduct
import CardItem from "../CardItem/CardItem";
import CardProduct from "../CardProduct/CardProduct";
//confirmbuyproduct
//Descriptionbox
import DescriptionProduct from "../DescriptionProduct/descriptionProduct"
import BasicCard from "../DescriptionProduct/descriptionProduct";
//DescriptionOrder
//footer
import { Login } from "../login";
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
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<DescriptionProduct />} />
    </Routes>
  );
}

export default Main;
