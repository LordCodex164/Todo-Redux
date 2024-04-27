import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers";
import { todosState } from "./Todo/actions";


export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

  

export const saveToLocalStorage = (state: any) => {
  try {
    const serialisedState = localStorage.setItem("todos", JSON.stringify(state))   
    console.log("state saved successfully", serialisedState)
  } catch (error) {
    console.log(error)
  }
}

export const loadFromLocalStorage = () => {
    try {
      const savedState = localStorage.getItem("todos")
      if(!savedState) return []
      return JSON.parse(savedState as string)
    } catch (error:any) {
      throw new Error(error?.message)
    }
}

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
);

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;