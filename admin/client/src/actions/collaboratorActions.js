import axios from 'axios'
import { CREATE_COLLABORATOR, GET_ERRORS } from "./types"

// Add collaborators 
export const addCollaborators = (content) => dispatch => {
    // Loop over for N collaborators 
    for (let i = 0 ; i < content.length ; i++) {
        axios
        .post("/api/collaborator/add", content[i])
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
}
