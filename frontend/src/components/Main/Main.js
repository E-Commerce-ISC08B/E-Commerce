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

// Main components
import Home from "../views";

function Main() {
  const prods = [
    {
      imageURL: 'https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?fit=960%2C720',
      name: 'Producto 1',
      description: 'tilin'
    },
    {
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdI5h6LZxis-xvMA-mioIFBUdBqrofceIn1A&s',
      name: 'Producto 2',
      description: 'chupapi'
    },
    {
      imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqrIaOoNLKb_PGfc_nS4s3IVBC8x7x9nYOqQ&s',
      name: 'Producto 3',
      description: 'munianio'
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home prods={prods} />} />
      <Route path="/product" element={<Home prods={prods} />} />
    </Routes>
  );
}

export default Main;
