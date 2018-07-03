import React from 'react';
import Img from 'gatsby-image';

import PortfolioNav from '../components/PortfolioNav';
import SummaryBox from '../components/SummaryBox';

const Blueprint = ({ data }) => ( // eslint-disable-line
  <div className="main-body-portfolio">
    <h1>Blueprint for Criminal Justice Reform</h1>
    <div className="flex-row">
      <div className="two-thirds-top blueprint-top">
        <Img sizes={data.cover.sizes} />
      </div>
      <SummaryBox techs={['indesign', 'illustrator']} />
    </div>
    <div className="tan-block">
      <p>
        The Blueprint for Criminal Justice Reform was commissioned by the Legal Action Center and
        the NY AT/Reentry Coalition for distribution to members of the New York City council and
        other community stakeholders during its annual rally at the steps of City Hall. I designed
        and produced the booklet and illustrated all of its visual assets.
      </p>
      <div className="single-image" style={{ marginTop: `60px` }}>
        <Img sizes={data.spread1.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.spread2.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.spread3.sizes} />
      </div>
    </div>
    <div className="white-block">
      <p>
        For this project, the only asset I was given was a Word file with the booklet’s text; I
        wasn’t provided with any photographs, drawings, or infographics to inform the design. I was
        able to improvise on the chosen blueprint theme, however, drawing upon New York City’s
        architectural landmarks for inspiration. My illustrations included the Manhattan skyline,
        court buildings, a corner bodega, and a series of row houses.
      </p>
      <div className="single-image">
        <Img sizes={data.illustrations1.sizes} />
      </div>
      <div className="single-image">
        <Img sizes={data.illustrations2.sizes} />
      </div>
    </div>
    <PortfolioNav
      color="tan"
      leftPath="/civic-hall-labs"
      leftName="Civic Hall Labs"
      rightPath="/ati-reentry-coalition"
      rightName="ATI/Reentry Coalition"
    />
  </div>
);

export default Blueprint;

export const query = graphql // eslint-disable-line
` 
  query Blueprint {
    cover: imageSharp(id: { regex: "/blueprint-cover/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    spread1: imageSharp(id: { regex: "/blueprint-spread-1/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    spread2: imageSharp(id: { regex: "/blueprint-spread-2/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    spread3: imageSharp(id: { regex: "/blueprint-spread-3/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    illustrations1: imageSharp(id: { regex: "/blueprint-illustrations-1/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    illustrations2: imageSharp(id: { regex: "/blueprint-illustrations-2/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
