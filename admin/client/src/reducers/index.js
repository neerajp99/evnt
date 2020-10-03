import { combineReducers } from "redux";
import authReducer from "./authReducer";
import profileReducer from "./profileRedcuer";
import eventReducer from "./eventReducer";
import dashboardReducer from "./dashboardReducer"

export default combineReducers({
  auth: authReducer,
  profile: profileReducer,
  event: eventReducer,
  dashboard: dashboardReducer,
});
