import React from "react";
import "./App.scss";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Dashboard from "./components/dashboard/dashboard";
import Talk from "./components/talk/Talk";
import Profile from "./components/profile/Profile";
import MyTalk from "./components/myTalks/MyTalk.js";
import Cfp from "./components/cfp/Cfp.js";
//Making the global store available to all the components
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./util/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentSpeaker, logoutSpeaker } from "./actions/authActions";
import ProtectedRoute from "./components/commons/ProtectedRoute";
import Swal from "sweetalert2";

//Checking if user is logged in
const token = localStorage.getItem("token");
if (token) {
  //Set token in authorization Header for all requests
  setAuthToken(token);

  //Decoding the jwt token to get user info
  const decodedToken = jwt_decode(token);

  //Dispatching the token for seeting user as authenticated
  store.dispatch(setCurrentSpeaker(decodedToken));

  //Checking for the expired token
  const currentTime = new Date() / 1000;
  if (decodedToken.exp < currentTime) {
    //Logout speaker
    store.dispatch(logoutSpeaker({}));

    //Creating an alert for speaker user to know
    Swal.fire({
      title: "Session Expired",
      text: "Please login again",
      icon: "info",
      confirmButtonText: "Got it"
    });
    window.location.href = "/login";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>

        <Switch>
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Switch>
          <ProtectedRoute exact path="/talk" component={Talk} />
        </Switch>
        <Switch>
          <ProtectedRoute exact path="/profile" component={Profile} />
        </Switch>
        <Switch>
          <ProtectedRoute exact path="/mytalks" component={MyTalk} />
        </Switch>
        <Switch>
          <ProtectedRoute exact path="/cfp" component={Cfp} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
