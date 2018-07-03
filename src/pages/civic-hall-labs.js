import React from 'react';
import Img from 'gatsby-image';

import PortfolioNav from '../components/PortfolioNav';
import SummaryBox from '../components/SummaryBox';

const CivicHallLabs = ({ data }) => ( // eslint-disable-line
  <div className="main-body-portfolio">
    <h1>Civic Hall Labs</h1>
    <div className="flex-row">
      <div className="two-thirds-top">
        <Img sizes={data.chlSpread.sizes} />
      </div>
      <SummaryBox techs={['css', 'javascript', 'illustrator']} />
    </div>
    <div className="tan-block">
      <p>
        Civic Hall Labs is the nonprofit research and development arm of Civic Hall and acts as a
        conduit between tech developers and civic municipalities.
      </p>
      <p>
        The Civic Hall Labs staff was most comfortable using Squarespace’s interface, but they
        recognized that they might compromise their legitimacy by using one its default templates.
        They hired me to spruce up its Bedford template and ensure that it conformed to their
        branding standards.
      </p>
    </div>
    <div className="white-block">
      <div className="flex-row">
        <div className="two-thirds">
          <Img sizes={data.chlSketches.sizes} />
        </div>
        <div className="one-third">
          <p>
            The site’s design itself was a collaboration between myself and the staff of Civic Hall
            Labs. The Civic Hall Labs staff had a pretty good idea of the larger structure that they
            wanted their site to follow, but it was up to me to ensure compatibility across devices
            and fill in most of the finer details.
          </p>
        </div>
      </div>
      <div className="single-image">
        <Img sizes={data.chlResponsive.sizes} />
      </div>
    </div>
    <div className="tan-block">
      <div className="flex-row">
        <div className="two-thirds">
          <Img sizes={data.chlCss.sizes} />
        </div>
        <p className="one-third">
          Creating a unique site within Squarespace can be tricky. Its default interface is fairly
          rigid, meaning that most users are limited to a very finite number of design
          possibilities. Fortunately, by injecting nearly a thousand lines of custom CSS code, I was
          able dramatically overhaul one of its themes.
        </p>
      </div>
    </div>
    <div className="white-block">
      <div className="flex-row">
        <div className="one-third">
          <p>
            In addition to the custom coding, Civic Hall Labs also requested some illustrations in
            many of the site’s About pages. I provided them with some infographic-style visuals to
            help them communicate aspects of their mission and approach.
          </p>
        </div>
        <div className="one-third">
          <Img sizes={data.chlVenn.sizes} />
        </div>
        <div className="single-image" style={{ marginTop: `70px` }}>
          <Img sizes={data.chlInfographic.sizes} />
        </div>
      </div>
    </div>
    <PortfolioNav
      color="tan"
      leftPath="/nyc-bigapps"
      leftName="NYC BigApps"
      rightPath="/blueprint-for-criminal-justice-reform"
      rightName="Blueprint for Criminal Justice Reform"
    />
  </div>
);

export default CivicHallLabs;

export const query = graphql // eslint-disable-line
` 
  query CivicHallLabs {
    chlSpread: imageSharp(id: { regex: "/chl-spread/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    chlSketches: imageSharp(id: { regex: "/chl-sketches/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    chlResponsive: imageSharp(id: { regex: "/chl-responsive/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    chlCss: imageSharp(id: { regex: "/chl-custom-css/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    chlVenn: imageSharp(id: { regex: "/chl-venn/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    chlInfographic: imageSharp(id: { regex: "/chl-infographic-2/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
