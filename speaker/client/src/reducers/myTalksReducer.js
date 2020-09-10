import { GET_MY_TALKS, LOADING_TALKS, CURRENT_TALK, LOADING_CURRENT_TALK } from "../actions/types";

// Initialising the state object for my submitted talks
const initialState = {
  myTalks: null,
  myTalksloading: false,
  currentTalk: null,
  currentTalkLoading: false
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
    case LOADING_CURRENT_TALK:
      return {
        ...state,
        currentTalkLoading: true

      }
    case CURRENT_TALK:
      return {
        ...state,
        currentTalk: action.payload,
        currentTalkLoading: false
      }
    default:
      return state;
  }
}

