import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import { default as AboutNew } from '../common/About'
import ServiceImg from '../../images/construction1.jpg';


const Services = () => {
    return (
        <>
            <Header />
            <Hero preHeading="Quality Work"
                heading="Services"
                text="We are a digital marketing agency that helps businesses grow <br /> their online presence and reach their target audience."
            />
              <AboutNew />

            <section className='section-3 py-5 bg-light'>
                <div className='container'>
                    <div className='section-header text-center'>
                        <span>Our Services</span>
                        <h2>What We Offer</h2>
                        <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className="service-image">
                                    <img src={ServiceImg} className='w-100' alt="" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Web Development</h3>
                                    </div>

                                    <div className="service-content">
                                        <p>We are a digital marketing agency that helps businesses</p>
                                        <a href="#" className="btn btn-primary">Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className="service-image">
                                    <img src={ServiceImg} className='w-100' alt="" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Web Development</h3>
                                    </div>

                                    <div className="service-content">
                                        <p>We are a digital marketing agency that helps businesses</p>
                                        <a href="#" className="btn btn-primary">Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4 col-lg-4'>
                            <div className='item'>
                                <div className="service-image">
                                    <img src={ServiceImg} className='w-100' alt="" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Web Development</h3>
                                    </div>

                                    <div className="service-content">
                                        <p>We are a digital marketing agency that helps businesses</p>
                                        <a href="#" className="btn btn-primary">Read More</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Services
