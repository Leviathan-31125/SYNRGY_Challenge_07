import React from 'react'

const Jumbotron = () => {
  return (
    <div className="jumbotron-custom d-flex gap-5 justify-content-between align-items-center">
        <div className="jumbotron jumbotron-fluid w-50">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="lead">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. 
                Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <a href="/cars#search-button" style={{textDecoration: 'none'}}><button className="btn btn-success">Mulai Sewa Mobil</button></a>
        </div>
        <div className="align-self-end">
            <img src="./images/img_car.png" className="img-fluid" alt="Binar Car"/>
        </div>
    </div>
  )
}

export default Jumbotron
