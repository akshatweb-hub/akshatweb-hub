import React from 'react'
// import Home from '../View/Home'

const Header = () => {
  return (
    <div>
{/* Header */}
<header className="site-header mo-left header header-transparent style-1">
  {/* Main Header */}
  <div className="sticky-header main-bar-wraper navbar-expand-lg">
    <div className="main-bar clearfix">
      <div className="container clearfix">
        {/* Website Logo */}
        <div className="logo-header">
          <a href="index.html" className="logo-dark"><img src="images/logo.png" alt /></a>
          <a href="index.html" className="logo-light"><img src="images/logo-white.png" alt /></a>
        </div>
        {/* Nav Toggle Button Strat */}
        <button className="navbar-toggler collapsed navicon justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
        {/* Nav Toggle Button End */}
        {/* Extra Nav Start */}
        <div className="extra-nav">
          <div className="extra-cell">
            <a className="btn btn-outline-primary text-white" target="_blank" href="LoginForm">Login</a>
            <a className="btn btn-primary btn-gradient btn-shadow" target="_blank" href="LoginForm">Register</a>
          </div>
        </div>
        {/* Extra Nav End */}
        <div className="header-nav navbar-collapse collapse justify-content-end" id="navbarNavDropdown">
          {/* Mobile Sidebar Logo */}
          <div className="logo-header mostion">
            <a href="index.html" className="logo-dark"><img src="images/logo.png" alt /></a>
          </div>
          {/* Navbar nav */}
          <ul className="nav navbar-nav navbar">
            <li><a href="/#">Home</a></li>
            <li><a href="Aboutus">About Us</a></li>
            <li><a href="pricing">Pricing</a></li>
            <li><a href="Contactus">Contact Us</a></li>
          </ul>
          {/* Mobile Sidebar bottom */}
          <div className="header-bottom">
            <div className="dz-social-icon">
              <ul>
                <li><a target="_blank" className="fab fa-facebook-f" href="https://www.facebook.com/" /></li>
                <li><a target="_blank" className="fab fa-twitter" href="https://twitter.com/" /></li>
                <li><a target="_blank" className="fab fa-linkedin-in" href="https://www.linkedin.com/" /></li>
                <li><a target="_blank" className="fab fa-instagram" href="https://www.instagram.com/" /></li>
              </ul>
            </div>	
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Main Header End */}
</header>
{/* Header */}


    </div>
  )
}

export default Header