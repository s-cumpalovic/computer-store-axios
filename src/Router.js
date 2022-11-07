import React from "react";
import { Switch, Route } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";
import SingleCustomer from "./pages/SingleCustomer";
import Posts from "./pages/AppPosts";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/customers">
        <AppCustomers />
      </Route>
      <Route path="/customers/:customerId">
        <SingleCustomer />
      </Route>
      <Route path="/products">
        <AppProducts />
      </Route>
      <Route path="/posts">
        <Posts />
      </Route>
    </Switch>
  );
}
