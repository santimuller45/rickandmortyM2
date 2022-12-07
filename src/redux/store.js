import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerFav from "./reducer";

export const store = createStore(reducerFav,applyMiddleware(thunk));
