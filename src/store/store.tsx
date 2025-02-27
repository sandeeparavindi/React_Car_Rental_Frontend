import {configureStore} from "@reduxjs/toolkit";
import customerReducer from "../reducers/CustomerReducer";
import carReducer from "../reducers/CarReducer.ts";

export const store = configureStore({
    reducer :{
        customer : customerReducer,
        car : carReducer,
    }
})

export type AppDispatch = typeof store.dispatch;