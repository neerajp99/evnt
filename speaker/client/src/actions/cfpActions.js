import {GET_CFP_DETAILS, LOADING_CFP} from "./types"
import axios from 'axios'

export const getCfpDetails = () => dispatch => {
    dispatch(setCfpLoading());
    axios
    .get('/api/events')
    .then(response => {
        dispatch({
            type: GET_CFP_DETAILS,
            payload: response.data
        })
    })
    .catch(error => {
      dispatch({
        type:GET_CFP_DETAILS,
        payload: {}
      });
    });
}

// CFP content loading
export const setCfpLoading = () => {
  return {
    type: LOADING_CFP
  };
};
