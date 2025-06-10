import { combineReducers } from "@reduxjs/toolkit";
import tasksReducer from "./reducer";

const rootReducer = combineReducers({
    tasks: tasksReducer
})

export default rootReducer