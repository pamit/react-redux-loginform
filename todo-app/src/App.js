import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import { Alert } from "react-bootstrap";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        if (this.props.auth.authenticated === false) {
            return (
                <Alert bsStyle="warning">
                    <strong>You must login to use the app!</strong> &nbsp;
                    <Link to="/login">Login</Link>
                </Alert>
            );             
        }
        return (
            <TodosContainer />
        );        
    }
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}
export default connect(mapStateToProps)(App)
