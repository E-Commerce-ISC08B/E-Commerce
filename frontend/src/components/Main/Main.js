import React from "react";
import Account from "../Account/Account";
import CardItem from "../CardItem/CardItem";
import CardProduct from "../CardProduct/CardProduct";

import { ProductImages } from "../ProductImages";

function Main() {
  return <CardProduct></CardProduct>;
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
