import React from "react";
import "./App.scss";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/authentication/Login"

function App() {
  return (
    <Router>
    <div className="App">
        <Route exact path = "/login" component = {Login}/>
    </div>
    </Router>
  );
}

export default App;
