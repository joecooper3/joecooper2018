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
        The Center for Alternative Sentencing and Employment Services (CASES) is an organization
        dedicated to increasing public health and safety through its innovative, evidence-based
        programs, including alternatives-to-incarceration, behavioral health, and community outreach
        services.
      </p>
    </div>
    <div className="white-block">
      <div className="flex-row">
        <p className="one-third">
          Prior to the re-design, CASES’ site was only optimized for desktop viewing; trying to view
          the site from a mobile device was nearly impossible. The new iteration of CASES’ site was
          the first to be fully responsive.
        </p>
        <div className="two-thirds">
          <Img sizes={data.staffDirectory.sizes} />
        </div>
      </div>
    </div>
    <div className="tan-block">
      <div className="flex-row">
        <div className="two-thirds">
          <Img sizes={data.liveSearch.sizes} />
        </div>
        <p className="one-third">
          The new referrals page allows judges, lawyers, and community members to recommend
          individuals directly to an appropriate staff member’s email. Previously, interested
          parties either needed to directly email a general information account or call a direct
          contact within the organization.
        </p>
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
