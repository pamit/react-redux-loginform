import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import { authenticated } from '../actions/actionCreators'
import history from '../history';

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
            this.props.dispatch(authenticated(response.data.jwt));
            localStorage.setItem('jwt', response.data.jwt);
            history.push('/');
		})
		.catch(error => console.log(error))        
    }

    render() {
        return (
            <LoginForm handleSubmit={this.handleSubmit} />
        );
    }
}

export default connect()(LoginContainer)