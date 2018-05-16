import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <nav>
        <Link to="/about/">about</Link>
        <Link to="/about/">portfolio</Link>
        <Link to="/about/">contact</Link>
        <Link to="/about/">résumé</Link>
      </nav>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired
};

export default Header;
