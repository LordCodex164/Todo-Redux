import { ADD_TODO, DELETE_TODO } from "./constants"


interface AddTodos {
    title: string;
    desc: string;
    priority: string;
    date: Date;
    status: string
}

const addTodo = (data: AddTodos) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

const editTodo = () => {
    return {
        type: ADD_TODO,
        
    }
}

const deleteTodo = () => {
    return {
        type: DELETE_TODO
    }
}

export {
    addTodo,
    editTodo,
    deleteTodo
}