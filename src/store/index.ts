import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers";


export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const initialState = {};

const store = createStore(
  rootReducer,
  initialState,
);


export default store;