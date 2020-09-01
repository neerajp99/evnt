import axios from "axios";
import {
  LOADING_DASHBOARD,
  GET_MY_TALKS,
  GET_ERRORS,
  GET_CURRENT_PROFILE
} from "./types.js";

export const getDashboard = () => dispatch => {
  dispatch(setDashboardLoading());
  // Fetch talks
  axios
    .get("/api/talk")
    .then(response => {
      dispatch({
        type: GET_MY_TALKS,
        payload: response.data.talk
      });
    })
    .catch(error => {
      dispatch({
        type: GET_MY_TALKS,
        payload: {}
      });
    });

  // Fetch profile
  axios
    .get("/api/speakerProfile/")
    .then(res => {
      dispatch({
        type: GET_CURRENT_PROFILE,
        payload: res.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_CURRENT_PROFILE,
        payload: {}
      });
    });
};

// Dashboard Loading
export const setDashboardLoading = () => {
  return {
    type: LOADING_DASHBOARD
  };
};
