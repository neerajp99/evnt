import { GET_CURRENT_PROFILE, LOAD_PROFILE } from "../actions/types";

// Initialising inital state of profile as null
const initialState = {
  profile: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case LOAD_PROFILE:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
