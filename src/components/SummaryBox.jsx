import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SummaryBox extends Component {
  render() {
    return (
      <div className="summary-box">
        <h2>Summary</h2>
        {this.props.children}
        <h2>Tech Used</h2>
      </div>
    );
  }
}

SummaryBox.propTypes = {
  children: PropTypes.number.isRequired
};

export default SummaryBox;
