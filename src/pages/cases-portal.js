import React from 'react';
import Img from 'gatsby-image';

import PortfolioNav from '../components/PortfolioNav';
import SummaryBox from '../components/SummaryBox';

const CasesPortal = ({ data }) => ( // eslint-disable-line
  <div className="main-body">
    <h1>CASES Portal</h1>
    <div className="flex-row">
      <div className="two-thirds-top" style={{ margin: `10px 0 30px 0` }}>
        <Img sizes={data.portalSpread.sizes} />
      </div>
      <SummaryBox
        techs={['react', 'wordpress rest api', 'sass', 'webpack', 'sketch', 'invision']}
      />
    </div>
    <div className="tan-block">
      <p>
        The CASES Portal is an internal operations application, featuring a robust staff directory
        with live search, communications catalog, and custom-built pages for the organization’s
        adminstrative units.
      </p>
    </div>
    <div className="white-block">
      <div className="flex-row">
        <div className="two-thirds">
          <Img sizes={data.staffDirectory.sizes} />
        </div>
        <div className="one-third">
          <p>
            Over the last several years, CASES has more than doubled in size and expanded to
            multiple offices. To help staff keep track of all the people working there, the portal
            features a comprehensive staff directory divided both by department and individual
            teams.
          </p>

          <p>
            The directory receives a staff member's name, position, contact information, and
            supervisor from a JSON file generated from CASES‘ payroll and Outlook databases, while
            the photos are uploaded directly into Wordpress's backend.
          </p>
        </div>
      </div>
    </div>
    <div className="tan-block">
      <div className="flex-row">
        <p className="one-third">
          The portal leverages React to create a live search that allows users to quickly view
          results as they type.
        </p>
        <div className="two-thirds">
          <Img sizes={data.liveSearch.sizes} />
        </div>
      </div>
    </div>
    <div className="white-block">
      <p>
        Many challenges encountered by those involved in New York City’s criminal justice system
        aren’t well known among the general public. If a first-time visitor were to stumble upon
        CASES’ website, they might not have the information framework to understand why CASES’
        services are so vital to the people they serve. As such, we needed a way to quickly and
        compellingly communicate relevant information to visitors.
      </p>
      <p>
        We determined the best way to address this concern was to sprinkle small infographics
        throughout the site.
      </p>
      <div style={{ width: `700px`, margin: `50px 0 10px 0` }}>
        <Img sizes={data.commsCatalog.sizes} />
      </div>
    </div>
    <div className="tan-block">
      <div className="flex-row">
        <div className="two-thirds" />
        <p className="one-third">
          A big priority when re-designing the site was making sure that its back end was accessible
          to more of the CASES staff. By using WordPress as a CMS, CASES’ communications team is
          able to easily add new content to the site without any HTML knowledge. Additionally, I
          built custom modules into CASES’ WordPress theme, allowing staff to make changes to copy
          without potentially compromising the rest of the site’s layout.
        </p>
      </div>
    </div>
    <PortfolioNav color="white" rightPath="/cases-website" rightName="CASES Website" />
  </div>
);

export default CasesPortal;

export const query = graphql // eslint-disable-line
` 
  query CasesPortal {
    portalSpread: imageSharp(id: { regex: "/portal-spread/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    staffDirectory: imageSharp(id: { regex: "/portal-staff-directory/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    liveSearch: imageSharp(id: { regex: "/portal-live-search/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    commsCatalog: imageSharp(id: { regex: "/portal-comms-catalog/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    responsive: imageSharp(id: { regex: "/cases-responsive-mockup-d/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
