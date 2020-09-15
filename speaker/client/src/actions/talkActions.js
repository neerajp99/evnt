import { CREATE_TALK, GET_ERRORS, LOADING_TALKS } from "./types.js";
import axios from "axios";

// Creating a talk
export const createTalk = (talkData, history) => dispatch => {
  axios
    .post("/api/talk", talkData)
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

// Update the current talk
export const updateCurrentTalk = (data, id,  history) => dispatch => {
  axios 
    .post(`/api/talk/update/${id}`, data)
    .then(response => {
      history.push("/dashboard")
    })
    .catch(error => {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      })
    })
}
