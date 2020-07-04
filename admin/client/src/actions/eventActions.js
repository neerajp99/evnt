import { CREATE_EVENT, GET_EVENT_DETAILS, GET_ERRORS } from "./types";
import axios from "axios";

// Action to create an event
export const createEvent = (data, history) => dispatch => {
  axios
    .post("/api/events", data)
    .then(response => {
      history.push("/dashboard");
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    });
};
