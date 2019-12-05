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
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SiteNavbar from './components/SiteNavbar';
import { authenticated, unauthenticated } from './actions/actionCreators';
// import TodosContainer from './containers/TodosContainer';

const store = configureStore();

const jwt = localStorage.getItem('jwt');
if (jwt) {
    store.dispatch(authenticated());
}
else {
    store.dispatch(unauthenticated());
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <SiteNavbar />
                <Switch>
                    <Route exact path='/' component={App} />
                    {/* <Route path="/app/" component={TodosContainer} /> */}
                    <Route path="/about/" component={About} />
                    <Route path="/login/" component={Login} />
                    <Route path="/logout/" component={Logout} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
