import { createStore, applyMiddleware, compose } from 'redux'
//import createLogger from 'redux-logger'
import rootReducer from './reducers'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const history = createHistory()
const routerBrowserHistoryMiddleware = routerMiddleware(history);

const epicMiddleware = createEpicMiddleware(rootEpic);

//const loggerMiddleware = createLogger()

export default function configureStore( /*preloadedState*/ ) {
  return createStore(
    rootReducer,
    //preloadedState,
    composeEnhancers(
        applyMiddleware(
            epicMiddleware,
            routerBrowserHistoryMiddleware
        //loggerMiddleware
        )
    )
  )
}