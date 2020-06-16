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
      <Footer />
    </BrowserRouter>
  );
}

export default App;
