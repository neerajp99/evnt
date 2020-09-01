import {
  LOADING_DASHBOARD,
  GET_MY_TALKS,
  GET_ERRORS,
  GET_CURRENT_PROFILE
} from "../actions/types.js";

// Initialising the intitial state
const initialState = {
  dashboardLoading: false,
  talkDetails: null,
  profile: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DASHBOARD:
      return {
        ...state,
        dashboardLoading: true
      };
    case GET_MY_TALKS:
      return {
        ...state,
        talkDetails: action.payload
      };
    case GET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.payload,
        dashboardLoading: false
      };
    default:
      return state;
  }
}
