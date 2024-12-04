import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Get in Touch with Edwin</h2>
          <p className="lead text-center">
            Feel free to reach out for collaborations, inquiries, or just to say hello! I’m always excited to connect.
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="5" placeholder="Your Message"></textarea>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
