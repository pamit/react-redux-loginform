import React, { Component } from 'react'

class InputBox extends Component {
	constructor(props) {
		super(props);
    }

    createTodo = (e) => {
        if (e.key === 'Enter' && !(this.getTitle.value === '')) {
            this.props.createTodo(this.getTitle.value)
            this.getTitle.value = '';
        }
    }
    
    render() {
        return(
            <div>
                <div className="header">
                    <h1>Todo List</h1>
                </div>
                <div className="inputContainer">
                    <input className="taskInput" type="text" placeholder="Add a task" maxLength="50"
                    onKeyPress={this.createTodo} ref={(input)=>this.getTitle = input} />
                </div>   
            </div>            
        );
    }
}

export default InputBox;