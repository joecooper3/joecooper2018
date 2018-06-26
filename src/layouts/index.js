import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/Footer';
import './index.scss';

const Layout = ({ children }) => (
  <div className="master-man">
    <Helmet
      title="Joe Cooper"
      meta={[
        {
          name: 'description',
          content: 'Joe Cooper is a New York-City based front end developer and visual designer.'
        },
        {
          name: 'keywords',
          content:
            'front end, designer, new york, visual design, ux, reactjs, html, css, javascript'
        }
      ]}
    />
    <Header siteTitle="Joe Cooper" />
    <div>{children()}</div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.func.isRequired
};

export default Layout;
