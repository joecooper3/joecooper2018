import React from 'react';
import Link from 'gatsby-link';

import SocialMedia from '../components/SocialMedia';

const IndexPage = () => (
  <div className="main-body">
    <div className="intro-block">
      <p>
        Joe Cooper is a New York City-based<br />
        <span className="second-line">
          <span className="tan-highlight turnblue">front-end developer</span> and{' '}
          <span className="tan-highlight highlight2 turnblue">visual designer.</span>
        </span>
      </p>
      {/* <p>
        He is currently the Associate Director of Communications and Design for CASES and has
        provided freelance web and print design services to non-profit organizations across the
        city.
      </p> */}
      <p className="frontpage-buttons">
        <Link to="/about" className="white-btn">
          more about Joe
        </Link>
        <Link to="/portfolio" className="blue-btn">
          see his portfolio
        </Link>
      </p>
      <SocialMedia />
    </div>
  </div>
);

export default IndexPage;
