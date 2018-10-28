import React, { Component } from 'react';
import './App.css';
// import TodosContainer from './containers/TodosContainer.old'
import TodosContainer from './containers/TodosContainer'

class App extends Component {
    render() {
        return (
            <TodosContainer />
        );
    }
}

export default App;
