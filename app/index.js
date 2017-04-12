import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configure-store'
import { getGamesRequest, getCodexRequest } from './actions/creators'
import App from './App'
import Codex from './containers/Codex';
import Games from './containers/Games';
import './static/index.html'
import 'material-design-icons'
import WebFont from 'webfontloader'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { push } from 'react-router-redux'

WebFont.load({
  google: {
    families: ['Roboto', 'Material Icons']
  }
});

const store = configureStore()
store.dispatch(getGamesRequest())

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router>
      <App>
        <ul>
            <li><Link to="/games">Games</Link></li>
        </ul>
        <Route path="/games" component={Games}/>
        <Route path="/codex/:gameId" component={Codex}/>
      </App>
    </Router>
  </Provider>,
  document.getElementById('app')
)