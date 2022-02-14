import React from 'react';

const Contact = () => {
  return (
    <div>
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-md-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">Have Some <b>Questions?</b></h1>
              <hr className="w-25 mx-auto" />
            </div>
            <div className="row mb-5 align-items-center">
              <div className="col-md-6">
                <img src="/assets/contact.jpg" alt="contact" className="w-100" />
              </div>
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" placeholder="John Smith" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Your MEssage</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                  </div>
                  <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact;
