import { GET_CURRENT_USER, GET_ERRORS } from "./types";
import axios from "axios";

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
