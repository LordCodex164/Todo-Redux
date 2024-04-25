import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./constants";

const initialState = {
    todos: [],
}

interface Action {
    type: string;
    payload: any;
}

const todos = (state=initialState, action: Action) => {
    console.log(action.payload)
   switch (action.type) {
    case ADD_TODO:
      return {...state, todos: [...state.todos,  action.payload] } 
    default:
        return state
   }
}

export default todos