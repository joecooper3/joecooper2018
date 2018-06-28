import React from 'react';
import Link from 'gatsby-link';

import Logo from '../components/Logo';

const Header = () => ( // eslint-disable-line
  <header>
    <div className="container">
      <nav>
        <Link to="/about/">about</Link>
        <Link to="/portfolio/">portfolio</Link>
        <Link to="/contact/">contact</Link>
        <a href="resume.pdf" target="_blank">
          résumé
        </a>
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
