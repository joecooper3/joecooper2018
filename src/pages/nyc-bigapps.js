import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import SummaryBox from '../components/SummaryBox';

const NYCBigApps = ({ data }) => ( // eslint-disable-line
  <div className="main-body">
    <h1>NYC BigApps</h1>
    <div className="flex-row">
      <div className="two-thirds" style={{ margin: `10px 0 30px 0` }}>
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
      <Link to="/cases-website">CASES Website</Link>
    </div>
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
  }
`;
