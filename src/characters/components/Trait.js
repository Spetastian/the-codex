import React, { PureComponent } from 'react';

const containerStyle = {
  display: 'flex'
};

const titleContainerStyle = {
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: 110,
  minWidth: 110,
  paddingTop: 10
};



const Trait = ({ title, children }) => {
  return (
  <div style={containerStyle}>
    <div style={titleContainerStyle}>
      <span>{title}</span>
    </div>
    {children}
  </div>
  )
}


export default Trait;

