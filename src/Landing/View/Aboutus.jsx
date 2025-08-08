import React from 'react';

const Aboutus = () => {
  return (
    <div>
      <div className="page-content">
        {/* Banner */}
        <div className="dz-bnr-inr style-1 text-center">
          <div className="container">
            <div className="dz-bnr-inr-entry">
              <h1>About Us</h1>
              <p className="text">Transfer USD, EUR, or Crypto and start trading today!</p>
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">About Us</li>
                </ul>
              </nav>
            </div>
          </div>
          <img className="bg-shape1" src="images/home-banner/shape1.png" alt="" />
          <img className="bg-shape2" src="images/home-banner/shape1.png" alt="" />
          <img className="bg-shape3" src="images/home-banner/shape3.png" alt="" />
          <img className="bg-shape4" src="images/home-banner/shape3.png" alt="" />
        </div>

        {/* About Section */}
        <section className="content-inner about-sec bg-primary-light">
          <div className="container">
            <div className="row about-bx2 style-1 align-items-center">
              <div className="col-lg-6">
                <div className="dz-media">
                  <div className="row align-items-end">
                    <div className="col-6">
                      <div className="image-box image-box-1">
                        <img src="images/about/about-4.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="image-box image-box-2">
                        <img src="images/about/about-2.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <div className="image-box image-box-3">
                        <img src="images/about/about-3.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="image-box image-box-4">
                        <img src="images/about/about-1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 about-content ps-lg-5 m-b30">
                <div className="section-head">
                  <h2 className="title">The World’s 1st ICO Platform That Offers Rewards</h2>
                  <p className="m-0 lh-base">We are an independent gym that is committed to working with you to gain the results you want. Whether your aim is to lose weight or gain strength.</p>
                </div>
                <a href="./contactus" className="btn btn-lg btn-primary btn-shadow text-uppercase">Contact Us</a>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="content-inner p-0 bg-primary-light video-bx-wrapper">
          <img className="bg-shape1" src="images/home-banner/shape1.png" alt="" />
          <div className="container">
            <div className="video-bx style-1">
              <div className="video-media">
                <img src="images/about/videobx.png" alt="" />
                <a href="https://www.youtube.com/watch?v=cfmQFW1DpA0" className="popup-youtube play-icon">
                  <svg width={30} height={30} viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.25 3.75L23.75 15L6.25 26.25V3.75Z" stroke="#9467FE" strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="content-inner bg-white blog-wrapper">
          <img className="bg-shape1" src="images/home-banner/shape1.png" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-12">
                <div className="section-head">
                  <h6 className="sub-title text-primary">FROM OUR BLOG</h6>
                  <h2 className="title">Recent News &amp; Updates</h2>
                </div>
                <div className="dz-card style-1 blog-half m-b30">
                  <div className="dz-media">
                    <a href="https://thenewscrypto.com"><img src="images/blog/pic1.jpg" alt="" /></a>
                    <ul className="dz-badge-list">
                      <li><a className="dz-badge">14 Feb 2025</a></li>
                    </ul>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li className="post-author">
                          <a href="javascript:void(0);">
                            <img src="images/avatar/avatar1.jpg" alt="" />
                            <span>By Nirali</span>
                          </a>
                        </li>
                        <li className="post-date"><a href="javascript:void(0);">12 May 2025</a></li>
                      </ul>
                    </div>
                    <h4 className="dz-title"><a href="https://thenewscrypto.com">Four Coins Which Shall Buy In This Time</a></h4>
                    <p className="m-b0">BitCoin ($1.6T), Cardano ($25.7B), IP ($30.9B), Shiba ($6.9B).</p>
                  </div>
                </div>
                <div className="dz-card style-1 blog-half m-b30">
                  <div className="dz-media">
                    <a href="https://thenewscrypto.com"><img src="images/blog/pic2.jpg" alt="" /></a>
                    <ul className="dz-badge-list">
                      <li><a className="dz-badge">14 Feb 2025</a></li>
                    </ul>
                  </div>
                  <div className="dz-info">
                    <div className="dz-meta">
                      <ul>
                        <li className="post-author">
                          <a href="javascript:void(0);">
                            <img src="images/avatar/avatar2.jpg" alt="" />
                            <span>By Garima</span>
                          </a>
                        </li>
                        <li className="post-date"><a href="javascript:void(0);">12 May 2025</a></li>
                      </ul>
                    </div>
                    <h4 className="dz-title"><a href="https://thenewscrypto.com">Why do you like cryptocurrency</a></h4>
                    <p className="m-b0">It is extremely volatile and easy to access.</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-12 m-b30">
                <div className="dz-card style-2" style={{ backgroundImage: 'url(images/blog/blog-ig.png)' }}>
                  <div className="dz-category">
                    <ul className="dz-badge-list">
                      <li><a className="dz-badge">14 Jun 2025</a></li>
                    </ul>
                  </div>
                  <div className="dz-info">
                    <h2 className="dz-title"><a href="https://thenewscrypto.com" className="text-white">News of crypto currency</a></h2>
                    <div className="dz-meta">
                      <ul>
                        <li className="post-author">
                          <a href="javascript:void(0);">
                            <img src="images/avatar/avatar3.jpg" alt="" />
                            <span>By Jasmin</span>
                          </a>
                        </li>
                        <li className="post-date"><a href="javascript:void(0);">12 May 2025</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <button className="scroltop icon-up" type="button" style={{ display: 'inline-block' }}>
          <i className="fas fa-arrow-up" />
        </button>
      </div>
    </div>
  );
};

export default Aboutus;
