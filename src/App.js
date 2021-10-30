import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Destination from "./components/Destination/Destination";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

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

            <Route exact path="/destination">
              <Destination></Destination>
            </Route>

            <PrivateRoute exact path="/blog">
              <Blog></Blog>
            </PrivateRoute>

            <Route exact path="/contact">
              <Contact></Contact>
            </Route>

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
