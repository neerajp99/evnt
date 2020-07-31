import {CREATE_TALK, GET_ERRORS} from './types.js'
import axios from 'axios'

// Creating a talk 
export const createTalk = (talkData, history) => dispatch => {
	console.log('yahaa')
	axios.post("/api/talk", talkData).then(response => {
		history.push('/dashboard')
	}).catch(error => {
		dispatch({
			type: GET_ERRORS,
			payload: error.response.data
		})
	})
}