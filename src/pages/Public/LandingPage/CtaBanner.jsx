import React from 'react'

const CtaBanner = () => {
  return (
    <div className="container cta-banner-layout text-center p-5" data-aos="flip-left" data-aos-duration="1500" data-aos-easing="ease-out-cubic">
        <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        <a href="/cars#search-button" style={{textDecoration: 'none'}}><button className="btn btn-success my-button">Mulai Sewa Mobil</button></a>
    </div>
  )
}

export default CtaBanner
