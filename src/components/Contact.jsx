import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        <p className="section-title">Contact Me</p>

        <h2>Let's Work Together</h2>

        <p className="contact-intro">
          Have a project idea or want to connect with me? Feel free to send
          me a message.
        </p>

        <div className="contact-content">

          <div className="contact-info">
            <h3>Get In Touch</h3>

            <p>
              I am always interested in learning new things and working on
              interesting projects.
            </p>

            <div className="contact-item">
              <strong>Email</strong>
              <span>ashi@example.com</span>
            </div>

            <div className="contact-item">
              <strong>Location</strong>
              <span>India</span>
            </div>
          </div>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}

export default Contact;