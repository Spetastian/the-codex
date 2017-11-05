import React, { PureComponent } from 'react';
import Paper from 'material-ui/Paper';

const noteListContainer = {
  display: 'flex',
  padding: 10
};

const itemStyle = {
  width: "100%",
  minWidth: 240,
  maxWidth: 300,
};

class NoteList extends PureComponent {

  render() {

    const { notes } = this.props;

    return (
      <div style={noteListContainer}>
      {
        notes.map(h => (
          <Paper zDepth={1} style={itemStyle}>
            <h4>{h.title}</h4>
            <p>{h.description}</p>
          </Paper>
        ))
      }
      </div>
    )
  }

}

export default NoteList;