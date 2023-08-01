import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import logo1 from '../images/png/logo-dark.png';
import wavy from '../images/svg/wavy.svg';

function Contact() {
  return (
    <>
    <Header />
      <div class="section-contact">
            <div class="container">
                <div class="contact-heading">
                    <div class="box box1"></div>
                    <div class="row align-items-end">
                        <div class="col-lg-5 col-md-12">
                            <div class="content-left">
                                <h5>Let’s get in touch!</h5>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-12">
                            <div class="row contact-details-box">
                                <div class="col-md-6">
                                    <div class="details-item">
                                        <div class="icon-wrapper">
                                            <span class="icon-inner">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                    <circle cx="32" cy="32" r="31.5" stroke="url(#paint0_linear_1_43)"/>
                                                    <defs>
                                                      <linearGradient id="paint0_linear_1_43" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white" stop-opacity="0.2"/>
                                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                                      </linearGradient>
                                                    </defs>
                                                </svg>
                                            </span> 
                                            <span class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <g clip-path="url(#clip0_1_44)">
                                                      <path d="M20.6789 16.704C19.229 15.464 17.7577 14.7128 16.3256 15.951L15.4705 16.6993C14.8449 17.2426 13.6816 19.7807 9.18416 14.607C4.68761 9.43986 7.36343 8.63533 7.99001 8.0968L8.8498 7.34753C10.2743 6.10655 9.73674 4.54433 8.70931 2.93621L8.08929 1.96216C7.05717 0.35779 5.93327 -0.695869 4.50498 0.543234L3.73323 1.21758C3.10197 1.67744 1.33744 3.17223 0.909425 6.01196C0.394303 9.41925 2.01928 13.3211 5.74221 17.6022C9.46045 21.8852 13.101 24.0365 16.5495 23.9991C19.4154 23.9682 21.1462 22.4303 21.6876 21.8712L22.4621 21.1959C23.8867 19.9577 23.0016 18.6971 21.5508 17.4542L20.6789 16.704Z" fill="white"/>
                                                    </g>
                                                    <defs>
                                                      <clipPath id="clip0_1_44">
                                                        <rect width="24" height="24" fill="white"/>
                                                      </clipPath>
                                                    </defs>
                                                  </svg>
                                            </span>
                                        </div>
            
                                        <div class="details">
                                            <h6>Phone</h6>
                                            <p>+63 236-788-429</p>
                                        </div>
                                    </div>
                                </div>
        
                                <div class="col-md-6">
                                    <div class="details-item">
                                        <div class="icon-wrapper">
                                            <span class="icon-inner">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                    <circle cx="32" cy="32" r="31.5" stroke="url(#paint0_linear_1_43)"/>
                                                    <defs>
                                                      <linearGradient id="paint0_linear_1_43" x1="32" y1="0" x2="32" y2="64" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="white" stop-opacity="0.2"/>
                                                        <stop offset="1" stop-color="white" stop-opacity="0"/>
                                                      </linearGradient>
                                                    </defs>
                                                </svg>
                                            </span> 
                                            <span class="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path d="M21.8906 3.5625H2.10938C0.943922 3.5625 0 4.51228 0 5.67188V18.3281C0 19.4946 0.950859 20.4375 2.10938 20.4375H21.8906C23.0463 20.4375 24 19.4986 24 18.3281V5.67188C24 4.51434 23.0598 3.5625 21.8906 3.5625ZM21.5952 4.96875C21.1642 5.39742 13.7476 12.775 13.4916 13.0297C13.0931 13.4281 12.5634 13.6475 12 13.6475C11.4366 13.6475 10.9069 13.4281 10.5071 13.0284C10.3349 12.8571 3.00014 5.56097 2.40478 4.96875H21.5952ZM1.40625 18.0419V5.95898L7.48303 12.0037L1.40625 18.0419ZM2.40567 19.0312L8.48006 12.9955L9.51408 14.0241C10.1781 14.6881 11.061 15.0538 12 15.0538C12.939 15.0538 13.8219 14.6881 14.4846 14.0254L15.5199 12.9955L21.5943 19.0312H2.40567ZM22.5938 18.0419L16.517 12.0037L22.5938 5.95898V18.0419Z" fill="white"/>
                                                </svg>
                                            </span>
                                        </div>
    
                                        <div class="details">
                                            <h6>Email</h6>
                                            <p>support@elitesite.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="contact-map">
                    <div class="box box1"></div>
                    <div class="box box2"></div>

                    <div class="row row-map">
                        <div class="col-lg-8 col-md-12">
                            <div class="map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52964.773474925365!2d150.8791676322191!3d-33.93345400011208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1295b95173c25f%3A0x3af57f4e7aed196e!2sRegus%20-%20Sydney%2C%20Liverpool!5e0!3m2!1sen!2sph!4v1690200939913!5m2!1sen!2sph" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='location'></iframe>

                                <div class="address">
                                    <img src={logo1} alt='logo'/>
                                    <p>Regus - Sydney Circular Quay, Level 17, 9 Castlereagh Street, Sydney, NSW 2000, Australia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form">
                        <h5>Send Us Message</h5>
                        <p>Have any questions regarding our services? Send us your message.</p>

                        <form>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="Name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="Name" placeholder="Enter Your Name ..."/>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="Email" class="form-label">Email</label>
                                        <input type="text" class="form-control" id="Email" placeholder="Enter Your Email Address ..."/>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="Message" class="form-label">Message</label>
                                        <textarea class="form-control" placeholder="Enter Your Message ..." id="Message"></textarea>
                                    </div>
                                </div>
                                
                                <div class="col-md-12 form-footer">
                                    <div class="row align-items-center">
                                        <div class="col-md-8">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                                <label class="form-check-label" for="flexCheckChecked">
                                                    By ticking this box, I am consenting to be sent monthly articles and
                                                    promotions through WaveNet newsletter.
                                                </label>
                                            </div>
                                        </div>

                                        <div class="col-md-4 text-end">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>

        <div class="section-blurb text-center">
            <div class="bg-overlay-wavy">
                <img src={wavy} alt='backgroundWavy'/>
            </div>
            <div class="container">
                <div class="box box1"></div>
                <div class="box box2"></div>
                <div class="content">
                    <h3>Need IT Solutions?<br/>Let’s <i>start now.</i></h3>
                    <a href="/" class="btn btn-outline-primary">GET FREE CONSULTATION 
                        <span class="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="101" height="16" viewBox="0 0 101 16" fill="none">
                                <path d="M100.707 8.70711C101.098 8.31658 101.098 7.68342 100.707 7.29289L94.3431 0.928932C93.9526 0.538408 93.3195 0.538408 92.9289 0.928932C92.5384 1.31946 92.5384 1.95262 92.9289 2.34315L98.5858 8L92.9289 13.6569C92.5384 14.0474 92.5384 14.6805 92.9289 15.0711C93.3195 15.4616 93.9526 15.4616 94.3431 15.0711L100.707 8.70711ZM0 9H100V7H0L0 9Z" fill="white"/>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
      <Footer />
    </>
  )
}

export default Contact