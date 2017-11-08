import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(pingEpic);

const store = createStore(pingReducer,
  applyMiddleware(epicMiddleware)
);

export default store;