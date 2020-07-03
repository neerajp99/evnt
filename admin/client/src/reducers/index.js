import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileRedcuer"

export default combineReducers({
  auth: authReducer,
  profile: profileReducer
});
