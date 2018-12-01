import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import Login from './containers/LoginContainer';
import Logout from './containers/LogoutContainer';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
import { Router, Route, Switch } from 'react-router-dom'
import SiteNavbar from './components/SiteNavbar';
import history from './history';
import { authenticated, unauthenticated } from './actions/actionCreators';

const store = configureStore();

const jwt = localStorage.getItem('jwt');
if (jwt) {
    store.dispatch(authenticated(jwt));
}
else {
    store.dispatch(unauthenticated());
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <div>
                <SiteNavbar />
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path="/about/" component={About} />
                    <Route path="/login/" component={Login} />
                    <Route path="/logout/" component={Logout} />
                </Switch>
            </div>
        </Router>    
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
