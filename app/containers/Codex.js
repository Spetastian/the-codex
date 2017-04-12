import React, { Component } from 'react'
import connectProps from '../utils/redux-connect-helper'
import Input from 'react-toolbox/lib/input'
import Dropdown from 'react-toolbox/lib/dropdown'
import CodexList from '../components/CodexList'

class Codex extends Component {

    // Initial component state
    state = {
        searchText: ''
    }

    _onSearchTextChange = (value) => {
        if(!this.props.loading) {
            this.setState({searchText: value})
            this.props.actions.searchCodexRequest(value, this.state.selectedGame)
        }
    }

  render(){
console.log('this.props.codex',this.props.codex)
    return (
      <div>
        <h1>Browse codex</h1>
        <div>
            <Input
              type='text'
              label='Search'
              name='search'
              value={this.state.searchText}
              onChange={this._onSearchTextChange}
            />
        </div>
          <CodexList codex={this.props.codex} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log('state',state)
  return state.codex;
}

export default connectProps(mapStateToProps, Codex);