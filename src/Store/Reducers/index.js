import { combineReducers } from 'redux'
import AuthReducer from "./Auth-Reducer";
import MainReducer from "./Main-Reducer";

export default combineReducers({
    AuthReducer,
    MainReducer
})

