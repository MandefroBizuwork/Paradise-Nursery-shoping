import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './MyCartSlice';
   

export const store = configureStore({
    reducer: {
        myCart: cartReducer,
    },
 })
