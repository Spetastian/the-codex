import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import firebase from 'firebase';
import rootEpic from './epics';
import rootReducer from './reducers';

const firebaseConfig = {
  apiKey: "AIzaSyAkhVpgGONcafTmEuh7xty5UwjDJVMOvHU",
  authDomain: "the-codex-948d3.firebaseapp.com",
  databaseURL: "https://the-codex-948d3.firebaseio.com",
  projectId: "the-codex-948d3",
  storageBucket: "the-codex-948d3.appspot.com",
  messagingSenderId: "802551158182"
};

firebase.initializeApp(firebaseConfig);

const composeEnhancers =
typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


export default function configureStore() {
  const epicMiddleware = createEpicMiddleware(rootEpic, {
    dependencies: { firebase }
  });
  const enhancer = composeEnhancers(
    applyMiddleware(epicMiddleware)
  );
  
  const store = createStore(rootReducer, enhancer);
  
  return store;
}