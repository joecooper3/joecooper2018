import React from 'react';
import Link from 'gatsby-link';

const ContactSubmitted = ({ data }) => ( //eslint-disable-line
  <div className="main-body">
    <h1>Thank you!</h1>
    <p>I'll be in touch with you soon.</p>
    <p className="frontpage-buttons">
      <Link to="/about" className="white-btn">
        more about me
      </Link>
      <Link to="/portfolio" className="blue-btn">
        see my portfolio
      </Link>
    </p>
  </div>
);

export default ContactSubmitted;
