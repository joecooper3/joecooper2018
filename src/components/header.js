import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <header>
    <div className="container">
      <nav>
        <Link to="/about/">about</Link>
        <Link to="/about/">portfolio</Link>
        <Link to="/about/">contact</Link>
        <Link to="/about/">résumé</Link>
      </nav>
      <h1>
        <Link to="/">Joe Cooper</Link>
      </h1>
    </div>
  </header>
);

export default Header;
