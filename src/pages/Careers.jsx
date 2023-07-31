import React from 'react'
import './Careers.css';

function Careers() {
  return (
    <div className='careers-page'>
        <header>
            <div className='header-container'>
                <div className='tiny-container'>
                    <p>Home  -</p>
                    <span>Careers</span>
                </div>
                <div className='h1-container-head'>
                    <h1>Do you want to make beautiful things with nice people?</h1>
                </div>
            </div>
        </header>

        <main>
            {/* First Section */}
            <section className='first-section'>
                <div className='container-first-section'>
                    <div className='box-con-first'>
                        <img src="loqxrqhu2ptc-1@2x.png" alt="" />
                        <div className='box-con-author'>
                            <div className='box-author'>
                                <img src="image-placeholder@2x.png" alt=""/>
                                <p>Nathan Atkinson</p>
                                <span>July 10, 2023</span>
                            </div>
                            <button>DEVELOPMENT</button>
                        </div>
                        <div className='for-small-businesses-con'>
                            <div className='for-small-businesses'>
                                <p>
                                    For small businesses, the ability to access enterprise-level
                                    technology has long been a challenge. Historically, small businesses
                                    have had limited access to the resources needed to compete with
                                    larger companies. However, cloud computing has changed the game for
                                    small businesses, providing access to affordable, scalable
                                    technology solutions that were previously out of reach.
                                </p>
                                <p>
                                    One of the biggest advantages of cloud computing for small
                                    businesses is the cost savings. By moving their IT infrastructure to
                                    the cloud, businesses can avoid the upfront costs associated with
                                    purchasing and maintaining physical servers and hardware. Cloud
                                    computing also eliminates the need for in-house IT staff, reducing
                                    labor costs.
                                </p>
                            </div>
                            <div className='in-addition-to'>
                                <p>
                                    In addition to cost savings, cloud computing also provides small
                                    businesses with greater flexibility and scalability. With
                                    cloud-based solutions, businesses can easily add or remove users,
                                    applications, and services as needed, without having to invest in
                                    additional hardware or software.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='box-con-second'>
                        <div className='search-continer'>
                            <h6>SEARCH</h6>
                            <div className='container-img-input'>
                                <input type="text" placeholder="Search.." name="search" className='btn'/>
                            </div>
                        </div>
                        <div className='category-continer'>
                            <h6>Category</h6>
                            <div className='category-list'>
                                <p>Design</p>
                                <span>120</span>
                            </div>
                            <div className='category-list'>
                                <p>Development</p>
                                <span>100</span>
                            </div>
                            <div className='category-list'>
                                <p>Tips</p>
                                <span>80</span>
                            </div>
                            <div className='category-list'>
                                <p>Review</p>
                                <span>60</span>
                            </div>
                            <div className='category-list'>
                                <p>Events</p>
                                <span>40</span>
                            </div>
                            <div className='category-list'>
                                <p>Collaboration</p>
                                <span>20</span>
                            </div>
                        </div>
                        <div className='contact-continer'>
                            <h6>Contact</h6>
                            <div className='contact-list'>
                                <p>Phone</p>
                                <span>+63 234 - 567 - 890</span>
                            </div>
                            <div className='contact-list'>
                                <p>Email</p>
                                <span>hello@elitesite.com</span>
                            </div>
                            <div className='contact-list'>
                                <p>Location</p>
                                <span className='contact-list-span'>
                                    Regus - Sydney Circular Quay, Level 17, 
                                    9 Castlereagh Street, Sydney, NSW 2000, 
                                </span>
                                <div className='logo-continer'>
                                    <img src="imageremovebgpreview-1-4@2x.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Section */}
            <section className='second-section'>
                <div className='featured-con'>
                    <h1 className='featured-job-openings'>
                        Featured Job Openings
                    </h1>
                    <div className='featured-card'>

                        <div className='featured-box'>
                            <h3>Azure Engineer</h3>
                            <p>Technical Operation</p>
                            <p className='btn-vacancy'>View Vacancy</p>
                        </div>

                        <div className='featured-box'>
                            <h3>QA Engineer</h3>
                            <p>Development</p>
                            <p className='btn-vacancy'>View Vacancy</p>
                        </div>

                        <div className='featured-box'>
                            <h3>Senior .NET Developer</h3>
                            <p>Development</p>
                            <p className='btn-vacancy'>View Vacancy</p>
                        </div>
                        
                        <div className='featured-box'>
                            <h3>Project Manager</h3>
                            <p>Project Management</p>
                            <p className='btn-vacancy'>View Vacancy</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Third Section */}
            <section className='third-section'>
                <div className='why-con'>
                    <h1 className='why-we-work'>
                        Why we work at EliteSite
                    </h1>

                    <div className='why-card'>

                        <div className='why-box'>
                            <img src="experiment@2x.png" alt=""/>
                            <p>
                                Room to develop yourself 
                                through training, certification or 
                                attending conferences.
                            </p>
                        </div>
                        
                        <div className='why-box'>
                            <img src="tea@2x.png" alt=""/>
                            <p>
                                An agenda full of Triple events: 
                                from sports tournaments to LAN 
                                parties, drinks and board game evenings.
                            </p>
                        </div>

                        <div className='why-box'>
                            <img src="game@2x.png" alt=""/>
                            <p>
                                An office full of gadgets, game 
                                consoles and a home cinema. 
                                Or would you rather visit us in VR?
                            </p>
                        </div>

                        <div className='why-box'>
                            <img src="foods@2x.png" alt=""/>
                            <p>
                                Do you work in the office? Enjoy a 
                                delicious breakfast and lunch made 
                                with love by our own chef.
                            </p>
                        </div>

                        <div className='why-box'>
                            <img src="location@2x.png" alt=""/>
                            <p>
                                Hybrid working: work where you are 
                                most productive, whether that's at 
                                home or at the office.
                            </p>
                        </div>

                        <div className='why-box'>
                            <img src="gcquuv9gwdeg-1@2x.png" alt=""/>
                            <p>
                                Work on challenging and fun projects 
                                for our customers or on Triple 
                                innovation projects.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Fourth Section */}
            <section className='fourth-section'>
                <div>
                    <div className='vacancies-box'>
                        <h1>Vacancies</h1>
                    </div>

                    <div className='vacancies-table'>
                        <table>
                            <thead className='vacancies-color-head'>
                                <tr>
                                    <th scope="col">Job Title</th>
                                    <th scope="col">Department</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody className='vacancies-color-body'>
                                <tr>
                                    <td data-label="Job Title">Azure Engineer</td>
                                    <td data-label="Department">Cloud Solutions</td>
                                    <td><button className='vacancies-box-btn'>View vacancy</button></td>
                                </tr>
                                <tr>
                                    <td data-label="Job Title">Business Development Manager</td>
                                    <td data-label="Department">Staff</td>
                                    <td><button className='vacancies-box-btn'>View vacancy</button></td>
                                </tr>
                                <tr>
                                    <td data-label="Job Title">Cloud Solution Architect</td>
                                    <td data-label="Department">Cloud Solutions</td>
                                    <td><button className='vacancies-box-btn'>View vacancy</button></td>
                                </tr>
                                <tr>
                                    <td data-label="Job Title">DevOps Engineer</td>
                                    <td data-label="Department">Cloud Solutions</td>
                                    <td><button className='vacancies-box-btn'>View vacancy</button></td>
                                </tr>
                                <tr>
                                    <td data-label="Job Title">Linux Engineer</td>
                                    <td data-label="Department">Cloud Solutions</td>
                                    <td><button className='vacancies-box-btn'>View vacancy</button></td>
                                </tr>
                                <tr>
                                    <td data-label="Job Title">Network Engineer</td>
                                    <td data-label="Department">Cloud Solutions</td>
                                    <td><button className='vacancies-box-btn'>View vacancy</button></td>
                                </tr>
                                <tr>
                                    <td data-label="Job Title">Project Management Assistant</td>
                                    <td data-label="Department">Project Management</td>
                                    <td><button className='vacancies-box-btn'>View vacancy</button></td>
                                </tr>
                                <tr>
                                    <td data-label="Job Title">QA Engineer</td>
                                    <td data-label="Department">Development</td>
                                    <td><button className='vacancies-box-btn'>View vacancy</button></td>
                                </tr>
                                <tr>
                                    <td data-label="Job Title">Roku Developer</td>
                                    <td data-label="Department">Development</td>
                                    <td><button className='vacancies-box-btn'>View vacancy</button></td>
                                </tr>
                            </tbody>
                        </table>      
                    </div>
                </div>
            </section>

            {/* Fifth Section */}
            <div className='fifth-section'>
                <div className='ready-to-box'>
                    <div className='ready-to-take'>
                        <h1>Ready to take</h1>
                        <h1>your <span>Business’ IT</span></h1>
                        <h1>to the next level?</h1>    
                    </div>
                    <div className='get-free-con'>
                        <p>GET FREE CONSULTATION</p>       
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Careers
