import { routerReducer as routing } from 'react-router-redux';
import {
  applyMiddleware,
  combineReducers,
  createStore as createReduxStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';

import example from './example/reducer';
import exampleItems from './exampleItems/reducer';

export const reducers = {
  routing,
  example,
  exampleItems,
};

export const combinedReducers = combineReducers(reducers);

const middleware = [
  reduxThunk,
];

const enhancers = composeWithDevTools(
  applyMiddleware(...middleware),
);

export const createStore = (initialState) =>
  createReduxStore(
    combinedReducers,
    initialState,
    enhancers,
  );
