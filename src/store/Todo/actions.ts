import { ADD_TODO, DELETE_TODO } from "./constants"


interface todos {
    id: string;
    taskName: string;
    desc: string;
    dueDate: Date;
    status: string
}

const addTodo = (data: todos) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}

const editTodo = (id:number, data: todos) => {

    const updatedUser = {
        id,
        data
    }

    return {
        type: ADD_TODO,
        payload: updatedUser
    }
}

const deleteTodo = (id:string) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export {
    addTodo,
    editTodo,
    deleteTodo
}