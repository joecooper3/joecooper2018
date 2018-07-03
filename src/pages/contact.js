import React from 'react';

const ContactPage = ({ data }) => ( //eslint-disable-line
  <div className="main-body">
    <h1>Contact Me</h1>
    <p>
      You can contact me using the form below or email me the old-fashioned way at{' '}
      <a href="mailto:joe@joecooper.nyc" className="reverse">
        cyn.repooceoj@eoj
      </a>.
    </p>
    <form
      id="contact-form"
      name="contact-me"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action="/contact-submitted"
    >
      <p className="hidden">
        <label htmlFor="bot-field">
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <label htmlFor="form-name">
        <span>Name</span>
        <input id="form-name" type="text" name="name" placeholder="Name" />
      </label>
      <label htmlFor="form-email">
        <span>Email</span>
        <input id="form-email" type="email" name="replyto" placeholder="Email" />
      </label>
      <label htmlFor="form-body">
        <span>Message</span>
        <textarea name="form-body" placeholder="Enter your message" />
      </label>
      <p className="button-container">
        <button type="submit" className="blue-btn">
          Submit
        </button>
      </p>
    </form>
  </div>
);

export default ContactPage;
