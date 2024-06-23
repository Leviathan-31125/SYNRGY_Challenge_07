import React from 'react'

const FooterLandingPage = () => {
  return (
    <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
            <div className="col">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="col">
                <p className="action-menu"><a href="#our-service">Our services</a></p>
                <p className="action-menu"><a href="#why-us">Why Us</a></p>
                <p className="action-menu"><a href="#testimonial">Testimonial</a></p>
                <p className="action-menu"><a href="#faq">FAQ</a></p>
            </div>
            <div className="col">
                <p>Connect with us</p>
                <div className="d-flex gap-2">
                    <div className="social-media"><i className="bi bi-facebook"></i></div>
                    <div className="social-media"><i className="bi bi-instagram"></i></div>
                    <div className="social-media"><i className="bi bi-twitter"></i></div>
                    <div className="social-media"><i className="bi bi-envelope"></i></div>
                    <div className="social-media"><i className="bi bi-twitch"></i></div>
                </div>
            </div>
            <div className="col">
                <p>Copyright Binar 2022</p>
                <div className="brand-custome"></div>
            </div>
        </div>
    </div>
  )
}

export default FooterLandingPage
