import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'

const ContactUs = () => {
  return (
    <>
      <Header />
      <main>
        <Hero preHeading="Quality Work"
          heading="Contact Us"
          text="We are a digital marketing agency that helps businesses grow <br /> their online presence and reach their target audience."
        />

        <section className='section-9 py-5 bg-light'>
          <div className='container'>
            <div className='section-header text-center'>
              <h2>Contact Us</h2>
              <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
            </div>
            <div className='row'>
              <div className="col-md-3">
                <div className="card shadow border-0">
                  <div className="card-body p-4">
                    <h4>Call Us</h4>
                    <div>
                      <a href="tel:01729542809">01729542809</a>
                    </div>
                    <div>
                      <a href="tel:01729542809">01729542809</a>
                    </div>

                    <h4 className='mt-3'>You can also email us</h4>
                    <a href="mailto:2264rakibkhan@gmail.com">2264rakibkhan@gmail.com</a>

                    <h4 className='mt-3'>Address</h4>
                    <div>House# 1, Road# 1, Block# 1, Mirpur, Dhaka-1216</div>
                  </div>

                </div>
              </div>
              <div className="col-md-9 mb-3">
                <div className="card shadow border-0">
                  <div className="card-body p-5 mb-3">
                    <form action="">
                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="" className="form-label">Name</label>
                          <input type="text" className="form-control form-control-lg" placeholder='Enter Your Name' />

                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="" className="form-label">Email</label>
                          <input type="email" className="form-control form-control-lg" placeholder='Enter Your Email' />

                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="" className="form-label">Phone</label>
                          <input type="text" className="form-control form-control-lg" placeholder='Enter Your Phone' />

                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="" className="form-label">Subject</label>
                          <input type="text" className="form-control form-control-lg" placeholder='Enter Your Subject' />

                        </div>
                      </div>
                      <div className="mb-3">
                         <label htmlFor="" className="form-label">Message</label>
                          <textarea className="form-control form-control-lg" rows={5}  placeholder='Enter Your Message'></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default ContactUs
