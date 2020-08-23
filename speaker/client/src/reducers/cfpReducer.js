import { GET_CFP_DETAILS, LOADING_CFP } from "../actions/types";

// Initialising the state object for cfp content
const initialState = {
  cfpDetails: null,
  cfpLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CFP_DETAILS:
      return {
        ...state,
        cfpDetails: action.payload,
        cfpLoading: false
      };
    case LOADING_CFP:
      return {
        ...state,
        cfpLoading: true
      };
    default:
      return state;
  }
}
