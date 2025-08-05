import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import ServiceImg from '../../images/construction1.jpg';
import Icon1 from '../../images/icon-1.svg';
import Icon2 from '../../images/icon-2.svg';
import Icon3 from '../../images/icon-3.svg';
import AvatarImg from '../../images/author-2.jpg';
import BlogImg from '../../images/construction3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';
import About from './About';


const Home = () => {
    return (
        <>
            <Header />
            <main className='section-1'>

                <div className="hero d-flex align-items-center">
                    <div className='container-fluid'>

                        <div className='text-center'>

                            <span>
                                Welcome to Dinar
                            </span>

                            <h1>
                                We Are A Digital Marketing Agency <br /> For Your Business
                            </h1>
                            <p>
                                We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.
                            </p>

                            <a className='btn btn-primary'>Create Now</a>
                            <a className='btn btn-secondary'>View Projeats</a>

                        </div>

                    </div>
                </div>

            </main>

           {/* <About/> */}

            {/* Service */}

            <section className='section-3 py-5 bg-light'>
                <div className='container-fluid'>
                    <div className='section-header text-center'>
                        <span>Our Services</span>
                        <h2>What We Offer</h2>
                        <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 col-lg-3'>
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
                        <div className='col-md-3 col-lg-3'>
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
                        <div className='col-md-3 col-lg-3'>
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
                        <div className='col-md-3 col-lg-3'>
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

            {/* Our Projects */}

            <section className='section-3 py-5 bg-light'>
                <div className='container-fluid'>
                    <div className='section-header text-center'>
                        <span>Our Projects</span>
                        <h2>What We Offer</h2>
                        <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 col-lg-3'>
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
                        <div className='col-md-3 col-lg-3'>
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
                        <div className='col-md-3 col-lg-3'>
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
                        <div className='col-md-3 col-lg-3'>
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

            {/* Why Choose Us */}

            <section className='section-4 py-5'>
                <div className='container py-5'>
                    <div className='section-header text-center'>
                        <span>Why Choose Us</span>
                        <h2>Digital Marketing</h2>
                        <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon1} alt="" />
                                </div>

                                <div className="card-title mt-3">
                                    <h3>Digital Marketing</h3>
                                </div>
                                <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon2} alt="" />
                                </div>

                                <div className="card-title mt-3">
                                    <h3>Digital Marketing</h3>
                                </div>
                                <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className="card shadow border-0 p-4">
                                <div className="card-icon">
                                    <img src={Icon3} alt="" />
                                </div>

                                <div className="card-title mt-3">
                                    <h3>Digital Marketing</h3>
                                </div>
                                <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-5 py-1'>
                <div className='container py-2'>
                    <div className='section-header text-center'>
                        <span>Testimonial</span>
                        <h2>What We Offer</h2>
                        <p>We are a digital marketing agency that helps businesses grow their online presence and reach their target audience.</p>
                    </div>
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={50}
                        slidesPerView={3}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className='card shadow border-0'>
                                <div className="card-body p-4">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                    </div>
                                    <div className="content pt-3">

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem, labore dolor impedit eum ipsum odit, praesentium neque provident culpa magni! Dolore consectetur corrupti nobis hic ad eos eligendi voluptatem. Sequi consequuntur quisquam inventore qui magni odio earum? Nam, vero!</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex meta">
                                        <div>
                                            <img src={AvatarImg} width={50} alt="" />
                                        </div>
                                        <div className="ps-3">
                                            <div className='name'>John Doe</div>
                                            <div>UI/UX Designer</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='card shadow border-0'>
                                <div className="card-body p-4">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                    </div>
                                    <div className="content pt-3">

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem, labore dolor impedit eum ipsum odit, praesentium neque provident culpa magni! Dolore consectetur corrupti nobis hic ad eos eligendi voluptatem. Sequi consequuntur quisquam inventore qui magni odio earum? Nam, vero!</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex meta">
                                        <div>
                                            <img src={AvatarImg} width={50} alt="" />
                                        </div>
                                        <div className="ps-3">
                                            <div className='name'>John Doe</div>
                                            <div>UI/UX Designer</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card shadow border-0'>
                                <div className="card-body p-4">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                    </div>
                                    <div className="content pt-3">

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem, labore dolor impedit eum ipsum odit, praesentium neque provident culpa magni! Dolore consectetur corrupti nobis hic ad eos eligendi voluptatem. Sequi consequuntur quisquam inventore qui magni odio earum? Nam, vero!</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex meta">
                                        <div>
                                            <img src={AvatarImg} width={50} alt="" />
                                        </div>
                                        <div className="ps-3">
                                            <div className='name'>John Doe</div>
                                            <div>UI/UX Designer</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='card shadow border-0'>
                                <div className="card-body p-4">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                    </div>
                                    <div className="content pt-3">

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem, labore dolor impedit eum ipsum odit, praesentium neque provident culpa magni! Dolore consectetur corrupti nobis hic ad eos eligendi voluptatem. Sequi consequuntur quisquam inventore qui magni odio earum? Nam, vero!</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex meta">
                                        <div>
                                            <img src={AvatarImg} width={50} alt="" />
                                        </div>
                                        <div className="ps-3">
                                            <div className='name'>John Doe</div>
                                            <div>UI/UX Designer</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                         <SwiperSlide>
                            <div className='card shadow border-0'>
                                <div className="card-body p-4">
                                    <div className="rating">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star-half" viewBox="0 0 16 16">
                                            <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z" />
                                        </svg>
                                    </div>
                                    <div className="content pt-3">

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem, labore dolor impedit eum ipsum odit, praesentium neque provident culpa magni! Dolore consectetur corrupti nobis hic ad eos eligendi voluptatem. Sequi consequuntur quisquam inventore qui magni odio earum? Nam, vero!</p>
                                    </div>
                                    <hr />
                                    <div className="d-flex meta">
                                        <div>
                                            <img src={AvatarImg} width={50} alt="" />
                                        </div>
                                        <div className="ps-3">
                                            <div className='name'>John Doe</div>
                                            <div>UI/UX Designer</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

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

export default Home
