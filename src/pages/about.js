import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const AboutPage = ({ data }) => ( //eslint-disable-line
  <div className="main-body">
      <h1>About Joe Cooper</h1>
      <div style={{ width: `800px`, margin: `10px 0 30px 0` }}>
        <Img sizes={data.itMeToo.sizes} />
      </div>
      <p>
        I’m a front-end developer and graphic designer based in New York City. For the past six
        years, I’ve worked full-time at CASES where I currently serve as its Associate Director of
        Communications and Design. (You can see a sampling of my web work with them here and print
        work here.)
      </p>

      <p>
        I’ve been dabbling in web design since I was 11, during the halcyon days of AOLPress. Since
        then, I’ve broadened my horizons to include visual design of all kinds, including print
        collateral, Powerpoint presentations, infographics, and flow charts. (That is to say, if it
        involves design and computers, I’m probably into it.) I’m passionate about social justice
        and have offered my services to a number of non-profit organizations and NGOs, including
        CASES, Civic Hall Labs, NYC BigApps, the Legal Action Center, the ATI/Reentry Coalition,
        Entertainment Impact, ELMA, and Lantern.
      </p>

      <p>
        In addition to anything design, I also enjoy experimental music, retro gaming, and futilely
        rooting for the Buffalo Bills.
      </p>
      <Link to="/">Go back to the homepage</Link>
    </div>
);

export default AboutPage;

export const query = graphql // eslint-disable-line
` 
  query ItMe {
    itMeToo: imageSharp(id: { regex: "/itme/" }) {
      sizes(maxWidth: 1200) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;
