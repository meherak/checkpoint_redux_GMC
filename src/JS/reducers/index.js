import { combineReducers } from "redux";
import taskReducer from "./taskReducer";
import checkReducer from "./checkReducer";

const rootReducer = combineReducers({ taskReducer, checkReducer });
export default rootReducer;
