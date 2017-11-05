import React from 'react';

const columnStyle = {
  padding: 12
}

const SheetSectionColumn = ({ children }) => (
  <div style={columnStyle}>
    {children}
  </div>
);

export default SheetSectionColumn;