import React from 'react';
import Link from 'gatsby-link';

import SocialMedia from '../components/SocialMedia';

var minPower = function(p) {
  var lastNegativeNumber;
  for (var i = 0; i < p.length; i++) {
    if (p[i] < 0) {
      lastNegativeNumber = i;
    }
  }
  var moddedArray = p.slice(0,lastNegativeNumber+1).reverse();
  var finalNumber = 1;
  var modifier = 0;
  for (var i = 0; i < moddedArray.length; i++) {
      finalNumber -= moddedArray[i];
      if (finalNumber < 1) {
      modifier += 1 - finalNumber;
      }
  }
  finalNumber = finalNumber + modifier;
  return finalNumber;
}

function climbTheHill(slope) {
  var decreasingValue = 0;
  for (var i = 1; i < slope.length; i++) {
    if (slope[i-1] < slope[i]) {
      decreasingValue += slope[i] - slope[i-1];
    }
  }
  var increasingValue = 0;
  for (var i = 1; i < slope.length; i++) {
    if (slope[i-1] > slope[i]) {
      increasingValue += slope[i-1] - slope[i];
    }
  }
 var incOrDec = decreasingValue < increasingValue ? "decreasing" : "increasing";
 return incOrDec;
}
console.log(climbTheHill([9,8,7,2,3,3]));

const IndexPage = () => (
  <div className="main-body">
    <div className="intro-block">
      <p>
        Joe Cooper is a New York City-based<br />
        <span className="second-line">
          <span className="tan-highlight turnblue">front-end developer</span> and{' '}
          <span className="tan-highlight highlight2 turnblue">visual designer</span>.
        </span>
      </p>
      <p>
        He is currently the Associate Director of Communications and Design for CASES and has
        provided freelance web and print design services to non-profit organizations across the
        city.
      </p>
      <p className="buttons">
        <Link to="/about" className="white-btn">
          more about Joe
        </Link>
        <Link to="/about" className="blue-btn">
          see his portfolio
        </Link>
      </p>
      <SocialMedia />
    </div>
  </div>
);

export default IndexPage;
