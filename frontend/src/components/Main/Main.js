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
import SignIn from "../login/Login";
//import NavBar from "../NavBar/NavBar";
//productdisplay
import { ProductImages } from "../ProductImages";
//produtName
import HoverRating from "../productStars/productStars";
import ProductComponent from "../productTotal/productTotal";

function Main() {
  return <ProductComponent></ProductComponent>;
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
