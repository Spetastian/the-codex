import { combineReducers } from 'redux'
import codexReducer from './codex-reducer'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  codex: codexReducer,
  routing: routerReducer,
})

export default rootReducer