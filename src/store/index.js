import { combineReducers } from "redux";
import { registerReducer, loginReducer } from './auth/Reducers';


export default combineReducers({ registerReducer, loginReducer })