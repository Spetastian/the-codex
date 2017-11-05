import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Switch, Route } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import Divider from 'material-ui/Divider';

import CodexIcon from 'material-ui/svg-icons/communication/import-contacts';
import GuidesIcon from 'material-ui/svg-icons/action/assignment';
import CharactersIcon from 'material-ui/svg-icons/social/group';

import MenuItem from 'material-ui/MenuItem';
import GuideList from './guides/GuideList';
import Guide from './guides/Guide';
import logo from './logo.svg';
import './App.css';
import codexService from './data/codexService';

import HomePage from './home/HomePage';
import CodexPage  from './codex/CodexPage';
import GuidesPage from './guides/GuidesPage';
import CharactersPage from './characters/CharactersPage';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      slug: null
    };
  }

  handleGuideSelected = (slug) => {
    console.log(slug)
    this.setState({
      slug
    });
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

  render() {
    return (
        <MuiThemeProvider className="main">
          <header>
            <AppBar
              title="Title"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
          </header>
          <BrowserRouter>
            <div className="content">
              <nav>
              <Paper className="mainMenuHolder">
                <Menu>
                  <NavLink to="/codex">
                    <MenuItem primaryText="Codex" leftIcon={<CodexIcon />} />
                  </NavLink>
                  <Divider />
                  <NavLink to="/guides">
                    <MenuItem primaryText="Guides" leftIcon={<GuidesIcon />} />
                  </NavLink>
                  <Divider />
                  <NavLink to="/characters">
                    <MenuItem primaryText="My characters" leftIcon={<CharactersIcon />} />
                 </NavLink> 
                 <Divider />
                </Menu>
              </Paper>
              </nav>
              <article>
                <Switch>
                  <Route exact path="/" component={HomePage}/>
                  <Route path="/codex" component={CodexPage}/>
                  <Route path="/guides" component={GuidesPage}/>
                  <Route path="/characters" component={CharactersPage}/>
                </Switch>
              </article>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
