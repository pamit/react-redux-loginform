import React, { Component } from 'react';
import './App.css';
import TodosContainer from './containers/TodosContainer';
import { Alert } from "react-bootstrap";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class App extends Component {
    loginAlert() {
        return (
            <Alert bsStyle="danger">
                <strong>You must login to use the app!</strong> &nbsp;
                <Link to="/login">Login</Link>
            </Alert>
        );         
    }

    successMessage() {
        return (
            <Alert bsStyle="success">
                <strong>Welcome to the app!</strong> &nbsp;
                <Link to="/logout">logout</Link>
            </Alert>
        );         
    }    

    render() {
        if (this.props.auth.authenticated === false) {
            return <this.loginAlert />;
        }

        return (
            <div>
                <this.successMessage />
                <TodosContainer />
            </div>
        );        
    }
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps)(App)
