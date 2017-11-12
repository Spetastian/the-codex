import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GuideThumbnail from './GuideThumbnail';

class GuideList extends Component {
  renderThumbnail = ({ slug, title }, i) => {
    return (
      <GuideThumbnail
        key={i}
        slug={slug}
        title={title}
        onSelect={this.props.onGuideSelected}
      />
    );
  };

  render() {
    return <div>{this.props.guides.map(this.renderThumbnail)}</div>;
  }
}

GuideList.propTypes = {
  guides: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string
    })
  )
};

export default GuideList;
