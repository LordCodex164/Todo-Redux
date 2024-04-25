import { todosState } from "./actions";
import { ADD_TODO, EDIT_TODO, DELETE_TODO, TOGGLE_TODO, UNTOGGLE_TODO } from "./constants";


export interface ReducersState{
    todos: todosState[]
}

const initialState = {
    todos: [],
}

interface Action {
    type: string;
    payload: any;
}

const todos = (state=initialState, action: Action) => {
   switch (action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos,  action.payload] } 
    case EDIT_TODO: 
      return {...state, todos: [...state.todos.map((item:todosState, i) => item.id === action.payload.id ? action.payload.data : item)]}
    case TOGGLE_TODO:
      return {...state, todos: [...state.todos.map((item:todosState, i) => i === action.payload ? {...item, status: "Completed"}: item)]}
      case UNTOGGLE_TODO:
        return {...state, todos: [...state.todos.map((item:todosState, i) => i === action.payload ? {...item, status: "not started"}: item)]}
      default:
        return state
   }
}

export default todos