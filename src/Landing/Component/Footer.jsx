import React from 'react'

const Footer = () => {
    return (
        <div>

            {/* Footer */}
            <footer className="site-footer style-1" id="footer">
                <img className="bg-shape1" src="images/home-banner/shape1.png" alt />
                <div className="footer-top background-luminosity" style={{ backgroundImage: 'url(images/background/bg1.jpg)' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="widget widget_about">
                                    <div className="footer-logo logo-white">
                                        <a href="index.html"><img src="images/logo-white.png" alt /></a>
                                    </div>
                                    <p>CryptoZone is a Crypto &amp; Crypto Website by DexignZone lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</p>
                                    <div className="dz-social-icon transparent space-10">
                                        <ul>
                                            <li><a target="_blank" className="fab fa-facebook-f" href=" https://www.facebook.com/share/1AFfdfKu5P/?mibextid=wwXIfr" /></li>
                                            <li><a target="_blank" className="fab fa-instagram" href=" https://www.instagram.com/powerhouse.brij?igsh=bHRra281cGxxbG5m&utm_source=qr" /></li>
                                            <li><a target="_blank" className="fab fa-twitter" href="https://x.com/ravalbrij1?s=21" /></li>
                                            <li><a target="_blank" className="fab fa-youtube" href="https://youtube.com/@letscraftit-z5y?si=QhMspT0m-x4_IPWm" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="widget widget_services">
                                    <h4 className="widget-title">Other Links</h4>
                                    <ul>
                                        <li><a href="./Aboutus">About Us</a></li>
                                        <li><a href="./Pricing">Pricing Plan</a></li>
                                        <li><a href="./Contactus">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="widget recent-posts-entry">
                                    <h4 className="widget-title">Blog Posts</h4>
                                    <div className="widget-post-bx">
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><a href="https://thenewscrypto.com/?gad_source=1&gclid=EAIaIQobChMIws7PrImEjAMVMk7_AR1EvjZ-EAAYASAAEgK7CvD_BwE">What is cryptocurrency and how does it work.</a></h6>
                                                <span className="post-date"> JUNE 18, 2022</span>
                                            </div>
                                        </div>
                                        <div className="post-separator" />
                                        <div className="widget-post clearfix">
                                            <div className="dz-info">
                                                <h6 className="title"><a href="https://thenewscrypto.com/?gad_source=1&gclid=EAIaIQobChMIws7PrImEjAMVMk7_AR1EvjZ-EAAYASAAEgK7CvD_BwE">A cryptocurrency is a digital currency.</a></h6>
                                                <span className="post-date"> AUGUST 22, 2022</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-12 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="widget widget_locations">
                                    <h4 className="widget-title">Locations</h4>
                                    <div className="clearfix">
                                        <h6 className="title">India</h6>
                                        <p>BRIJ & CRYPTO, PINCODE:388345, MOGARI , ANAND  ,GUJARAT, INDIA</p>
                                        <img src="images/footer/world-map-with-flags1.png" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer Bottom Part */}
                <div className="footer-bottom text-center">
                    <div className="container">
                        <span className="copyright-text">Copyright © 2022 <a href="https://dexignzone.com/" target="_blank">DexignZone</a>. All rights reserved.</span>
                    </div>
                </div>
            </footer>
            {/* Footer End */}


        </div>
    )
}

export default Footer