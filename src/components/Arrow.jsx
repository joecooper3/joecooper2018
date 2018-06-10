import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Arrow extends PureComponent {
  static propTypes = {
    direction: PropTypes.string.isRequired
  };
  render() {
    return this.props.direction === 'left' ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      </svg>
    );
  }
}
