import React from "react";
//import Account from "../Account/Account";
//buyproduct
import CardItem from "../CardItem/CardItem";
//confirmbuyproduct
//Descriptionbox
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
import Product from "../views/product";
import Payment from "../views/payment";

// Main components
import Home from "../views";

function Main() {
  const products = [
    {
      imageURL: "https://via.placeholder.com/150",
      name: "Producto 1",
      description: "Descripción del Producto 1",
    },
    {
      imageURL: "https://via.placeholder.com/150",
      name: "Producto 2",
      description: "Descripción del Producto 2",
    },
    {
      imageURL: "https://via.placeholder.com/150",
      name: "Producto 3",
      description: "Descripción del Producto 3",
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<Payment />} />
      <Route path="/home" element={<Home prods={products} />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default Main;