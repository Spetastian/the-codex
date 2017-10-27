import React, { Component } from 'react';
import GuideList from './guides/GuideList';
import Guide from './guides/Guide';
import logo from './logo.svg';
import './App.css';
import codexService from './data/codexService';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <article>
          <h2>Guides</h2>
          {
            this.state.slug ? 
              this.renderGuide() : 
              this.renderGuideList()
          }
        </article>
      </div>
    );
  }
}

export default App;
