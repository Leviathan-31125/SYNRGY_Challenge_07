import React from 'react';
import './style.css';
import Swal from 'sweetalert2';
import axios from 'axios';
import { BASE_API_URL } from '../../helper/general';
import { useNavigate } from 'react-router-dom';

const CardCar = ({car, adminStatus, refresh, setRefresh}) => {
  const navigate = useNavigate();
  
  const handleDelete = (carId) => {
    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this car!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
        if(result.isConfirmed) deleteCar(carId)
    });
  };

  const deleteCar = async (carId) => {
    const optionsDelete = {
        method: 'delete',
        url: `${BASE_API_URL}/cars/${carId}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await axios.request(optionsDelete)
     .then(() => {
        Swal.fire(
            'Deleted!',
            'Your car has been deleted.',
            'success'
        );
        setRefresh(!refresh)
     })
     .catch((error) => {
        console.log(error)
     })
  }

  return (
    <div className={adminStatus ? "card-result-admin" : "card-result" }>
        <div className="content">
            <img src={car.image} className="img-fluid" alt='car'/>
            <div className="top-info">
                <div style={{color: 'black', fontSize: '14px', fontFamily: 'Helvetica', fontWeight: "400", lineHeight: '20px', wordWrap: 'break-word'}}>{car.type}/{car.model}</div>
                <div style={{alignSelf: 'stretch', color: 'black', fontSize: '16px', fontFamily: 'Helvetica', fontWeight: '700', lineHeight: '24px', wordWrap: "break-word"}}>Rp {car.rentPerDay} / hari</div>
                <div style={{width: '301px', color: 'black', fontSize: '14px', fontFamily: 'Helvetica', fontWeight: '300', lineHeight: '20px', wordWrap: 'break-word'}}>{car.description}</div>
            </div>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', display: 'inline-flex'}}>
                <div style={{width: '20px', height: '20px', position: 'relative'}}>
                    <div style={{width: '2.50px', height: '4.89px', left: '16.67px', top: '12.61px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                    <div style={{width: '13.33px', height: '5px', left: '0.83px', top: '12.50px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                    <div style={{width: '2.51px', height: '6.46px', left: '13.33px', top: '2.61px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                    <div style={{width: '6.67px', height: '6.67px', left:'4.17px', top: '2.50px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                </div>
                <div style={{flex: '1 1 0', color: 'black', fontSize: '14px', fontFamily: 'Helvetica', fontWeight: '300', lineHeight: '20px', wordWrap: 'break-word'}}>{car.capacity} orang</div>
            </div>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', display: 'inline-flex'}}>
                <div style={{width: '20px', height: '20px', position: 'relative'}}>
                    <div style={{width: '5px', height: '5px', left: '7.50px', top: '7.50px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                    <div style={{width: '18.33px', height: '18.33px', left: '0.83px', top: '0.83px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                </div>
                <div style={{flex: '1 1 0', color: 'black', fontSize: '14px', fontFamily: 'Helvetica', fontWeight: '300', lineHeight: '20px', wordWrap: 'break-word'}}>{car.transmission}</div>
            </div>
            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: '8px', display: 'inline-flex'}}>
                <div style={{width: '20px', height: '20px', position: 'relative'}}>
                    <div style={{width: '15px', height: '15px', left: '2.50px', top: '3.33px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                    <div style={{width: '15px', height: '0px', left: '2.50px', top: '8.33px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                    <div style={{width: '0px', height: '3.33px', left: '13.33px', top: '1.67px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                    <div style={{width: '0px', height: '3.33px', left: '6.67px', top: '1.67px', position: 'absolute', border: '1px #8A8A8A solid'}}></div>
                </div>
                <div style={{flex: '1 1 0', color: 'black', fontSize: '14px', fontFamily: 'Helvetica', fontWeight: '300', lineHeight: '20px', wordWrap: 'break-word'}}>Tahun {car.year}</div>
            </div>
        </div>
        {
            adminStatus ? 
            <div className='d-flex gap-2'>
                <div className="btn-update" role="button" onClick={() => navigate('/admin/cars/update-cars', {state: {data: car}})}>Update Mobil</div>
                <div className="btn-delete" role="button" onClick={() => handleDelete(car.id)}>Hapus Mobil</div>
            </div>
            :
            <div className="btn-choose" role="button">Pilih Mobil</div>
        }
    </div>
  )
}

export default CardCar
