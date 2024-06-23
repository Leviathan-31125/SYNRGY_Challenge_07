import React from 'react'

const HeaderLandingPage = () => {
  return (
    <nav>
      <div className="d-flex justify-content-between pt-3">
        <div className="navbar-brand brand-custome"></div>
        <div className="menu-item d-flex align-items-center gap-4">
          <div><a href="#our-service">Our Service</a></div>
          <div><a href="#why-us">Why Us</a></div>
          <div><a href="#testimonial">Testimonial</a></div>
          <div><a href="#faq">FAQ</a></div>
          <a href="/login" style={{textDecoration: 'none'}}><button className="btn btn-success my-button">Login as Admin</button></a>
        </div>

        <div className="sidebar-menu">
          <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <i className="bi bi-list"></i>
          </button>

          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                  <h5 id="offcanvasRightLabel">BCR</h5>
                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>

              <div className="offcanvas-body">
                  <div className="sidebar-item d-flex flex-column gap-4">
                      <div><a href="#our-service">Our Service</a></div>
                      <div><a href="#why-us">Why Us</a></div>
                      <div><a href="#testimonial">Testimonial</a></div>
                      <div><a href="#faq">FAQ</a></div>
                      <button className="btn btn-success my-button">Register</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderLandingPage
