import React, { Component } from 'react'
import { axios } from "../utils/Axios";
import { connect } from 'react-redux'
import { loadTodos, addTodo, toggleTodo, deleteTodo } from '../actions/actionCreators'
import InputBox from '../components/InputBox'
import TodoList from '../components/TodoList'

class Todos extends Component {

	getAuthToken() {
		var config = {
			headers: {}
		}
		config['headers']['Authorization'] = 'Bearer ' + localStorage.getItem('jwt');
		return config;
	}

	getTodos() {
		var config = this.getAuthToken();

		axios.get('/api/v1/todos', config)
		.then(response => {
			this.props.dispatch(loadTodos(response.data));
		})
		.catch(error => console.log(error))
	}

	createTodo = (title) => {
		var config = this.getAuthToken();

		if (!(title === '')) {
			axios.post('/api/v1/todos', {todo: {title: title}}, config)
			.then(response => {
				this.props.dispatch(addTodo(response.data.id, response.data.title))
			})
			.catch(error => console.log(error))
		}
	}

	updateTodo = (params) => {
		var config = this.getAuthToken();

		axios.put(`/api/v1/todos/${params.id}`, {todo: {done: params.checked}}, config)
		.then(response => {
			this.props.dispatch(toggleTodo(params.id))
		})
		.catch(error => console.log(error))
	}

	deleteTodo = (id) => {
		var config = this.getAuthToken();

		axios.delete(`/api/v1/todos/${id}`, config)
		.then(response => {
			this.props.dispatch(deleteTodo(id))
		})
		.catch(error => console.log(error))
	}

	componentDidMount() {
		this.getTodos();
	}

	render() {
		return (
			<div className="container">
				<InputBox createTodo={this.createTodo} />
				<TodoList todos={this.props.todos}
					updateTodo={this.updateTodo}
					deleteTodo={this.deleteTodo} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}

export default connect(mapStateToProps)(Todos)
