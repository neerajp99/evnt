import React from "react";
import GlobalFonts from "./styles/fonts/fonts"
import "./App.scss";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/authentication/Login"
import Register from "./components/authentication/Register"

function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/register" component = {Register} />
    </div>
    </Router>
  );
}

export default App;
