import React from 'react'

const Contactus = () => {
  return (
    <div>{/* Page Content Start */}
      <div className="page-content">
        {/* Banner start */}
        <div className="dz-bnr-inr style-1 text-center">
          <div className="container">
            <div className="dz-bnr-inr-entry">
              <h1>Contact Us</h1>
              {/* Breadcrumb Row */}
              <nav aria-label="breadcrumb" className="breadcrumb-row">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                </ul>
              </nav>
              {/* Breadcrumb Row End */}
            </div>
          </div>
          <img className="bg-shape1" src="images/home-banner/shape1.png" alt />
          <img className="bg-shape2" src="images/home-banner/shape1.png" alt />
          <img className="bg-shape3" src="images/home-banner/shape3.png" alt />
          <img className="bg-shape4" src="images/home-banner/shape3.png" alt />
        </div>
        {/* Banner End */}
        {/* Contact form sectio starts from here */}
        <section className="content-inner contact-form-wraper style-1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-5 col-lg-5 m-b30">
                <div className="info-box">
                  <div className="info">
                    <h2>Contact Information</h2>
                    <p className="font-18">Fill up the form and our team will get back to you within 24 hours.</p>
                  </div>  
                  <div className="widget widget_about">
                    <div className="widget widget_getintuch">
                      <ul>
                        <li>
                          <i className="fa fa-phone" />
                          <span>8866617158<br /></span>
                        </li>
                        <li>
                          <i className="fa fa-envelope" />
                          <span>akshatptl17@gmail.com <br /></span>
                        </li>
                        <li>
                          <i className="fas fa-map-marker-alt" />
                          <span> Address= At:Kalol Dist:Panchmahals Stat:Gujarat <br /></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="social-box dz-social-icon style-3">
                    <h6>Our Socials</h6>
                    <ul className="social-icon">
                      
                      <li><a className="social-btn" target="_blank" href="https://www.instagram.com/"><i className="fa-brands fa-instagram" /></a></li>
                      <li><a className="social-btn" target="_blank" href="https://x.com/akshat_pat36179"><i className="fa-brands fa-twitter" /></a></li>
                      
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="contact-box">
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-4">
                        <h2 className="mb-0">Get In touch</h2>
                        <p className="mb-0 font-18 text-primary">We are here for you. How we can help?</p>
                      </div>
                      <form className="dzForm" method="POST" action="https://cryptozone.dexignzone.com/frontend/xhtml/script/contact_smtp.php">
                        <div className="dzFormMsg" />
                        <input type="hidden" className="form-control" name="dzToDo" defaultValue="Contact" />
                        <div className="row">
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input name="dzFirstName" required type="text" className="form-control" placeholder="First Name" />
                          </div>
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input name="dzLastName" type="text" className="form-control" placeholder="Last Name" />
                          </div>
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input name="dzEmail" required type="text" className="form-control" placeholder="Email Address" />
                          </div>
                          <div className="col-xl-6 mb-3 mb-md-4">
                            <input name="dzPhoneNumber" required type="text" className="form-control" placeholder="Phone No." />
                          </div>
                          <div className="col-xl-12 mb-3 mb-md-4">
                            <textarea name="dzMessage" required className="form-control" placeholder="Message" defaultValue={""} />
                          </div>
                          <div className="col-xl-12 mb-3 mb-md-4">
                            <div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback" />
                            <input className="form-control d-none" style={{ display: 'none' }} data-recaptcha="true" required data-error="Please complete the Captcha" />
                          </div>
                          <div className="col-xl-12">
                            <button name="submit" type="submit" value="Submit" className="btn btn-primary">Submit Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact form section ends from here */}
      </div>
      {/* Page Content End */}

    </div>
  )
}

export default Contactus