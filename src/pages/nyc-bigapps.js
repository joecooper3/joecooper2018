import React from 'react';
import Img from 'gatsby-image';

import PortfolioNav from '../components/PortfolioNav';
import SummaryBox from '../components/SummaryBox';

const NYCBigApps = ({ data }) => ( // eslint-disable-line
  <div className="main-body">
    <h1>NYC BigApps</h1>
    <div className="flex-row">
      <div className="two-thirds-top" style={{ margin: `10px 0 30px 0` }}>
        <Img sizes={data.bigAppsSpread.sizes} />
      </div>
      <SummaryBox techs={['wordpress', 'sass', 'jquery', 'gulp', 'illustrator']}>
        <p>I sure did</p>
      </SummaryBox>
    </div>
    <div className="tan-block">
      <p>
        NYC BigApps is New York City’s most prominent civic tech competition. Organized by the New
        York City Economic Development Corporation and Civic Hall Labs, the contest asks for
        developers and designers to collaborate on developing apps to improve New York City.
      </p>
      <p>I was commissioned to develop and program their 2017 site from the ground up.</p>
    </div>
    <div className="white-block">
      <div className="flex-row">
        <div className="one-third">
          <p>
            For this project, I was presented with a branding guide and wireframes portraying
            mockups of the desktop site. In addition to all of the programming, it was also my
            responsibility to fill in the visual gaps and adapt the desktop design across different
            devices.{' '}
          </p>
          <p>
            Some visual assets—including the BigApps logo and the iconography for the individual
            challenges—were provided by Pentagram.
          </p>
        </div>
        <div className="two-thirds">
          <Img sizes={data.bigAppsWireframe.sizes} />
        </div>
      </div>
      <div style={{ width: `700px`, margin: `50px 0 10px 0` }}>
        <Img sizes={data.bigAppsResponsive.sizes} />
      </div>
    </div>
    <div className="tan-block">
      <div className="flex-row">
        <div className="two-thirds">
          <Img sizes={data.bigAppsWordpress.sizes} />
        </div>
        <p className="one-third">
          The NYC BigApps site was built using WordPress as a CMS. Many of the site’s administrators
          were comfortable using basic HTML, so its back end allows its users to make more changes
          to its code than a typical WordPress installation would. Basic safeguards were left in
          place, though, so the site’s administrators did not have to worry about dramatically
          altering the website’s overall layout.
        </p>
      </div>
    </div>
    <PortfolioNav
      color="white"
      leftPath="/cases-website"
      leftName="CASES Website"
      rightPath="/civic-hall-labs"
      rightName="Civic Hall Labs"
    />
  </div>
);

export default NYCBigApps;

export const query = graphql // eslint-disable-line
` 
  query NYCBigApps {
    bigAppsSpread: imageSharp(id: { regex: "/bigapps-spread/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    bigAppsResponsive: imageSharp(id: { regex: "/bigapps-responsive/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    bigAppsWireframe: imageSharp(id: { regex: "/wireframe/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    bigAppsWordpress: imageSharp(id: { regex: "/wordpress-bigapps/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
