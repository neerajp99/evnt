import React from "react";
import GlobalFonts from "./styles/fonts/fonts";
import "./App.scss";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
// Bring in Provider for making store accessible to nested components
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentAdmin, logOutAdmin } from "./actions/authActions";
import Swal from "sweetalert2";

// Check if a user is already logged in
if (localStorage.adminJWT) {
  // Set authorization token header
  setAuthToken(localStorage.adminJWT);
  // Decode the access tokens to get user information
  const decodedToken = jwt_decode(localStorage.adminJWT);
  // Dispatch the token for setting user as authenticated
  store.dispatch(setCurrentAdmin(decodedToken));
  // Checking for any expired token
  const currentTime = new Date() / 1000;
  if (decodedToken.exp < currentTime) {
    // Logout Admin user
    store.disapatch(logOutAdmin());

    // Create an alert for admin user to know
    Swal.fire({
      title: "Session Expired",
      text: "Please login again.",
      icon: "info",
      confirmButtonText: "Got it"
    });
    window.location.href = "/login";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
