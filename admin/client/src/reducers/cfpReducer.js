import {GET_ERRORS, FETCH_CFP} from "../actions/types";

const initialState = {
    cfp: {},
    loading: false 
}

export default function(state = initialState, action) {
    switch(action.type){
        case FETCH_CFP:
            return {
                ...state,
                cfp: action.payload.data,
                loading: false 
            }

        default:
            return state
    }
}