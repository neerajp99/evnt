import {FETCH_TALKS, GET_ERRORS, LOADING_DASHBOARD} from "./types"
import axios from 'axios'

// Fetch talks action 
export const fetchTalks = () => dispatch => {
    dispatch(setDashboardLoading())

    axios.get('/api/dashboard/allTalks')
        .then(response => {
            dispatch({
                type: FETCH_TALKS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data 
            })
        })
}

// Loading dashboard 
export const setDashboardLoading = () => {
    return {
        type: LOADING_DASHBOARD
    }
} 