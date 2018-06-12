import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import BuiltWith from '../components/BuiltWith';

const Portfolio = ({ data }) => ( // eslint-disable-line
  <div className="main-body">
    <h1>Portfolio</h1>
    <div className="flex-row">
      <div className="two-thirds">
        <Link to="/cases-portal">
          <Img sizes={data.portalSpread.sizes} />
        </Link>
      </div>
      <div className="two-thirds portfolio-top">
        <div className="featured-project">Featured Project</div>
        <Link to="/cases-portal">
          <h2>CASES Portal</h2>
        </Link>
        <p>
          The CASES Portal is an internal operations application, featuring a robust staff directory
          with live search, communications catalog, and custom-built pages for the organization’s
          adminstrative units.
        </p>
        <div>
          <span className="built-with">
            Built With:
            <BuiltWith techs={['react', 'wordpress rest api', 'sass']} />
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Portfolio;

export const query = graphql // eslint-disable-line
` 
  query portfolio {
    portalSpread: imageSharp(id: { regex: "/portal-spread/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
