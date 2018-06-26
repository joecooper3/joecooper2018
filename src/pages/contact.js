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
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <p className="hidden">
        <label htmlFor="bot-field">
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      <label htmlFor="form-name">
        Name
        <input id="form-name" type="text" name="name" placeholder="Name" />
      </label>
      <label htmlFor="form-email">
        Email
        <input id="form-email" type="email" name="_replyto" placeholder="Email" />
      </label>
      <label htmlFor="form-body">
        Message
        <textarea name="form-body" placeholder="Enter your message" />
      </label>
      <input type="submit" value="Send" />
    </form>
  </div>
);

export default ContactPage;
