import {combineReducers} from "redux"
import todos from "./Todo/reducer"


const rootReducer = combineReducers({
    todos
})

export default rootReducer