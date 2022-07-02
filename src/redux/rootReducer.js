import { combineReducers } from "@reduxjs/toolkit";
import shopReducer from './shopping/shopping-reducer'

export const reducer = combineReducers({
shop:shopReducer,
});