import React from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const titleStyle = {
  padding: 10
};

const addButtonStyle = {
  float: 'right'
};

const containerStyle = {
  display: 'flex'
};

const SheetSection = ({ children, title, withAddButton, onAddNew }) => (
  <Paper zDepth={1}>
    <h3 style={titleStyle}>{ title }
      {
        withAddButton &&
        <RaisedButton 
          label="+ Add" 
          primary={true} 
          style={addButtonStyle} />
      }
    </h3>

    <div style={containerStyle}>
    {children}
    </div>
  </Paper>
);

export default SheetSection;