import {
  SET_USER_PROFILE,
  GET_ERRORS,
  GET_CURRENT_PROFILE,
  LOAD_PROFILE
} from "./types";
import axios from "axios";
import Swal from "sweetalert2";

// Create profile
export const createProfile = (data, history) => dispatch => {
  axios
    .post("/api/speakerProfile/", data)
    .then(response => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your profile is saved!",
        showConfirmButton: false,
        timer: 1500
      });
      history.push("/dashboard");
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    });
};

// Get Current Profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/speakerProfile/")
    .then(res => {
      dispatch({
        type: GET_CURRENT_PROFILE,
        payload: res.data,
      });
    })
    .catch(error => {
      dispatch({
        type: GET_CURRENT_PROFILE,
        payload: {}
      });
    });
};

// Profile Loading
export const setProfileLoading = () => {
  return {
    type: LOAD_PROFILE
  };
};