import React from 'react'
import Header from '../Component/Header'

const Home = () => {
    return (
        <div>
            <Header/>
                
          
            	{/* Page Content Start */}
            <div className="page-content">
                {/* Main Banner Start */}
                <div className="main-bnr style-1">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 text-center">
                                <h1 className="wow fadeInUp" data-wow-delay="0.2s">Your Globel OTC desk for <br />Cryptocurrencies</h1>
                                <p className="text text-primary wow fadeInUp" data-wow-delay="0.4s">Transfer USD, EUR, or Crypto and start trading today!</p>
                                <a href="Aboutus" className="btn space-lg btn-gradient btn-shadow btn-primary wow fadeInUp" data-wow-delay="0.6s">Get Started</a>
                                <ul className="image-before">
                                    <li className="left-img"><img src="images/home-banner/img1.png" alt /></li>
                                    <li className="right-img"><img src="images/home-banner/img2.png" alt /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <img className="bg-shape1" src="images/home-banner/shape1.png" alt />
                    <img className="bg-shape2" src="images/home-banner/shape1.png" alt />
                    <img className="bg-shape3" src="images/home-banner/shape3.png" alt />  
                    <img className="bg-shape4" src="images/home-banner/shape3.png" alt />
                </div>
                {/* Main Banner End */}
                {/* Crypto Coins Start */}
                <div className="clearfix bg-primary-light">
                    <div className="container">
                        <div className="currancy-wrapper">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon-bx-wraper style-1 box-hover">
                                        <div className="icon-media">
                                            <img src="images/coins/coin4.png" alt />
                                            <div className="icon-info">
                                                <h5 className="title">Bitcoin</h5>
                                                <span>BTC</span>
                                            </div>
                                        </div>
                                        <div className="icon-content">
                                            <ul className="price">
                                                <li>
                                                    <h6 className="mb-0 amount">$16,048.40</h6>
                                                    <span className="text-red percentage">-1.26%</span>
                                                </li>
                                                <li>
                                                    <span>Latest price</span>
                                                    <span>24h change</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="icon-bx-wraper style-1 box-hover">
                                        <div className="icon-media">
                                            <img src="images/coins/coin3.png" alt />
                                            <div className="icon-info">
                                                <h5 className="title">Ethereum</h5>
                                                <span>ETH</span>
                                            </div>
                                        </div>
                                        <div className="icon-content">
                                            <ul className="price">
                                                <li>
                                                    <h6 className="mb-0 amount">$1,122.44</h6>
                                                    <span className="text-red percentage">-1.55%</span>
                                                </li>
                                                <li>
                                                    <span>Latest price</span>
                                                    <span>24h change</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="icon-bx-wraper style-1 box-hover">
                                        <div className="icon-media">
                                            <img src="images/coins/coin1.png" alt />
                                            <div className="icon-info">
                                                <h5 className="title">Tether</h5>
                                                <span>USDT</span>
                                            </div>
                                        </div>
                                        <div className="icon-content">
                                            <ul className="price">
                                                <li>
                                                    <h6 className="mb-0 amount">$1.00</h6>
                                                    <span className="text-green percentage">0.0099%</span>
                                                </li>
                                                <li>
                                                    <span>Latest price</span>
                                                    <span>24h change</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Crypto Coins End */}
                {/* Why Trust Us Start */}
                <section className="clearfix section-wrapper1 bg-primary-light">
                    <div className="container">
                        <div className="content-inner-1">
                            <div className="section-head text-center">
                                <h2 className="title">Why Trust Us?</h2>
                                <p>Trust comes from experience. Many of the pleased customers may function as a guide for you.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.2s">
                                    <div className="icon-bx-wraper style-2">
                                        <div className="icon-media">
                                            <img src="images/icons/wallet.svg" alt />
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="title">Buy Cryptocurrency with cash</h4>
                                                
                                            <p>To buy cryptocurrency with cash, you can use peer-to-peer (P2P) platforms like LocalBitcoins or Paxful, where you can find sellers who accept cash payments. Alternatively, visit cryptocurrency ATMs that allow you to purchase crypto with cash directly.</p>
                                            <a className="btn btn-primary btn-gradient btn-shadow" href="Aboutus">About US</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="icon-bx-wraper style-2">
                                        <div className="icon-media">
                                            <img src="images/icons/friend.svg" alt />
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="title">Cryptocurrency Consultancy</h4>
                                            <p>Cryptocurrency consultancy offers expert advice on investing, securing assets, and navigating regulations in the crypto space. Consultants guide clients through market trends, risk management, and blockchain technology to make informed decisions.</p>
                                            <a className="btn btn-primary btn-gradient btn-shadow" href="Aboutus">About Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <img className="bg-shape1" src="images/home-banner/shape1.png" alt />
                </section>
                {/* Why Trust Us End */}
                {/* Crypto From And Services Start */}
                <section className="content-inner bg-light icon-section section-wrapper2">
                    <div className="container">
                        <div className="section-head text-center">
                            <h2 className="title">One-stop solution to buy and sell <span className="text-primary"> cryptocurrency </span> with Cash</h2>
                        </div>
                        <div className="row sp60">
                            <div className="col-xl-4 col-md-6 m-b60 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="icon-bx-wraper style-3 text-center">
                                    <div className="icon-media">
                                        <img src="images/icons/icon9.svg" alt />
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title">Competitive Pricing</h4>
                                        <p className="m-b0">"Initially setting a higher price and then gradually lowering it over time to capture different segments of the market."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 m-b60 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="icon-bx-wraper style-3 text-center">
                                    <div className="icon-media">
                                        <img src="images/icons/icon10.svg" alt />
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title">Support</h4>
                                        <p className="m-b0">"Support provides assistance to customers, helping them resolve issues and ensuring a positive experience."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 m-b60 wow fadeInUp" data-wow-delay="0.6s">
                                <div className="icon-bx-wraper style-3 text-center">
                                    <div className="icon-media">
                                        <img src="images/icons/icon11.svg" alt />
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title">Fast and Easy KYC</h4>
                                        <p className="m-b0">"Fast and easy KYC streamlines customer identity verification, making the process quick and simple while ensuring compliance."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 m-b60 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="icon-bx-wraper style-3 text-center">
                                    <div className="icon-media">
                                        <img src="images/icons/icon12.svg" alt />
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title">Security</h4>
                                        <p className="m-b0">"Security involves protecting systems and data from unauthorized access and threats to ensure safety and privacy.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 m-b60 wow fadeInUp" data-wow-delay="1.0s">
                                <div className="icon-bx-wraper style-3 text-center">
                                    <div className="icon-media">
                                        <img src="images/icons/icon13.svg" alt />
                                    </div>
                                    <div className="icon-content">
                                        <h4 className="title">Fast Transaction</h4>
                                        <p className="m-b0">"Every minute counts when buying or selling in cryptocurrencies. Complete your transactions as quickly as possible."</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-6 m-b60 wow fadeInUp" data-wow-delay="1.2s">
                                <div className="icon-bx-wraper style-4" style={{ backgroundImage: 'url(images/about/pic1.jpg)' }}>
                                    <div className="inner-content">
                                        <div className="icon-media m-b30">
                                            <img src="images/icons/support1.png" alt />
                                        </div>
                                        <div className="icon-content">
                                            <a href="./Contactus" className="btn btn-primary">Call Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="bg-shape1" src="images/home-banner/shape1.png" alt />
                </section>
                {/* Crypto From And Services End */}
                {/* From Our Blog Start */}
                <section className="content-inner bg-white blog-wrapper">
                    <img className="bg-shape1" src="images/home-banner/shape1.png" alt />
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12">
                                <div className="section-head wow fadeInUp" data-wow-delay="0.2s">
                                    <h6 className="sub-title text-primary">FROM OUR BLOG</h6>
                                    <h2 className="title">Recent News &amp; Updates</h2>
                                </div>
                                <div className="dz-card style-1 blog-half m-b30 wow fadeInUp" data-wow-delay="0.4s">
                                    <div className="dz-media">
                                        <a href="https://thenewscrypto.com/?gad_source=1&gclid=EAIaIQobChMIws7PrImEjAMVMk7_AR1EvjZ-EAAYASAAEgK7CvD_BwE"><img src="images/blog/pic1.jpg" alt /></a>
                                        <ul className="dz-badge-list">
                                            <li><a href="javascript:void(0);" className="dz-badge">14 Fan 2024</a></li>
                                        </ul>
                                       
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <a href="javascript:void(0);">
                                                        <img src="images/avatar/avatar1.jpg" alt />
                                                        <span>By Gita</span>
                                                    </a>
                                                </li>
                                                <li className="post-date"><a href="javascript:void(0);"> 12 May 2024</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="dz-title"><a href="https://thenewscrypto.com/?gad_source=1&gclid=EAIaIQobChMIws7PrImEjAMVMk7_AR1EvjZ-EAAYASAAEgK7CvD_BwE"> Coins Which Avoid In Cryptocurrency.</a></h4>
                                        <p className="m-b0">Newly launched meme coins with no real utility,Coins with extremely low market capitalization and low trading volume.</p>
                                    </div>
                                </div>
                                <div className="dz-card style-1 blog-half m-b30 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="dz-media">
                                        <a href="https://thenewscrypto.com/?gad_source=1&gclid=EAIaIQobChMIws7PrImEjAMVMk7_AR1EvjZ-EAAYASAAEgK7CvD_BwE"><img src="images/blog/pic2.jpg" alt /></a>
                                        <ul className="dz-badge-list">
                                            <li><a href="javascript:void(0);" className="dz-badge">14 Fan 2024</a></li>
                                        </ul>
                                       
                                    </div>
                                    <div className="dz-info">
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <a href="javascript:void(0);">
                                                        <img src="images/avatar/avatar2.jpg" alt />
                                                        <span>By Shivani</span>
                                                    </a>
                                                </li>
                                                <li className="post-date"><a href="javascript:void(0);"> 12 May 2024</a></li>
                                            </ul>
                                        </div>
                                        <h4 className="dz-title"><a href="https://thenewscrypto.com/?gad_source=1&gclid=EAIaIQobChMIws7PrImEjAMVMk7_AR1EvjZ-EAAYASAAEgK7CvD_BwE">Things That Make You Love Cryptocurrency.</a></h4>
                                        <p className="m-b0">This market is extremely volatile.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-12 m-b30 wow fadeInUp" data-wow-delay="0.8s">
                                <div className="dz-card style-2" style={{ backgroundImage: 'url(images/blog/blog-ig.png)' }}>
                                    <div className="dz-category">
                                        <ul className="dz-badge-list">
                                            <li><a href="javascript:void(0);" className="dz-badge">14 Fan 2024</a></li>
                                        </ul>
                                    </div>
                                    <div className="dz-info">
                                        <h2 className="dz-title"><a href="https://thenewscrypto.com/?gad_source=1&gclid=EAIaIQobChMIws7PrImEjAMVMk7_AR1EvjZ-EAAYASAAEgK7CvD_BwE" className="text-white">More News of crypto currency.</a></h2>
                                        <div className="dz-meta">
                                            <ul>
                                                <li className="post-author">
                                                    <a href="javascript:void(0);">
                                                        <img src="images/avatar/avatar3.jpg" alt />
                                                        <span>By Madhuri</span>
                                                    </a>
                                                </li>
                                                <li className="post-date"><a href="javascript:void(0);"> 12 May 2024</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* From Our Blog End */}
            </div>
            {/* Page Content End */}
             

        </div>

    )
}

export default Home