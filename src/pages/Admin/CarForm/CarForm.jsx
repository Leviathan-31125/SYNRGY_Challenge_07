import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/NavBar/Navbar'
import SideBar from '../../../components/SideBar/SideBar'
import { useLocation, useNavigate } from 'react-router-dom'
import { BASE_API_URL } from '../../../helper/general'
import axios from 'axios'
import Swal from 'sweetalert2'
import { v4 as uuid } from 'uuid';

const CarForm = ({statusUpdate}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const car = location.state === null ? null : location.state.data;
  const [detailCar, setDetailCar] = useState({
    id: null,
    plate: "",
    manufacture: "",
    model: "",
    image: "",
    rentPerDay: "",
    capacity: "",
    description: "",
    availableAt: "",
    transmission: "DEFAULT",
    available: "DEFAULT",
    type: "",
    year: "",
    options: [],
    specs: []
  });

  const upsertHandler = () => {
    Swal.fire({
        title: 'Are you sure?',
        text: statusUpdate? 'The action will updated this car!' : 'The action will created new car!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: statusUpdate? "Yes, update it!" : "Yes, create it!",
    }).then((result) => {
        if(result.isConfirmed) {
            if (statusUpdate) updateCar()
            else createCar()
        }
    });
  }

  const createCar = async () => {
    const optionCreate = {
        method: 'post',
        url: `${BASE_API_URL}/cars`,
        data: {
            ...detailCar,
            id: uuid()
        },
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await axios.request(optionCreate)
      .then(() => {
        Swal.fire(
            'Create!',
            'You has been created car',
            'success'
        ).then(() =>{
            navigate('/admin/cars');
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const updateCar = async () => {
    const optionUpdate = {
        method: 'put',
        url: `${BASE_API_URL}/cars/${detailCar.id}`,
        data: detailCar,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    await axios.request(optionUpdate)
      .then(() => {
        Swal.fire(
            'Updated!',
            'Your car has been updated.',
            'success'
        ).then(() => {
            navigate('/admin/cars');
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    if  (car !== null) {
       car.availableAt = car.availableAt.split("T")[0];
       
       setDetailCar(car)
    }
  }, [car]);

  const changeHandler = (event) => {
    const {name, value} = event.target;

    setDetailCar((currentData) => ({
        ...currentData,
        [name]: value
    }))
  }

  return (
    <>
      <Navbar listMenu={[['List Car']]} titleMenu={'CARS'}/>
      <SideBar activeMenu={'Cars'}/>
      <div style={{marginTop: '50px', marginLeft: '270px'}} className='p-3'>
        <nav aria-label="breadcrumb" style={{height: 'fit-content'}} className='p-0 mb-3'>
            <ol className="breadcrumb" style={{fontSize: '15px', fontWeight: '700'}}>
                <li className="breadcrumb-item"><a href='/admin/cars'>Cars</a></li>
                <li className="breadcrumb-item"><a href="admin/cars">List Cars</a></li>
                <li className="breadcrumb-item active" aria-current="page">{statusUpdate ? "Update Car" : "Create Car"}</li>
            </ol>
        </nav>

        <div className="d-flex justify-content-between align-items-center mb-4">
            <h4 className="text-bold">{statusUpdate ? "Update Car" : "Create Car"}</h4>
        </div>

        <div>
            <div className="card mt-3">
                <div className="card-body">
                    <div className='d-flex gap-3'>
                        <div className="mb-3 w-25">
                            <label className="form-label">Plat Nomor</label>
                            <input type="text" className="form-control" id="plate" name="plate" value={detailCar.plate} onChange={changeHandler}/>
                        </div>
                        <div className="mb-3 w-25">
                            <label className="form-label">Manufaktur</label>
                            <input type="text" className="form-control" id="manufacture" name="manufacture" value={detailCar.manufacture} onChange={changeHandler}/>
                        </div>
                        <div className="mb-3 w-50">
                            <label className="form-label">Model</label>
                            <input type="text" className="form-control" id="model" name="model" value={detailCar.model} onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Gambar</label>
                        <input type="text" className="form-control" id="image" name="image" value={detailCar.image} onChange={changeHandler}/>
                    </div>
                    <div className="d-flex gap-3">
                        <div className="mb-3 w-100">
                            <label className="form-label">Tipe</label>
                            <input type="text" className="form-control" id="type" name="type" value={detailCar.type} onChange={changeHandler}/>
                        </div>
                            <div className="mb-3 w-100">
                            <label className="form-label">Tahun Keluaran</label>
                            <input type="number" className="form-control" id="year" name="year" value={detailCar.year} onChange={changeHandler}/>
                        </div>
                        <div className="mb-3 w-100">
                            <label className="form-label">Transmisi</label>
                            <select className="form-select" id="transmission" name="transmission" value={detailCar.transmission} onChange={changeHandler}>
                                <option value="DEFAULT" disabled>Choose one</option>
                                <option value="Automatic">Automatic</option>
                                <option value="Automanual">Automanual</option>
                                <option value="Large">Manual</option>
                            </select>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Kapasitas</label>
                        <input type="number" className="form-control" id="capacity" name="capacity" value={detailCar.capacity} onChange={changeHandler}/>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Harga / hari (Rp)</label>
                        <input type="number" className="form-control" id="rentPerDay" name="rentPerDay" value={detailCar.rentPerDay} onChange={changeHandler}/>
                    </div>
                    
                    <div className="mb-3">
                        <label className="form-label">Ketersediaan</label>
                        <select className="form-select" id="available" name="available" value={detailCar.available}  onChange={changeHandler}>
                            <option value={"DEFAULT"} disabled>Choose available status</option>
                            <option value={true}>Tersedia</option>
                            <option value={false}>Tidak Tersedia</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Tanggal Tersedia</label>
                        <input type="date" className="form-control" id="availableAt" name="availableAt" value={detailCar.availableAt} onChange={changeHandler}/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Deskripsi</label>
                        <textarea className="form-control" id="updatdescriptione_carImage" name="description" value={detailCar.description} onChange={changeHandler} rows={3}/>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-end gap-3 mt-3">
                <button type="button" className="button-cancel" onClick={() => navigate(-1)}>Cancel</button>
                {
                    statusUpdate ?
                    <button type="submit" className="button-add" onClick={upsertHandler}>update Changes</button> 
                    :
                    <button type="submit" className="button-add" onClick={upsertHandler}>Save changes</button>
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default CarForm
