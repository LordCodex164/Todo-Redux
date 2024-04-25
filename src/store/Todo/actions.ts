import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, UNTOGGLE_TODO } from "./constants"


export interface todosState {
    id: string;
    taskName: string;
    desc: string;
    dueDate: string;
    status: string
}

const addTodo = (data: todosState) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

const editTodo = (id:number, data: todosState) => {

  

    return {
        type: ADD_TODO,
        payload: {
            id,
            data
        }
    }
}

const deleteTodo = (id:string) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

const toggleTodo = (i: number) => {
    return {
        type: TOGGLE_TODO,
        payload: i
    }
}

const unToggleTodo = (i: number) => {
    return {
        type: UNTOGGLE_TODO,
        payload: i
    }
}

export {
    addTodo,
    editTodo,
    deleteTodo,
    toggleTodo,
    unToggleTodo
}