import React from 'react';
import Img from 'gatsby-image';

import PortfolioNav from '../components/PortfolioNav';
import SummaryBox from '../components/SummaryBox';

const ATIReentry = ({ data }) => ( // eslint-disable-line
  <div className="main-body">
    <h1>ATI/Reentry Coalition</h1>
    <div className="flex-row">
      <div className="two-thirds-top" style={{ margin: `10px 0 30px 0` }}>
        <Img sizes={data.cover.sizes} />
      </div>
      <SummaryBox techs={['indesign', 'illustrator']} />
    </div>
    <div className="tan-block">
      <p>
        The NY ATI/Reentry Coalition is a group of ten organizations providing alternatives to
        incarceration for men, women, and youth in the New York City area. Their mission is to
        reduce crime and break the cycle of incarceration, while also saving tax dollars and
        protecting vulnerable communities.
      </p>
      <p> In 2015, I was tasked with creating its annual services report.</p>
      <div className="single-image" style={{ marginTop: `60px` }}>
        <Img sizes={data.spread1.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.spread2.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.spread3.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.atiPhoto.sizes} />
      </div>
    </div>
    <PortfolioNav
      color="white"
      leftPath="/blueprint-for-criminal-justice-reform"
      leftName="Blueprint for Criminal Justice Reform"
    />
  </div>
);

export default ATIReentry;

export const query = graphql // eslint-disable-line
` 
  query ATIReentry {
    cover: imageSharp(id: { regex: "/ati-cover/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    spread1: imageSharp(id: { regex: "/ati-spread-1/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    spread2: imageSharp(id: { regex: "/ati-spread-2/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    spread3: imageSharp(id: { regex: "/ati-spread-3/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    atiPhoto: imageSharp(id: { regex: "/ati-photo/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
