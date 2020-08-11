import { GET_MY_TALKS, LOADING_TALKS } from "../actions/types";

// Initialising the state object for my submitted talks
const initialState = {
  myTalks: null,
  myTalksloading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MY_TALKS:
      return { 
        ...state,
        myTalks: action.payload,
        myTalksloading: false
      };
    case LOADING_TALKS:
      return {
        ...state,
        myTalksloading: true
      };
    default:
      return state;
  }
}
