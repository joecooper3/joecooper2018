import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { CSSTransitionGroup } from 'react-transition-group';

import Logo from '../components/Logo';

class Header extends Component {
  static propTypes = {
    resumeLink: PropTypes.string.isRequired
  };
  state = {
    mobile: false
  };
  toggle = e => {
    if (e.type === 'click' || e.keyCode === 13) {
      this.setState({ mobile: !this.state.mobile });
    }
  };
  justClose = () => {
    if (this.state.mobile) {
      this.setState({ mobile: false });
    }
  };
  render() {
    return (
      <header>
        <div className="container">
          <nav id="desktop">
            <Link to="/about/">about</Link>
            <Link to="/portfolio/">portfolio</Link>
            <Link to="/contact/">contact</Link>
            <a href={this.props.resumeLink} target="_blank">
              résumé
            </a>
          </nav>
          <h1>
            <Link to="/" onClick={this.justClose} onKeyDown={this.justClose}>
              <Logo />
            </Link>
          </h1>
          <div
            id="burger"
            className={`turnt-${this.state.mobile}`}
            onClick={this.toggle}
            onKeyDown={this.toggle}
            role="button"
            tabIndex={0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </div>
          <CSSTransitionGroup
            transitionName="slide"
            transitionAppear={false}
            transitionAppearTimeout={300}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {this.state.mobile && (
              <nav id="mobile">
                <Link to="/about/" tabIndex={0} onClick={this.justClose}>
                  about
                </Link>
                <Link to="/portfolio/" onClick={this.justClose}>
                  portfolio
                </Link>
                <Link to="/contact/" onClick={this.justClose}>
                  contact
                </Link>
                <a href={this.props.resumeLink} target="_blank">
                  résumé
                </a>
              </nav>
            )}
          </CSSTransitionGroup>
        </div>
      </header>
    );
  }
}

export default Header;
