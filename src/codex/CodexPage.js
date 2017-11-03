import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class CodexPage extends Component {

  render() {
    return (
      <div>
        <h1>Codex</h1>
        <TextField
          hintText="Search codex"
        />
      </div>
    );
  }
}

export default CodexPage;