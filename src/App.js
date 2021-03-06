import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Destinations from "./components/Destinations/Destinations";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DestinationDetail from "./components/DestinationDetail/DestinationDetail";
import MyCart from "./components/MyCart/MyCart";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import AddNewDestination from "./components/AddNewDestination/AddNewDestination";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route exact path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/about">
              <About></About>
            </Route>

            <Route exact path="/destinations">
              <Destinations></Destinations>
            </Route>

            <PrivateRoute exact path="/destinations/:destinationId">
              <DestinationDetail></DestinationDetail>
            </PrivateRoute>

            <PrivateRoute exact path="/blog">
              <Blog></Blog>
            </PrivateRoute>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

            <PrivateRoute exact path="/mycart">
              <MyCart></MyCart>
            </PrivateRoute>

            <PrivateRoute exact path="/manageorders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute exact path="/addnewdestination">
              <AddNewDestination></AddNewDestination>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
