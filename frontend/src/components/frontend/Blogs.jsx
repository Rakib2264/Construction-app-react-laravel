import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import BlogImg from '../../images/construction3.jpg';


const Blogs = () => {
    return (
        <>
            <Header />
            <main>
                <Hero preHeading="Quality Work"
                    heading="Blogs & News"
                    text="We are a digital marketing agency that helps businesses grow <br /> their online presence and reach their target audience."
                />
            </main>
            <section className="section-6 bg-light py-5">
                <div className="container">
                    <div className='section-header text-center'>
                        <span>Blog & News</span>
                        <h2>Latest News</h2>
                        <p>Blog is a place where we share our knowledge with you</p>
                    </div>
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg} className='w-100' alt="" />
                                </div>
                                <div className="card-body p-5">
                                    <div>
                                        <a href="#" className='title'>Blog Title</a>
                                    </div>
                                    <a href="#" className='btn btn-sm btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg} className='w-100' alt="" />
                                </div>
                                <div className="card-body p-5">
                                    <div>
                                        <a href="#" className='title'>Blog Title</a>
                                    </div>
                                    <a href="#" className='btn btn-sm btn-primary'>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card shadow border-0">
                                <div className="card-img-top">
                                    <img src={BlogImg} className='w-100' alt="" />
                                </div>
                                <div className="card-body p-5">
                                    <div>
                                        <a href="#" className='title'>Blog Title</a>
                                    </div>
                                    <a href="#" className='btn btn-sm btn-primary'>Read More</a>
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

export default Blogs
