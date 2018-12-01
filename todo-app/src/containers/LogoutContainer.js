import { Component } from 'react'
import { connect } from 'react-redux'
import { unauthenticated } from '../actions/actionCreators'
import history from '../history';

class LogoutContainer extends Component {
    componentWillMount() {
        this.props.dispatch(unauthenticated());
        localStorage.removeItem('jwt');
        history.push('/');
    }

    render() {
        return null;
    }
}

export default connect()(LogoutContainer);