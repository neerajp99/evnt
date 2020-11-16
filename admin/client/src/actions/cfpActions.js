import axios from 'axios'
import {FETCH_CFP, GET_ERRORS} from "./types"

// Fetch all, shortlisted and final talks refID's
export const fetchCfp = () => dispatch => {
    console.log('heheheh')
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



