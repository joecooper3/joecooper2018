import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import Arrow from './Arrow';

export default class PortfolioNav extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    leftPath: PropTypes.string,
    leftName: PropTypes.string,
    rightPath: PropTypes.string,
    rightName: PropTypes.string
  };

  static defaultProps = {
    leftPath: '',
    leftName: '',
    rightPath: '',
    rightName: ''
  };

  render() {
    const color = this.props.color === 'white' ? 'white-block-nav' : 'tan-block-nav';
    return (
      <div className={color}>
        {this.props.leftPath ? (
          <Link to={this.props.leftPath} className="left-nav">
            <Arrow direction="left" />
            {this.props.leftName}
          </Link>
        ) : (
          <span />
        )}
        {this.props.rightPath && (
          <Link to={this.props.rightPath} className="right-nav">
            {this.props.rightName} <Arrow direction="right" />
          </Link>
        )}
      </div>
    );
  }
}
