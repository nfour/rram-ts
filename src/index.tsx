import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, IndexRoute, Route, Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import initialize from './lib/initialize';
import './lib/polyfill';
import { createStore } from './store';

import Example from './containers/Example';
import Page from './containers/Page';

export const STORE   = createStore();
export const HISTORY = syncHistoryWithStore(hashHistory, STORE);

render(
  <Provider store={STORE}>
    <Router history={HISTORY}>
      <Route path="/" component={Page}>
        <IndexRoute component={Example} />
      </Route>
    </Router>
  </Provider>,
  document.body.appendChild(document.createElement('div')),
);

initialize();
