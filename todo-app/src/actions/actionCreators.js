import * as actions from '../actions/actionTypes'

export function loadTodos(todos) {
  return { type: actions.LOAD_TODOS, todos: todos }
}

export function addTodo(id, title) {
  return { type: actions.ADD_TODO, id: id, title: title }
}

export function toggleTodo(index) {
  return { type: actions.TOGGLE_TODO, index: index }
}

export function deleteTodo(index) {
  return { type: actions.DELETE_TODO, index: index }
}

//////////////////////////////////////

export function authenticated() {
  return { type: actions.AUTHENTICATED }
}

export function unauthenticated(error) {
  return { type: actions.UnAUTHENTICATED, error: error }
}