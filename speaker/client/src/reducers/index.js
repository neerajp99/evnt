import {combineReducers} from "redux"
import authReducer from "./authReducer";
import profileReducer from "./profileReducer";
import myTalksReducer from "./myTalksReducer"
import cfpReducer from "./cfpReducer.js"

export default combineReducers({
    auth : authReducer,
    profile: profileReducer,
    mytalks: myTalksReducer,
    cfpDetails: cfpReducer
})
