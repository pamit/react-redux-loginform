import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './components/About';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path="/about/" component={About} />
        </Switch>
      </Router>    
      {/* <App /> */}
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
