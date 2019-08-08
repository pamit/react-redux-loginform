import { Component } from 'react'
import { connect } from 'react-redux'
import { unauthenticated } from '../actions/actionCreators'
import { withRouter } from "react-router-dom";

class LogoutContainer extends Component {
    componentWillMount() {
        this.props.dispatch(unauthenticated());
        localStorage.removeItem('jwt');
        this.props.history.push('/');
    }

    render() {
        return null;
    }
}

export default connect()(withRouter(LogoutContainer));
