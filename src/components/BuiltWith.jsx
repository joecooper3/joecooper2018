import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import TechSlot from './TechSlot';

class BuiltWith extends Component {
  static propTypes = {
    techs: PropTypes.array.isRequired
  };

  render() {
    return <span>{this.props.techs.map(item => <TechSlot key={item} tech={item} />)}</span>;
  }
}

export default BuiltWith;
