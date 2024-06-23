import React from 'react'

const WhyUs = () => {
  return (
    <div>
        <h3 data-aos="fade-up-right">Why Us?</h3>  
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <div className="special-service d-flex justify-content-between gap-3">
            <div className="card" data-aos="flip-right" data-aos-duration="2000">
                <div className="card-body d-flex flex-column gap-3">
                    <div className="position-relative" style={{backgroundColor: '#F9CC00'}}>
                        <img src="./svg/fi_thumbs-up.svg" className="position-absolute top-50 start-50 translate-middle" alt='thumb'/>
                    </div>
                    <h5 className="t">Mobil Lengkap</h5>
                    <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </div>
            </div>
            <div className="card" data-aos="flip-right" data-aos-duration="2000">
                <div className="card-body d-flex flex-column gap-3">
                    <div className="position-relative" style={{backgroundColor: '#FA2C5A'}}>
                        <img src="./svg/fi_tag.svg" className="position-absolute top-50 start-50 translate-middle" alt='tag'/>
                    </div>
                    <h5 className="t">Harga Murah</h5>
                    <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </div>
            </div>
            <div className="card" data-aos="flip-right" data-aos-duration="2000">
                <div className="card-body d-flex flex-column gap-3">
                    <div className="position-relative" style={{ackgroundColor: '#0D28A6'}}>
                        <img src="./svg/fi_clock.svg" className="position-absolute top-50 start-50 translate-middle" alt='clock'/>
                    </div>
                    <h5 className="t">Layanan 24 Jam</h5>
                    <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </div>
            </div>
            <div className="card" data-aos="flip-right" data-aos-duration="2000">
                <div className="card-body d-flex flex-column gap-3">
                    <div className="position-relative" style={{backgroundColor: '#5CB85F'}}>
                        <img src="./svg/fi_award.svg" className="position-absolute top-50 start-50 translate-middle" alt='award'/>
                    </div>
                    <h5 className="t">Sopir Profesional</h5>
                    <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyUs
