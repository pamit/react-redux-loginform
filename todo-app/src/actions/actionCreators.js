import { LOAD_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/actionTypes'

export function loadTodos(todos) {
  return { type: LOAD_TODOS, todos: todos }
}

export function addTodo(id, title) {
  return { type: ADD_TODO, id: id, title: title }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index: index }
}

export function deleteTodo(index) {
  return { type: DELETE_TODO, index: index }
}