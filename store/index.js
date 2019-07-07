import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer';
import Immutable from 'immutable';

const bindMiddleware = middleware => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

export function configureStore(preState) {
  const store = createStore(reducer, Immutable.Map({}), bindMiddleware([thunkMiddleware]));

  return store;
}

export default configureStore;