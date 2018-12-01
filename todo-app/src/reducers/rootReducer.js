import { combineReducers } from 'redux'
import todosReducer from './todosReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    todos: todosReducer,
    auth: authReducer
});

export default rootReducer;