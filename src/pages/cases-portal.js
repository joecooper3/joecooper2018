import React from 'react';
import Img from 'gatsby-image';
import Link from 'gatsby-link';

import PortfolioNav from '../components/PortfolioNav';
import SummaryBox from '../components/SummaryBox';

const CasesPortal = ({ data }) => ( // eslint-disable-line
  <div className="main-body-portfolio">
    <h1>CASES Portal</h1>
    <div className="flex-row">
      <div className="two-thirds-top">
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
        administrative units.
      </p>
      <p>
        The portal was developed in response to staff concerns about internal communications. Over
        the last several years, CASES has more than doubled in size and expanded to multiple
        offices, making collaboration across units increasingly challenging. The portal aimed to
        alleviate these challenges by providing an online repository for various agency-related
        resources.
      </p>
      <p>
        I was responsible for all the wireframing, prototyping, designing, and development of the
        portal. Its back end is based on a custom Wordpress REST API configuration and its front end
        is powered by React.
      </p>
    </div>
    <div className="white-block">
      <div className="flex-row">
        <div className="two-thirds">
          <Img sizes={data.staffDirectory.sizes} />
        </div>
        <div className="one-third">
          <p>
            The directory receives a staff member's name, position, contact information, and
            supervisor from a JSON file generated from CASES’ payroll and Outlook databases, while
            the photos are uploaded directly into Wordpress's back end via its admin panel.
          </p>
        </div>
      </div>
    </div>
    <div className="tan-block">
      <div className="flex-row">
        <p className="one-third">
          The portal leverages React to create a live search that allows users to quickly view
          results as they type. Users can easily search by first name, last name, or department.
        </p>
        <div className="two-thirds">
          <Img sizes={data.liveSearch.sizes} />
        </div>
      </div>
    </div>
    <div className="white-block">
      <div className="flex-row">
        <div className="two-thirds">
          <Img sizes={data.deptPages.sizes} />
        </div>
        <p className="one-third">
          Most of CASES’ admin units have a custom-crafted department page where supervisors can
          share relevant updates and documentation. These pages can be edited using a modified
          version of Wordpress's native admin interface, allowing even staff members with limited
          technological know-how to easily maintain their department's page.
        </p>
      </div>
    </div>
    <div className="tan-block">
      <p>
        For my unit's part, we wanted a page that would allow CASES staff to easily view our library
        of communications materials. The catalog is separated into different categories, including
        one-pagers, brochures, flyers, and miscellaneous.
      </p>
      <p>
        (Incidentally, you can also <Link to="/cases-misc-design">see a sampling</Link> of some of
        the visual design work I did on CASES’ print materials.)
      </p>
      <div className="single-image">
        <Img sizes={data.commsCatalog.sizes} />
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
    deptPages: imageSharp(id: { regex: "/portal-department/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
