import React from 'react';
import Link from 'gatsby-link';

import Logo from '../components/Logo';

const Header = () => (
  <header>
    <div className="container">
      <nav>
        <Link to="/about/">about</Link>
        <Link to="/portfolio/">portfolio</Link>
        <Link to="/about/">contact</Link>
        <Link to="/about/">résumé</Link>
      </nav>
      <h1>
        <Link to="/">
          <Logo />
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
