import React, { Component } from 'react';

import './normalize.css';
import './style.css';

import computer from '../images/Coding-2.png';
import wordpress from '../images/wordpress-mac.png';
import painting from '../images/Paint-Grid.png';
import briefcase from '../images/Briefcase-Grid.png';

class Layout extends Component {
  componentDidMount() {
    const script = document.createElement('script');
    script.src = this.props.data.theScript.publicURL;
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    return (
      <div>
        <div id="trigger1top" />
        <div id="trigger1mid" />
        <div id="trigger2top" />
        <div id="trigger2mid" />
        <div id="trigger3top" />
        <div id="trigger3mid" />
        <div id="trigger4top" />
        <div id="trigger4mid" />
        <header>
          <div className="header-container">
            <a href="https://www.joecooper.nyc" rel="home">
              <svg viewBox="0 0 235 44" className="logo">
                <g>
                  <path
                    d="M22.1,2.3c-0.5,0.2-0.8,0.6-1,1.1c-0.2,0.5-0.3,1.4-0.3,2.6l-0.3,17.6l-0.1,2.9c0,2.1-0.1,4-0.2,5.6
                        c-0.1,1.6-0.4,2.9-0.7,4.1c-0.5,1.5-1.3,2.8-2.4,4c-1.1,1.2-2.5,2.1-4.2,2.7s-3.6,1-5.7,0.9c-2,0-3.6-0.4-4.8-1
                        c-1.6-0.8-2.3-2-2.3-3.5c0-1,0.4-1.8,1.1-2.4C1.8,36.3,2.7,36,3.9,36c1.1,0,2,0.3,2.7,0.9c0.6,0.6,1,1.4,0.9,2.4
                        c0,0.7-0.2,1.4-0.7,1.9s-1,1-1.8,1.2c0.3,0.2,0.9,0.3,1.7,0.4c1.2,0,2.2-0.3,3-0.9s1.5-1.4,1.9-2.5c0.3-0.8,0.5-1.7,0.7-2.6
                        c0.1-0.9,0.2-2,0.3-3.3c0.1-1.3,0.1-3.2,0.1-5.7l0.4-21.9c0-1.2-0.1-2.1-0.2-2.6c-0.2-0.5-0.5-0.9-1-1.1c-0.5-0.2-1.3-0.4-2.3-0.4
                        l0-1c1.6,0.1,4,0.2,7.3,0.3c3.2,0.1,5.7,0.1,7.5,0l0,1C23.3,2,22.6,2.1,22.1,2.3z"
                  />
                  <path
                    d="M44,12.7c2,2.1,3,5.5,3,10c-0.1,4.5-1.2,7.8-3.3,9.9s-5,3-8.7,3c-3.7-0.1-6.5-1.2-8.6-3.3s-3-5.4-3-10
                        c0.1-4.5,1.2-7.8,3.3-9.9s5-3.1,8.7-3C39.1,9.5,41.9,10.6,44,12.7z M32.1,13.3c-0.9,2-1.3,5-1.4,9.1c-0.1,4.1,0.3,7.1,1.1,9.1
                        c0.8,2,1.9,3,3.2,3c1.4,0,2.5-0.9,3.3-2.9c0.8-2,1.3-5,1.4-9.1c0.1-4.1-0.3-7.2-1-9.2c-0.8-2-1.9-3-3.2-3
                        C34,10.3,32.9,11.3,32.1,13.3z"
                  />
                  <path
                    d="M56.5,22.2c0,2.1,0.2,3.9,0.8,5.3c0.6,1.4,1.3,2.4,2.3,3.1s1.9,1,3,1c2.6,0,4.8-1.2,6.4-3.7l0.8,0.3
                        c-0.4,1.3-1.1,2.5-2,3.6c-0.9,1.1-2,2-3.3,2.7c-1.3,0.7-2.8,1-4.5,1c-2.2,0-4.1-0.5-5.8-1.5s-2.9-2.4-3.8-4.3
                        c-0.9-1.9-1.3-4.3-1.3-7.2c0.1-2.9,0.6-5.3,1.6-7.3c1-2,2.4-3.4,4.2-4.4c1.8-1,3.8-1.4,6.1-1.4c6,0.1,9,3.7,8.8,10.8L56.6,20
                        C56.6,20.5,56.5,21.2,56.5,22.2z M63.4,13c-0.5-1.7-1.4-2.5-2.5-2.5c-1.1,0-2.1,0.7-2.9,2.1c-0.8,1.4-1.3,3.6-1.5,6.6l7.5,0.1
                        C64.2,16.7,63.9,14.6,63.4,13z"
                  />
                  <path
                    d="M109.8,32.9c-0.2-0.4-0.4-0.7-0.8-0.7c-0.2,0-0.6,0.1-1,0.4c-0.9,0.6-1.8,1.2-2.6,1.6c-0.8,0.4-1.7,0.8-2.8,1
                        s-2.2,0.4-3.5,0.3c-3.4-0.1-6.4-0.8-8.9-2.2c-2.5-1.4-4.5-3.4-5.8-6.1c-1.4-2.6-2-5.8-1.9-9.4c0.1-3.5,0.8-6.6,2.3-9.3
                        s3.5-4.8,6.1-6.2c2.6-1.5,5.6-2.2,8.9-2.1c1.9,0,3.5,0.3,4.9,0.9s2.6,1.4,3.9,2.4c0.4,0.3,0.7,0.4,0.9,0.4c0.7,0,1.1-0.9,1.3-2.8
                        l1.1,0c-0.2,2.2-0.3,6-0.4,11.6l-1.1,0c-0.2-1.6-0.4-2.9-0.6-3.9c-0.2-1-0.6-1.9-1-2.7c-0.4-0.8-1.1-1.5-1.8-2.1
                        c-0.8-0.8-1.7-1.4-2.8-1.8c-1.1-0.4-2.2-0.6-3.3-0.7c-2.2,0-4,0.7-5.5,2.2c-1.4,1.5-2.5,3.5-3.2,5.9c-0.7,2.5-1.1,5.2-1.1,8.2
                        c-0.1,3,0.2,5.7,0.9,8.2s1.7,4.5,3.1,6c1.4,1.5,3.2,2.3,5.4,2.3c1.1,0,2.2-0.2,3.3-0.6c1.1-0.4,2-1,2.7-1.7
                        c0.8-0.6,1.5-1.3,1.9-2.1c0.5-0.8,0.8-1.8,1.1-2.8c0.2-1.1,0.5-2.5,0.7-4.2l1.1,0c-0.1,5.8-0.1,9.8,0,12.1l-1.1,0
                        C110.1,34.1,110,33.4,109.8,32.9z"
                  />
                  <path
                    d="M134.7,12.7c2,2.1,3,5.5,3,10c-0.1,4.5-1.2,7.8-3.3,9.9s-5,3-8.7,3c-3.7-0.1-6.5-1.2-8.6-3.3s-3-5.4-3-10
                        c0.1-4.5,1.2-7.8,3.3-9.9s5-3.1,8.7-3C129.8,9.5,132.7,10.6,134.7,12.7z M122.8,13.3c-0.9,2-1.3,5-1.4,9.1
                        c-0.1,4.1,0.3,7.1,1.1,9.1c0.8,2,1.9,3,3.2,3c1.4,0,2.5-0.9,3.3-2.9c0.8-2,1.3-5,1.4-9.1c0.1-4.1-0.3-7.2-1-9.2c-0.8-2-1.9-3-3.2-3
                        C124.8,10.3,123.7,11.3,122.8,13.3z"
                  />
                  <path
                    d="M160.6,12.7c2,2.1,3,5.5,3,10c-0.1,4.5-1.2,7.8-3.3,9.9s-5,3-8.7,3c-3.7-0.1-6.5-1.2-8.6-3.3s-3-5.4-3-10
                        c0.1-4.5,1.2-7.8,3.3-9.9s5-3.1,8.7-3C155.7,9.5,158.5,10.6,160.6,12.7z M148.6,13.3c-0.9,2-1.3,5-1.4,9.1
                        c-0.1,4.1,0.3,7.1,1.1,9.1c0.8,2,1.9,3,3.2,3c1.4,0,2.5-0.9,3.3-2.9c0.8-2,1.3-5,1.4-9.1c0.1-4.1-0.3-7.2-1-9.2c-0.8-2-1.9-3-3.2-3
                        C150.6,10.3,149.5,11.3,148.6,13.3z"
                  />
                  <path
                    d="M177,10.6c1.3-0.8,2.8-1.1,4.5-1.1c1.7,0,3.1,0.5,4.4,1.4s2.3,2.3,3,4.1s1,4,1,6.6c-0.1,3.1-0.6,5.7-1.5,7.8
                        s-2.3,3.7-4,4.7s-3.7,1.6-5.9,1.5c-2.1,0-3.7-0.6-4.9-1.6l-0.1,4.8c0,1.4,0.3,2.4,1,2.9c0.7,0.6,1.8,0.9,3.2,0.9l0,1
                        c-0.5,0-1.5-0.1-3.2-0.2c-1.7-0.1-3.3-0.2-4.9-0.2c-1.2,0-2.5,0-3.7,0c-1.3,0-2,0.1-2.3,0.1l0-1c0.7,0,1.3-0.1,1.7-0.3
                        c0.4-0.2,0.7-0.5,0.9-1c0.2-0.5,0.3-1.1,0.3-2l0.4-24c0-1.5-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1l0-1c1,0.1,2,0.2,3,0.2
                        c2.8,0,5.1-0.1,7-0.5l-0.1,4.5C174.7,12.5,175.7,11.3,177,10.6z M176.6,34.2c2,0,3.5-1,4.5-3c0.9-2,1.4-5,1.5-8.9
                        c0.1-3.9-0.2-6.7-0.9-8.3c-0.7-1.7-1.7-2.5-3-2.5c-1.1,0-2.1,0.3-2.9,1.1c-0.9,0.7-1.5,1.7-1.7,3l-0.3,17.4
                        C174.3,33.8,175.3,34.2,176.6,34.2z"
                  />
                  <path
                    d="M199.4,22.2c0,2.1,0.2,3.9,0.8,5.3c0.6,1.4,1.3,2.4,2.3,3.1s1.9,1,3,1c2.6,0,4.8-1.2,6.4-3.7l0.8,0.3
                        c-0.4,1.3-1.1,2.5-1.9,3.6c-0.9,1.1-2,2-3.3,2.7c-1.3,0.7-2.8,1-4.5,1c-2.2,0-4.1-0.5-5.8-1.5c-1.6-1-2.9-2.4-3.8-4.3
                        c-0.9-1.9-1.3-4.3-1.3-7.2c0.1-2.9,0.6-5.3,1.6-7.3c1-2,2.4-3.4,4.2-4.4c1.8-1,3.8-1.4,6.1-1.4c6,0.1,9,3.7,8.8,10.8L199.5,20
                        C199.5,20.5,199.4,21.2,199.4,22.2z M206.3,13c-0.5-1.7-1.3-2.5-2.5-2.5c-1.1,0-2.1,0.7-2.9,2.1c-0.8,1.4-1.3,3.6-1.5,6.6l7.5,0.1
                        C207.1,16.7,206.8,14.6,206.3,13z"
                  />
                  <path
                    d="M226.8,10.7c1.2-0.8,2.5-1.2,3.9-1.2c1,0,1.8,0.2,2.4,0.7c0.6,0.4,1.1,1,1.4,1.7c0.3,0.7,0.4,1.4,0.4,2.2
                        c0,1.2-0.4,2.1-1.1,2.9c-0.7,0.7-1.6,1.1-2.7,1.1c-1.1,0-2-0.3-2.6-0.9s-0.9-1.3-0.9-2.3c0-1.5,0.8-2.8,2.2-3.7
                        c-0.2,0-0.4-0.1-0.6-0.1c-0.2,0-0.5,0-0.8,0.1c-0.8,0.1-1.6,0.5-2.2,1.1c-0.7,0.6-1.2,1.4-1.6,2.3s-0.6,1.8-0.6,2.6l-0.2,12.7
                        c0,1.5,0.3,2.5,1,3.1c0.7,0.6,1.9,0.9,3.4,0.9l0,1c-4-0.2-6.5-0.3-7.6-0.3c-1,0-3.3,0-6.9,0.1l0-1c0.8,0,1.4-0.1,1.8-0.3
                        s0.8-0.5,1-1c0.2-0.5,0.3-1.2,0.3-2.1l0.3-15.1c0-1.5-0.2-2.6-0.6-3.2c-0.4-0.7-1.2-1-2.4-1l0-1c1,0.1,2,0.2,3,0.2
                        c2.8,0,5.2-0.1,7-0.5l-0.1,4.5C224.7,12.6,225.6,11.6,226.8,10.7z"
                  />
                </g>
              </svg>
            </a>
            <a className="portfolio" href="https://www.joecooper.nyc/portfolio/" target="_blank">
              Portfolio
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
              </svg>
            </a>
          </div>
        </header>
        <section id="intro">
          <div className="intro-main-container">
            <p>Dear Mike Cargian (or hiring manager),</p>
            <p>
              I would like to be considered for your open <strong>Front End Developer</strong>&nbsp;position.
              In addition to my coding chops, I also have a strong background in many supporting
              fields, including visual design and communications. I believe this diverse skill set
              would allow me to find a home among the many talented people at Madwell.
            </p>
            <p>
              Per the listing's request, this is my nontraditional cover letter. Keep scrolling to
              view the rest of it.
            </p>
          </div>
          <a className="scroll-arrow" href="#trigger1mid">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </a>
        </section>
        <section id="section1" className="light">
          <div id="bigno1" className="big-number">
            Web Development
          </div>
          <div className="main-container">
            <img id="animate1image" src={computer} alt="Computer with coding symbols" />
            <div id="main1" className="text-container">
              <h1>Web Development</h1>
              <p>
                {' '}
                As a front-end developer with over four years of professional experience in both
                freelance and organizational settings, I am fluent in HTML, CSS, JavaScript, and
                modern front-end tooling.
              </p>
              <p>
                I have production experience with preprocessors, module bundlers, task runners,
                JavaScript frameworks, and I know Flexbox and CSS Grid better than some family
                members.{' '}
              </p>
            </div>
          </div>
        </section>
        <section id="section2" className="dark">
          <div id="bigno2" className="big-number">
            WordPress
          </div>
          <div className="main-container">
            <div id="main2" className="text-container">
              <h1>WordPress</h1>
              <p>
                I've used WordPress a lot, including for{' '}
                <a href="https://www.joecooper.nyc/nyc-bigapps" target="_blank">
                  NYC BigApps
                </a>{' '}
                and{' '}
                <a href="https://www.joecooper.nyc/cases-website" target="_blank">
                  CASES' homepage
                </a>.
              </p>
              <p>
                Most recently, I developed an{' '}
                <a href="https://www.joecooper.nyc/cases-portal" target="_blank">
                  internal operations portal
                </a>{' '}
                to help streamline communications among CASES’ 200+ staff members using the
                WordPress REST API as a backend.
              </p>
              <p>
                Oh, and incidentally, I did have a brief foray with Visual Composer a few years ago.
              </p>
            </div>
            <img
              id="animate2image"
              src={wordpress}
              alt="Wordpress logo"
              style={{ width: '250px' }}
            />
          </div>
        </section>
        <section id="section3" className="light">
          <div id="bigno3" className="big-number">
            Misc.
          </div>
          <div className="main-container">
            <img id="animate3image" src={painting} alt="Paintbrush painting" />
            <div id="main3" className="text-container">
              <h1>Misc.</h1>
              <p>
                As the Associate Director of Communications and Design at CASES, I head the art
                direction and production of virtually all of the organization’s external
                communications—both online and offline. I am solely responsible for the designing,
                development, and deployment of all of their web properties, including{' '}
                <a href="http://www.nathanielclinic.org" target="_blank">
                  the Nathaniel Clinic site
                </a>, MailChimp e-blasts, and, most notably, a complete reconstruction of the{' '}
                <a href="https://www.joecooper.nyc/cases-website" target="_blank">
                  main CASES site
                </a>{' '}
                in 2016.
              </p>
            </div>
          </div>
        </section>
        <section id="section4" className="dark">
          <div id="bigno4" className="big-number">
            Why Madwell
          </div>
          <div className="main-container">
            <div id="main4" className="text-container">
              <h1>Why Madwell</h1>
              <p>
                Madwell caught my attention because of the agency's obvious commitment to creating
                beautiful and functional products. I also believe that the best work is produced
                when team members have a stake throughout every phase of the project, and I was
                pleased to see this sentiment echoed in your listing.
              </p>
              <p>
                (Plus, I should note I live in Ridgewood and am unafraid of the L train shutdown.)
              </p>
            </div>
            <img id="animate4image" src={briefcase} alt="Briefcase" />
          </div>
        </section>
        <section id="bottom">
          <h1>More About Me</h1>
          <p>
            Hey, you made it to the bottom! If you've stuck with me to the end, there's no sense in
            letting this be the end. <a href="mailto:joe@joecooper.nyc">Shoot me a note</a> or check
            out my links below.
          </p>
          <div className="btn-container">
            <a
              className="white"
              href="https://www.joecooper.nyc/static/Joe%20Cooper%20Resume-8e4e0087676fdbadd79b0cca4fc73326.pdf"
              target="_blank"
            >
              résumé
            </a>
            <a className="blue" href="https://www.joecooper.nyc" target="_blank">
              online portfolio
            </a>
          </div>
        </section>
      </div>
    );
  }
}
export default Layout;

export const query = graphql // eslint-disable-line
`
  query Alright {
    theScript: file(name: { regex: "/prod/" }) {
      publicURL
    }
  }
`;
