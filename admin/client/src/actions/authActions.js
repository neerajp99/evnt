import { SET_CURRENT_USER, GET_ERRORS } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Resgiter user
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/ownerUsers/register", userData)
    .then(response => {
      history.push("/login");
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    });
};

// Login User
export const loginUser = (userData, history) => dispatch => {
  axios
    .post("/api/ownerUsers/login", userData)
    .then(response => {
      // Saving the token to local storage
      const { token } = response.data;
      localStorage.setItem("adminJWT", token);
      // Set token to the authorization header
      setAuthToken(token);
      // Decrypt the access token to get user data
      const decodedToken = jwt_decode(token);
      // Dispatch the decoded token
      dispatch(setCurrentAdmin(decodedToken));
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    });
};

// Method to set logged in user
export const setCurrentAdmin = decodedToken => {
  return {
    type: SET_CURRENT_USER,
    payload: decodedToken
  };
};

// Logout Admin
export const logOutAdmin = () => dispatch => {
  // Remove the tokens from the localstorage
  localStorage.removeItem("adminJWT");
  // Delete the authorization header
  setAuthToken(false);
  // Passing empty array to setCurrentAdmin
  // Set isAuthenticated to false
  dispatch(setCurrentAdmin({}));
};
