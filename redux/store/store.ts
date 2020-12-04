import { createStore } from "redux";
import combineReducers from '../reducers/reduer'
export const store = createStore(combineReducers)