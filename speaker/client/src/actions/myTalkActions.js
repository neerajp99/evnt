import { GET_MY_TALKS, GET_ERRORS, LOADING_TALKS, CURRENT_TALK, LOADING_CURRENT_TALK } from "./types";
import axios from "axios";
import Swal from "sweetalert2";


// Get all talks
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

// Get Current talk
export const getCurrentTalk = (talkID) => dispatch => {
  dispatch(setCurrentTalkLoading())
  axios
    .get(`/api/talk/getTalk/${talkID}`)
    .then(talk => {
      dispatch({
        type: CURRENT_TALK,
        payload: talk.data.talk
      })
    })
    .catch(error => {
      dispatch({
        type: CURRENT_TALK,
        payload: {}
      })
    })
}

// Loading the current talk 
export const setCurrentTalkLoading = () => {
  return {
    type: LOADING_CURRENT_TALK
  }
}


// Delete talk 
export const deleteCurrentTalk = (talkID, history) => dispatch => {
  axios
  .delete(`/api/talk/deleteTalk/${talkID}`)
  .then(res => {
    Swal.fire(
          'Deleted!',
          'Your talk has been deleted permanently.',
          'success'
    )
    history.push("/dashboard");
  })
  .catch(error => {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    })
  })
}