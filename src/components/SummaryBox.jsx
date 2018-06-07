import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TechSlot from './TechSlot';

class SummaryBox extends Component {
  render() {
    return (
      <div className="summary-box">
        <h2>Summary</h2>
        {this.props.children}
        {this.props.techs.length > 0 && <h2>Tech Used</h2>}
        {this.props.techs.length > 0 &&
          this.props.techs.map(item => <TechSlot key={item} tech={item} />)}
      </div>
    );
  }
}

SummaryBox.propTypes = {
  children: PropTypes.object.isRequired,
  techs: PropTypes.array
};

SummaryBox.defaultProps = {
  techs: []
};

export default SummaryBox;
