import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

export default class PortfolioNav extends Component {
  static propTypes = {
    prop: PropTypes
  };

  render() {
    return (
      <div className="white-block">
        <Link to="/nyc-bigapps">NYC BigApps</Link>
      </div>
    );
  }
}
