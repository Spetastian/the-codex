import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase';
import rootEpic from './epics';
import rootReducer from './reducers';

// Replace with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAkhVpgGONcafTmEuh7xty5UwjDJVMOvHU",
  authDomain: "the-codex-948d3.firebaseapp.com",
  databaseURL: "https://the-codex-948d3.firebaseio.com",
  projectId: "the-codex-948d3",
  storageBucket: "the-codex-948d3.appspot.com",
  messagingSenderId: "802551158182"
};

const reduxFirebaseConfig = { userProfile: 'users' };

const composeEnhancers =
typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const epicMiddleware = createEpicMiddleware(rootEpic)
const enhancer = composeEnhancers(
  reactReduxFirebase(firebaseConfig, reduxFirebaseConfig),
  applyMiddleware(epicMiddleware)
);

const store = createStore(rootReducer, enhancer);

export default () => store;