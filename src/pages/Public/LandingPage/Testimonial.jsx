import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonial = () => {
  const options = {
    loop: true,
    center: true,
    items: 2,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 450,
    nav: true,
    navText: [
        `<i class="bi bi-chevron-left" ></i>`,
        `<i class="bi bi-chevron-right"></i>`
    ],
    navClass: ['btn btn-success button-nav rounded-circle mx-2 mb-3', 'btn btn-success button-nav rounded-circle mx-2 mb-3'],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
  };

  return (
    <div>
        <center>
            <h2 className="fs-3 fw-bold">Testimonial</h2>
            <p>Berbagai review positif dari para pelanggan kami</p>
        </center>
        <OwlCarousel className='owl-theme owl-carousel' {...options}>
            <div className="item">
                <div className="row">
                <div className="col-md-2 col-sm-12 text-center my-auto">
                    <img src="./images/img_photo.png" className="testimonial-image testimonial-image rounded-circle" alt="GambarPhoto1"/>
                </div>
                <div className="col-md d-flex flex-column">
                    <div className="star">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    </div>
                    
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, incidunt odit? Exercitationem earum officia est. Dolore nobis totam quia dolores ad velit tempora accusamus maiores eligendi, illo quidem modi fugit.</p>
                    <p className="user fw-bold">John Dee 32, Turen</p>
                </div>
                </div>
            </div>
        
            <div className="item">
                <div className="row">
                <div className="col-md-2 text-center my-auto">
                    <img src="./images/img_photo (1).png" className="testimonial-image rounded-circle" alt="GambarPhoto2"/>
                </div>
                <div className="col-md d-flex flex-column align-center justify-content-center">
                    <div className="star">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    </div>
                    
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, incidunt odit? Exercitationem earum officia est. Dolore nobis totam quia dolores ad velit tempora accusamus maiores eligendi, illo quidem modi fugit.</p>
                    <p className="user fw-bold">John Dee 32, Sedayu</p>
                </div>
                </div>
            </div>
        
            <div className="item">
                <div className="row">
                <div className="col-md-2 text-center my-auto mx-auto">
                    <img src="./images/img_photo (2).png" className="testimonial-image rounded-circle" alt="GambarPhoto3"/>
                </div>
                <div className="col-md d-flex flex-column align-center justify-content-center">
                    <div className="star">
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    <span className="star">&#9733;</span>
                    </div>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis necessitatibus aspernatur alias ab! Molestiae in dolores voluptates alias odit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum.</p>
                    <p className="user fw-bold">Handy, Malang</p>
                </div>
                </div>
            </div>
        </OwlCarousel>
    </div>
  )
}

export default Testimonial
