import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import InterfaceZeroSheet from './components/sheets/InterfaceZeroSheet';

class CharactersPage extends Component {
  render() {
    return (
      <div>
        <h1>Characters</h1>
        <InterfaceZeroSheet />
      </div>
    );
  }
}

export default CharactersPage;
