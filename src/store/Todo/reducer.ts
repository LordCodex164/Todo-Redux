

const initialState = {
    todos: [],
}

interface Action {
    type: string;
    payload: any;
}

const todos = (state=initialState, action: Action) => {
   switch (action.type) {
    case "":
        
        break;
   
    default:
        return state
        break;
   }
}

export default todos