import React, { Component } from 'react'

class TodoItem extends Component {
	constructor(props) {
		super(props);
    }

    updateTodo = (e, id) => {
        this.props.updateTodo({id: id, checked: e.target.checked})
    }

    deleteTodo = (id) => {
        this.props.deleteTodo(id)
    }    

    render() {
        const todo = this.props.todo;
        return(
            <li className="task" key={todo.id} id={todo.id}>
                <input className="taskCheckbox" type="checkbox" 
                checked={todo.done} onChange={(e) => this.updateTodo(e, todo.id)} />              
                <label className="taskLabel">{todo.title}</label>
                <span className="deleteTaskBtn" onClick={(e) => this.deleteTodo(todo.id)}>
                x
                </span>
            </li>
        );
    }
}

export default TodoItem;