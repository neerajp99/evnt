import { FETCH_TALKS, GET_ERRORS, LOADING_DASHBOARD } from "../actions/types";

const initialState = {
  allTalks: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_TALKS:
      return {
        ...state,
        allTalks: action.payload,
        loading: false
      };
    case LOADING_DASHBOARD:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
