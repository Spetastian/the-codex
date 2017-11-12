import React, { Component } from 'react';
import {connect} from 'react-redux';
import {initApp} from './actions/appActions';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import ProtectedRoute from './common/components/ProtectedRoute';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import CodexIcon from 'material-ui/svg-icons/communication/import-contacts';
import GuidesIcon from 'material-ui/svg-icons/action/assignment';
import CharactersIcon from 'material-ui/svg-icons/social/group';

import MenuItem from 'material-ui/MenuItem';
import GuideList from './guides/GuideList';
import Guide from './guides/Guide';
import './App.css';
import codexService from './data/codexService';

import HomePage from './home/HomePage';
import CodexPage  from './codex/CodexPage';
import GuidesPage from './guides/GuidesPage';
import CharactersPage from './characters/CharactersPage';
import LoginForm from './common/components/LoginForm';

import { userLogin, userLogout, userCreate } from './actions/userActions';

class App extends Component {

  state = {
    loginDialogOpen: false,
  };

  componentDidMount () {
    if(!this.props.initated) {
      this.props.initApp();
    }
  }

  renderGuide = () => {
    const { slug, guideStep } = this.state;
    const guide = codexService.getGuide(slug, guideStep);
    const { title, nextSteps, description, stepContent } = guide;

    return (
      <Guide 
        slug={slug}
        title={title} 
        nextSteps={nextSteps}
        stepContent={stepContent}
        description={description} />
    );
  }

  renderGuideList = () => {
    return <GuideList guides={codexService.getGuideList()} onGuideSelected={this.handleGuideSelected} />
  }

  renderNav = (authenticated) => (
    <nav>
      <Paper className="mainMenuHolder">
        <Menu>
          <NavLink to="/codex">
            <MenuItem primaryText="Codex" leftIcon={<CodexIcon />} />
            <Divider />
          </NavLink>
          {authenticated && (
          <div>
            <NavLink to="/guides">
              <MenuItem primaryText="Guides" leftIcon={<GuidesIcon />} />
              <Divider />
            </NavLink>
            <NavLink to="/characters">
              <MenuItem primaryText="My characters" leftIcon={<CharactersIcon />} />
              <Divider />
            </NavLink>
          </div>)}
        </Menu>
      </Paper>
    </nav>
  );

  
  renderLoginDialog = (authenticated) => (
    <Dialog
      title="Login"
      modal={false}
      open={!authenticated && this.state.loginDialogOpen}
      onRequestClose={this.handleLoginDialogClose}>
      <LoginForm onLogin={this.handleLogin} />
    </Dialog>
  );

  renderLoginLogoutButton = (authenticated) => 
    authenticated ? 
      <FlatButton onClick={this.handleLogout} label="Logout" /> : 
      <FlatButton onClick={this.handleLoginDialogOpen} label="Login" />;

  handleLogout = () => {
    this.props.userLogout();
  }

  handleLogin = ({ email, password }) => {
    this.props.userLogin({ email, password });
  }

  handleLogin = ({ email, password }) => {
    this.props.userLogin({ email, password });
  }

  handleLoginDialogOpen = () => {
    this.setState({loginDialogOpen: true});
  }

  handleLoginDialogClose = () => {
    this.setState({loginDialogOpen: false});
  }

  render() {
    const { authenticated } = this.props;

    return (
        <MuiThemeProvider className="main">
          <header>
            <AppBar
              title="Title"
              iconElementRight={this.renderLoginLogoutButton(authenticated)}
            />
          </header>
          <BrowserRouter>
            <div className="content">
              { this.renderNav(authenticated) }
              <article>
                <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/codex" component={CodexPage}/>
                  <ProtectedRoute authenticated={authenticated} path="/guides" component={GuidesPage}/>
                  <ProtectedRoute authenticated={authenticated} path="/characters" component={CharactersPage}/>
                </Switch>
              </article>
            </div>
          </BrowserRouter>
          {this.renderLoginDialog(authenticated)}
        </MuiThemeProvider>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  initApp: () => dispatch(initApp()),
  userLogin: ({ email, password }) => 
    dispatch(userLogin({ email, password })),
  userLogout: () => 
    dispatch(userLogout()),
  userCreate: ({ email, password }) => 
    dispatch(userCreate({ email, password }))
});

const mapStateToProps = state => ({ ...state.app, ...state.user }); 

export default connect(mapStateToProps, mapDispatchToProps)(App);
