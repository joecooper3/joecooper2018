import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import SummaryBox from '../components/SummaryBox';

const CasesPortal = ({ data }) => ( // eslint-disable-line
  <div className="main-body">
    <h1>CASES Portal</h1>
    <div className="flex-row">
      <div className="two-thirds-top" style={{ margin: `10px 0 30px 0` }}>
        <Img sizes={data.casesSpread.sizes} />
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
      <p>
        I have been privileged to work full-time at CASES over the last five years and, during that
        time, been witness to an organization experiencing significant growth. Since January 2012,
        CASES has more than doubled its staff, added over a dozen new programs, and opened a
        behavioral health clinic in Central Harlem.
      </p>
      <p>
        Despite CASES’ rapid expansion, its website had remained largely static for several years.
        Although many of CASES’ alternative-to-incarceration services were still well-represented on
        the old site, newer services were relegated to the site’s margins. The site was built
        without a CMS, so updating its content was both difficult and time-consuming.{' '}
      </p>
      <p>
        In 2016, I led a visual rebranding campaign, starting with the launch of a new CASES website
        I designed and developed.
      </p>
      <div style={{ width: `700px`, margin: `50px 0 10px 0` }}>
        <Img sizes={data.screenCapture2.sizes} />
      </div>
      <div style={{ width: `700px`, margin: `50px 0 10px 0` }}>
        <Img sizes={data.screenCapture1.sizes} />
      </div>
      <div style={{ width: `700px`, margin: `50px 0 10px 0` }}>
        <Img sizes={data.screenCapture3.sizes} />
      </div>
    </div>
    <div className="white-block">
      <div className="flex-row">
        <p className="one-third">
          Prior to the re-design, CASES’ site was only optimized for desktop viewing; trying to view
          the site from a mobile device was nearly impossible. The new iteration of CASES’ site was
          the first to be fully responsive.
        </p>
        <div className="two-thirds">
          <Img sizes={data.responsive.sizes} />
        </div>
      </div>
    </div>
    <div className="tan-block">
      <div className="flex-row">
        <div className="two-thirds">
          <Img sizes={data.refEmail.sizes} />
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
        <Img sizes={data.infographics.sizes} />
      </div>
    </div>
    <div className="tan-block">
      <div className="flex-row">
        <div className="two-thirds">
          <Img sizes={data.wordpress.sizes} />
        </div>
        <p className="one-third">
          A big priority when re-designing the site was making sure that its back end was accessible
          to more of the CASES staff. By using WordPress as a CMS, CASES’ communications team is
          able to easily add new content to the site without any HTML knowledge. Additionally, I
          built custom modules into CASES’ WordPress theme, allowing staff to make changes to copy
          without potentially compromising the rest of the site’s layout.
        </p>
      </div>
    </div>
    <div className="white-block">
      <Link to="/nyc-bigapps">NYC Big Apps</Link>
    </div>
  </div>
);

export default CasesPortal;

export const query = graphql // eslint-disable-line
` 
  query CasesPortal {
    casesSpread: imageSharp(id: { regex: "/cases-spread@2x/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    screenCapture1: imageSharp(id: { regex: "/cases-screen-capture-1@2x/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    screenCapture2: imageSharp(id: { regex: "/cases-screen-capture-2@2x/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    screenCapture3: imageSharp(id: { regex: "/cases-screen-capture-3@2x/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    responsive: imageSharp(id: { regex: "/responsive/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    refEmail: imageSharp(id: { regex: "/ref-email/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    infographics: imageSharp(id: { regex: "/infographics/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    wordpress: imageSharp(id: { regex: "/wordpress/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
