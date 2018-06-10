import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TechSlot from './TechSlot';

class SummaryBox extends Component {
  static propTypes = {
    techs: PropTypes.array.isRequired
  };

  render() {
    return (
      <div className="summary-box">
        <h2>Tech Used</h2>
        {this.props.techs.map(item => <TechSlot key={item} tech={item} />)}
      </div>
    );
  }
}

export default SummaryBox;
