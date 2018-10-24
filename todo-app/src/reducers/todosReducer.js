import { LOAD_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes'

function todosReducer(state = [], action) 
{
    switch(action.type) {
        case LOAD_TODOS:
            return action.todos;

        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    done: false
                }
            ];

        case TOGGLE_TODO:
            return state.map(todo => (todo.id === action.index) 
                  ? {...todo, done: !todo.done}
                  : todo
            );

        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.index);

        default:
            return state;    
    }
}

export default todosReducer