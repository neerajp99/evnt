import {
  CREATE_EVENT,
  GET_EVENT_DETAILS,
  GET_ERRORS,
  LOAD_EVENT
} from "./types";
import axios from "axios";

// Action to create an event
export const createEvent = (data, history) => dispatch => {
  axios
    .post("/api/events", data)
    .then(response => {
      console.log(response);
      history.push("/dashboard");
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    });
};

// Action to fetch event details
export const getEvent = () => dispatch => {
  dispatch(setEventLoading());
  axios
    .get("/api/events")
    .then(response => {
      dispatch({
        type: GET_EVENT_DETAILS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({
        type: GET_EVENT_DETAILS,
        payload: {}
      });
    });
};

// Profile Loading
export const setEventLoading = () => {
  return {
    type: LOAD_EVENT
  };
};
