import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import BuiltWith from '../components/BuiltWith';

import cases from '../images/cases.svg';
import bigapps from '../images/bigapps.svg';
import chl from '../images/chl.svg';
import blueprint from '../images/blueprint.svg';
import atireentry from '../images/atireentry.svg';
import brochures from '../images/brochures.svg';

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
          administrative units.
        </p>
        <div>
          <span className="built-with">
            Built With:
            <BuiltWith techs={['react', 'wordpress rest api', 'sass']} />
          </span>
        </div>
        <p className="button-container">
          <Link to="/cases-portal" className="white-btn">
            Read More
          </Link>
        </p>
      </div>
    </div>
    <div className="portfolio-grid">
      <Link to="/cases-website" className="lil-title lil-title-1">
        <h2>CASES Website</h2>
      </Link>
      <Link to="/nyc-bigapps" className="lil-title lil-title-2">
        <h2>NYC BigApps</h2>
      </Link>
      <Link to="/civic-hall-labs" className="lil-title lil-title-3">
        <h2>Civic Hall Labs</h2>
      </Link>
      <div className="image-and-bw iab-1">
        <Link to="/cases-website" className="lil-image">
          <img src={cases} alt="CASES Logo" />
        </Link>
        <span className="lil-built-with">
          <BuiltWith techs={['wordpress', 'sass', 'jquery']} />
        </span>
      </div>
      <div className="image-and-bw iab-2">
        <Link to="/nyc-bigapps" className="lil-image">
          <img src={bigapps} alt="NYC BigApps" />
        </Link>
        <span className="lil-built-with">
          <BuiltWith techs={['wordpress', 'sass', 'jquery']} />
        </span>
      </div>
      <div className="image-and-bw iab-3">
        <Link to="/civic-hall-labs" className="lil-image">
          <img src={chl} alt="Civic Hall Labs" />
        </Link>
        <span className="lil-built-with">
          <BuiltWith techs={['css', 'javascript', 'illustrator']} />
        </span>
      </div>
      <Link to="/blueprint-for-criminal-justice-reform" className="lil-title lil-title-4">
        <h2>Blueprint for Criminal Justice Reform</h2>
      </Link>
      <Link to="/ati-reentry-coalition" className="lil-title lil-title-5">
        <h2>ATI/Reentry Coalition</h2>
      </Link>
      <Link to="/cases-misc-design" className="lil-title lil-title-6">
        <h2>Miscellaneous CASES Designs</h2>
      </Link>
      <div className="image-and-bw iab-4">
        <Link to="/blueprint-for-criminal-justice-reform" className="lil-image">
          <img src={blueprint} alt="Blueprint for Criminal Justice Reform" />
        </Link>
        <span className="lil-built-with">
          <BuiltWith techs={['indesign', 'illustrator']} />
        </span>
      </div>
      <div className="image-and-bw iab-5">
        <Link to="/ati-reentry-coalition" className="lil-image">
          <img src={atireentry} alt="ATI/Reentry Coalition" />
        </Link>
        <span className="lil-built-with">
          <BuiltWith techs={['indesign', 'illustrator']} />
        </span>
      </div>
      <div className="image-and-bw iab-6">
        <Link to="/cases-misc-design" className="lil-image">
          <img src={brochures} alt="Miscellaneous CASES Designs" />
        </Link>
        <span className="lil-built-with">
          <BuiltWith techs={['indesign', 'illustrator', 'photoshop']} />
        </span>
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
