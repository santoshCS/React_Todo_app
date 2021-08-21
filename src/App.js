import './App.css';
import React from "react";
import Header from "./layout/Header";
import Products from "./components/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
function App() {
  return (
    <div >
        <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/add">
            <AddProduct />
          </Route>
          <Route exact path="/edit/:id" render={props => <EditProduct />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
