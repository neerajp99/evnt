import { GET_MY_TALKS, GET_ERRORS, LOADING_TALKS } from "./types";
import axios from "axios";

export const getMyTalks = () => dispatch => {
  dispatch(setTalksLoading());
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
};

// My talks loading
export const setTalksLoading = () => {
  return {
    type: LOADING_TALKS
  };
};
