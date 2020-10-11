import axios from 'axios'
import { CREATE_COLLABORATOR, GET_ERRORS } from "./types"

// Add collaborators 
export const addCollaborators = (content) => dispatch => {
    axios
    .post("/api/collaborator/add", content)
    .then(response => {
        console.log('Response received: ', response)
    })
    .catch(error => {
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data 
        })
    })
}
