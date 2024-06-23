import React from 'react'

const OurService = () => {
  return (
    <div className="d-flex justify-content-center align-items-center content-service" data-aos="fade-up">
        <img src="./images/img_service.png" alt="Binar Car Serivice" className="img-fluid" style={{width: '400px'}}/>
        <div className="service-content">
            <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
            <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, 
                kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <div>
                <div className="d-flex align-items-center gap-3">
                    <div className="bullet position-relative">
                        <img src="./svg/check.svg" className="position-absolute top-50 start-50 translate-middle" alt='check'/>
                    </div>
                    Sewa Mobil Dengan Supir di Bali 12 Jam
                </div>
                <div className="d-flex align-items-center gap-3">
                    <div className="bullet position-relative">
                        <img src="./svg/check.svg" className="position-absolute top-50 start-50 translate-middle" alt='check'/>
                    </div>
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                </div>
                <div className="d-flex align-items-center gap-3">
                    <div className="bullet position-relative">
                        <img src="./svg/check.svg" className="position-absolute top-50 start-50 translate-middle" alt='check'/>
                    </div>
                    Sewa Mobil Jangka Panjang Bulanan
                </div>
                <div className="d-flex align-items-center gap-3">
                    <div className="bullet position-relative">
                        <img src="./svg/check.svg" className="position-absolute top-50 start-50 translate-middle" alt='check'/>
                    </div>
                    Gratis Antar - Jemput Mobil di Bandara
                </div>
                <div className="d-flex align-items-center gap-3">
                    <div className="bullet position-relative">
                        <img src="./svg/check.svg" className="position-absolute top-50 start-50 translate-middle" alt='check'/>
                    </div>
                    Layanan Airport Transfer / Drop In Out
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurService
