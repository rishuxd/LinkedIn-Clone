import { createStore, applyMiddlware } from "redux";
import rootReducer from "../Reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(rootReducer, applyMiddlware(thunkMiddleware));

export default store;
