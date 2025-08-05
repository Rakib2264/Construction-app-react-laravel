import React from 'react'
import AboutImg from '../../images/about-us.jpg';
function About() {
    return (
        <section className='section-2 py-5'>

            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={AboutImg} className='w-100' alt="" />
                    </div>
                    <div className='col-md-6'>
                        <span>About Us</span>
                        <h2>We Are A Digital Marketing Agency For Your Business</h2>
                        <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                        <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default About
