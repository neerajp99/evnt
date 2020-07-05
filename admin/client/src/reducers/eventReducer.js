import { GET_EVENT_DETAILS, LOAD_EVENT } from "../actions/types";

const initialState = {
  event: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EVENT_DETAILS:
      return {
        ...state,
        event: action.payload,
        loading: false
      };
    case LOAD_EVENT:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
