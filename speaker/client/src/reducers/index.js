import {combineReducers} from "redux"
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import myTalksReducer from "./myTalksReducer"

export default combineReducers({
    auth : authReducer,
    profile: profileReducer,
    mytalks: myTalksReducer
})
