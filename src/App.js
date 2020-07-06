import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import Enter from "./component/referEvent";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Home from "./component/home"
import Oportunities from "./component/oportunies";
import Volunteer from "./component/volunteer"
import ResetPassword from "./component/Reset"
import NewPassword from "./component/NewPassword"
import Profile from "./component/profile"


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>

      <Route exact path="/refer">
        <Enter />
      </Route>
      <Route exact path="/oportunities">
        <Oportunities />
      </Route>
      <Route exact path="/volunteer">
        <Volunteer />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/reset">
        <ResetPassword />
      </Route>
      <Route  path="/reset/:token">
        <NewPassword />
      </Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
