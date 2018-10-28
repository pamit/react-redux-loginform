import React, { Component } from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component {
	constructor(props) {
		super(props);
    }

    render() {
        const todos = this.props.todos;
        return(            
            <div className="listWrapper">
                <ul className="taskList">
                {todos.map((todo) => {
                    return (
                        <TodoItem todo={todo} key={todo.id} id={todo.id} 
                            updateTodo={this.props.updateTodo}
                            deleteTodo={this.props.deleteTodo} />
                    )
                })}        
                </ul>
            </div>
        );
    }
}

export default TodoList;