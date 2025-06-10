import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducer";

const store = configureStore({
    reducer: tasksReducer,
})

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch

export default store