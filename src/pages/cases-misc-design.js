import React from 'react';
import Img from 'gatsby-image';

import PortfolioNav from '../components/PortfolioNav';
import SummaryBox from '../components/SummaryBox';

const CasesMiscDesign = ({ data }) => ( // eslint-disable-line
  <div className="main-body">
    <h1>Miscellaneous CASES Designs</h1>
    <div className="flex-row">
      <div className="two-thirds-top" style={{ margin: `10px 0 30px 0` }}>
        <p>
          The Center for Alternative Sentencing and Employment Services (CASES) is an organization
          dedicated to increasing public health and safety through its innovative, evidence-based
          programs, including alternatives-to-incarceration, behavioral health, and community
          outreach services.
        </p>
        <p>
          I have been privileged to work full-time at CASES over the last five years. As CASES’
          Associate Director of Communications and Design, I am tasked with developing all of the
          visual and design assets for its print collateral. I also offer writing support.
        </p>
      </div>
      <SummaryBox techs={['indesign', 'illustrator', 'photoshop', 'css']} />
    </div>
    <div className="tan-block">
      <div className="single-image">
        <Img sizes={data.bulletinBoard.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.onShelf.sizes} />
      </div>
    </div>
    <div className="white-block">
      <div className="single-image">
        <Img sizes={data.clinicBrochure.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.nathBrochure.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.aptBrochure.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.mactBrochure.sizes} />
      </div>
    </div>
    <div className="tan-block">
      <div className="single-image">
        <Img sizes={data.bronxBrochure.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.manhattanBrochure.sizes} />
      </div>
    </div>
    <PortfolioNav
      color="white"
      leftPath="/ati-reentry-coalition"
      leftName="ATI Reentry Coalition"
    />
  </div>
);

export default CasesMiscDesign;

export const query = graphql // eslint-disable-line
` 
  query CasesMisc {
    bulletinBoard: imageSharp(id: { regex: "/bulletin-board/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    onShelf: imageSharp(id: { regex: "/on-shelf/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    clinicBrochure: imageSharp(id: { regex: "/brochures-clinic/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    nathBrochure: imageSharp(id: { regex: "/brochures-nathaniel/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    aptBrochure: imageSharp(id: { regex: "/brochures-apt/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    mactBrochure: imageSharp(id: { regex: "/brochures-manhattan-act/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    bronxBrochure: imageSharp(id: { regex: "/brochures-manhattan@2x/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    manhattanBrochure: imageSharp(id: { regex: "/brochures-bronx@2x/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
