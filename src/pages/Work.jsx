import React from 'react'
import './Work.css';

function Work() {
  return (
    <div className='work-page'>
        
        {/* Header */}
        <header>
            <div className='header-container'>
                <div className='tiny-container'>
                    <p>Home  -</p>
                    <span>Work</span>
                </div>
                <div className='h1-container-head'>
                    <h1>Mobile Development</h1>
                </div>
            </div>
        </header>

        {/* Main */}
        <main>

            {/* First Section */}
            <section className='first-section'>
                <div className='container-first-section'>
                    {/* First Box */}
                    <div className='box-con-first'>
                        <img src="mobile.png" alt=""/>
                        <div className='mobile-development-is'>
                            <p>
                                Mobile development is a crucial service for any IT company. 
                                As technology evolves, more and more people are using mobile 
                                devices to access the internet and carry out daily activities. 
                                Therefore, having a mobile presence is essential for businesses 
                                to reach their target audience. Mobile development involves 
                                creating applications or software specifically designed for 
                                mobile devices such as smartphones and tablets. These 
                                applications can be developed for various operating systems 
                                such as iOS, Android, or Windows.
                            </p>
                            <p>
                                Our IT company specializes in mobile development, providing high-quality 
                                and user-friendly applications to our clients. Our team of developers has
                                expertise in various programming languages such as Java, Swift, and Kotlin,
                                among others. We work closely with our clients to understand their needs
                                and requirements, ensuring that the application we develop meets their
                                expectations. We also provide ongoing support and maintenance for the
                                applications to ensure they continue to function optimally. Our mobile
                                development services enable businesses to increase their reach, improve
                                customer engagement, and ultimately grow their business.
                            </p>
                            <p>
                                One of the key benefits of mobile development is the ability to offer 
                                personalized experiences for users. With the use of mobile applications, 
                                businesses can collect valuable data on user behavior and preferences, 
                                allowing them to tailor their offerings to meet specific needs. This 
                                personalized approach not only enhances user experience but also 
                                increases customer loyalty and retention. Our team of developers has 
                                experience in building custom applications that offer personalized 
                                experiences, helping our clients to stand out in a crowded market.
                            </p>
                        </div>
                    </div>

                    {/* Second box */}
                    <div className='box-con-second'>
                        {/* Search */}
                        <div className='search-continer'>
                            <h6>SEARCH</h6>
                            <div className='container-input'>
                                <input type="text" placeholder="Search.." name="search" className='btn'/>
                            </div>
                        </div>
                        {/* Services */}
                        <div className='services-continer'>
                            <h6>Services</h6>
                            <p>{'>'} Web Development</p>
                            <span>{'>'} Mobile Development</span>
                            <p>{'>'} Cyber Security</p>
                            <p>{'>'} Digital Marketing</p>
                            <p>{'>'} Cloud Computing</p>
                            <p>{'>'} Software Development</p>
                            <p>{'>'} IT Project Management</p>
                            <p>{'>'} Data Analysis</p>
                            <p>{'>'} Network Management</p>
                        </div>
                        {/* Contact */}
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
                <div className='second-container'>
                    <div className='second-container-box'>
                        <div className='easy-personel'>
                            <img src="easy-icon.svg" alt="" />
                            <h6>Easy Access</h6>
                            <p>
                                Mobile development services for business
                                to provide convenient access to their
                                products and services.
                            </p>
                        </div>
                        <div className='easy-personel'>
                        <img src="heart-icon.svg" alt="" />
                            <h6>Personal Experience</h6>
                            <p>
                                Our team builds custom mobile apps for 
                                personalized user experiences that
                                match with your business goals.
                            </p>
                        </div>
                    </div>
                    <div className='second-container-phone'>
                        <img src="frame-photo@2x.png" alt="" />
                    </div>
                    <div className='second-container-box'>
                        <div className='easy-personel'>
                            <img src="easy-icon.svg" alt="" />
                            <h6>Easy Access</h6>
                            <p>
                                Mobile development services for business
                                to provide convenient access to their
                                products and services.
                            </p>
                        </div>
                        <div className='easy-personel'>
                        <img src="heart-icon.svg" alt="" />
                            <h6>Personal Experience</h6>
                            <p>
                                Our team builds custom mobile apps for 
                                personalized user experiences that
                                match with your business goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Third Section */}
            <section className='third-section'>
                <div className='third-section-header'>
                    <h1>Digital Marketing</h1>
                </div>
                <div className='third-section-img'>
                    <img src="marketing.png" alt="" />
                </div>
                <div className='flex-third-tiny'>
                    <div className='flex-tiny-text'>
                        <h6>Y E A R</h6>
                        <p>2022 - 2023</p>
                    </div>
                    <div className='flex-tiny-text'>
                        <h6>C L I E N T</h6>
                        <p>Gojun Retail</p>
                    </div>
                    <div className='flex-tiny-text'>
                        <h6>I N D U S T R Y</h6>
                        <p>Retail</p>
                    </div>
                    <div className='flex-tiny-text'>
                        <h6>S E R V I C E S</h6>
                        <p>Marketing Strategy, Data Analysis, Paid Ads</p>
                    </div>
                </div>
                <div className='challenge-con'>
                    <h5>Challenge</h5>
                    <p>
                        In today's digital age, having a strong online presence is crucial 
                        for businesses to succeed. Gojun Retail, a national retail chain, 
                        understands the importance of expanding their digital footprint to 
                        reach a wider audience and compete in the modern marketplace. However, 
                        they face the challenge of increasing their online presence and 
                        driving more traffic to their website. This challenge requires a 
                        comprehensive digital marketing strategy that utilizes data analysis 
                        and paid ads to target specific demographics and drive traffic to their website.
                    </p>
                    <p>
                        One of the main challenges for Gojun Retail is to stand out from the 
                        competition in the crowded online marketplace. With so many businesses vying
                        for attention, it can be difficult to attract and retain customers. This is 
                        where digital marketing comes in - by utilizing data analysis and paid ads, 
                        our team aims to target specific demographics and increase engagement with 
                        Gojun Retail's customers. Another challenge is to enhance Gojun Retail's online
                        visibility in the mobile era. With more and more people accessing websites 
                        through their mobile devices, it is crucial to have a mobile-friendly website
                        and an effective mobile marketing strategy. Our team will work to ensure that 
                        Gojun Retail's online presence is optimized for mobile devices, allowing them to
                        reach more customers.
                    </p>
                </div>
                <div className='solutions-strategy-con'>
                    <div className='tiny-con-solution'>
                        <h5>Solutions</h5>
                        <p>
                            To overcome the challenges of standing out in the crowded online marketplace 
                            and enhancing their online visibility in the mobile era, our team has 
                            developed a comprehensive digital marketing strategy for Gojun Retail. 
                            By utilizing data analysis and paid ads, we aim to target specific 
                            demographics and increase customer engagement with the brand. We will also 
                            optimize Gojun Retail's online presence for mobile devices, ensuring 
                            that their website is easily accessible and user-friendly for customers 
                            on-the-go. Our goal is to drive more traffic to their website and ultimately 
                            increase their online sales, helping them succeed in the modern marketplace.
                        </p>
                    </div>
                    <div className='tiny-con-strategy'>
                        <h5>Strategy</h5>
                        <ul>
                            <li>Marketing Data Analysis</li>
                            <li>Search Engine Optimization</li>
                            <li>Social Media Marketing</li>
                            <li>Paid Digital Ads</li>
                        </ul>
                    </div>
                </div>
                <div className='result-con'>
                    <h5>Results</h5>
                    <div className='result-flex-card'>
                        <div className='h4-h5-p-con'>
                            <div className='h4-circle'>
                                <h4>01</h4>
                            </div>
                            <h5>Increased Web Traffic</h5>
                            <p>
                                We were able to increase website 
                                traffic by 40% within the first 
                                6 months of the campaign.
                            </p>
                        </div>
                        <div className='h4-h5-p-con'>
                            <div className='h4-circle'>
                                <h4>02</h4>
                            </div>
                            <h5>Higher Search Engine Ranking</h5>
                            <p>
                                We were able to improve the website's 
                                search engine rankings significantly 
                                to the first page.
                            </p>
                        </div>
                        <div className='h4-h5-p-con'>
                            <div className='h4-circle'>
                                <h4>03  </h4>
                            </div>
                            <h5>Improved Engagement</h5>
                            <p>
                                Our social media and email marketing 
                                campaigns led to 80% increase in 
                                engagement rates.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Fourth Section */}
            <section className='fourth-section'>
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
            </section>
        </main>
      
    </div>
  )
}

export default Work
