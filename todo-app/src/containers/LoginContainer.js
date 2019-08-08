import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { authenticated, unauthenticated } from '../actions/actionCreators'
import { withRouter } from "react-router-dom";

class LoginContainer extends Component {
    handleSubmit = (params) => {
        let data = {
            auth: {
                email: params.email,
                password: params.password
            }
        }
		axios.post('/api/v1/user_token', data)
		.then(response => {
            this.props.dispatch(authenticated());
            localStorage.setItem('jwt', response.data.jwt);
            this.props.history.push('/');
		})
		.catch(error => {
            // console.log(error);
            this.props.dispatch(unauthenticated('Login failed'));
        })
    }

    render() {
        return (
            <LoginForm handleSubmit={this.handleSubmit} />
        );
    }
}

export default connect()(withRouter(LoginContainer));
