import { combineReducers, createStore } from "redux";
import { eventReducer } from "../reducer/Reducer";

const reducer = combineReducers({
  events: eventReducer,
});
const initialState = {};

const store = createStore(reducer, initialState);

export default store;
