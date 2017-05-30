import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {reducers} from './reducers';
import {AppContainer} from './components/AppContainer';
import reduxThunk from 'redux-thunk';

import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
import './app.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

let store = createStore(
  reducers,
  applyMiddleware(reduxThunk),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Redirect exact from="/" to="/recipes"/>
        <Route path="/recipes" component={AppContainer as any} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'));
