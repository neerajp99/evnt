import axios from 'axios'
import {FETCH_CFP, GET_ERRORS} from "./types"

// Fetch all, shortlisted and final talks refID's
export const fetchCfp = () => dispatch => {
    axios
    .get("/api/cfp/")
    .then(cfp => {
        console.log("CFP Response", cfp)
        dispatch({
            type: FETCH_CFP,
            payload: cfp
        })
    })
    .catch(error => {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    })
}

// Update talks lists 
export const updateCfp = (data) => dispatch => {
    axios   
    .post('/api/cfp/updateCfp', data)
    .then(cfp => {
        console.log('CFP Response: ', cfp)
        dispatch({
            type: FETCH_CFP,
            payload: cfp
        })
    })
    .catch(error => {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    })
}



