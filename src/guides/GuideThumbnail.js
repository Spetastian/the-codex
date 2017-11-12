import React from 'react';

const GuideThumbnail = ({ slug, title, onSelect }) => (
  <div
    onClick={() => {
      onSelect(slug);
    }}
  >
    <p>{title}</p>
  </div>
);

export default GuideThumbnail;
