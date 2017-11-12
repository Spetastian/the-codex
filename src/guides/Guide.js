import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Guide extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.slug}</p>
        <p>{this.props.description}</p>
        <div>
          {this.props.nextSteps.map((s, i) => (
            <a href="#" key={i}>
              {s.title}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

Guide.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  nextSteps: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string
    })
  ),
  description: PropTypes.string
};

export default Guide;
