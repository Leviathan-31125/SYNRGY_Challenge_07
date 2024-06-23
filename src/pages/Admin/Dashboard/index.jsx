import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/NavBar/Navbar';
import SideBar from '../../../components/SideBar/SideBar';
import { BASE_API_URL, formatCurrency, formatDate } from '../../../helper/general';
import axios from 'axios';

const Dashboard = () => {
  const [carList, setCarList] = useState([])

  const getAvailableCar = async () => {
    const optionsGet = {
      method: 'get',
      url: `${BASE_API_URL}/cars`,
      header: {
        'Content-Type': 'application/json'
      }
    }

    await axios.request(optionsGet)
      .then((response) => {
        setCarList(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getAvailableCar()
  }, [])

  const statusAvailableTemplate = (data) => {
    let status;
    if (data) status = "Available"
    else status = "UnAvailable"

    return (
      <span className={data ? "badge bg-primary" : "badge bg-danger"}>{status}</span>
    )
  }

  return (
    <>
      <Navbar listMenu={['Dashboard']} titleMenu={'DASHBOARD'}/>
      <SideBar activeMenu={'Dashboard'}/>
      <div style={{marginTop: '50px', marginLeft: '270px'}} className='p-3'>
        <nav aria-label="breadcrumb" style={{height: 'fit-content'}} className='p-0 mb-3'>
            <ol className="breadcrumb" style={{fontSize: '15px', fontWeight: '700'}}>
                <li className="breadcrumb-item"><a href="/dashboard">Dashboard</a></li>
                <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
            </ol>
        </nav>

        <table className="table table-striped align-middle">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Image</th>
                    <th scope="col">Car Name</th>
                    <th scope="col">Capacity</th>
                    <th scope="col">Rent Price</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Available At</th>
                </tr>
            </thead>
            <tbody>
                {
                  carList.map((car, index) => (
                    <tr key={car.id}>
                        <td>{index + 1}</td>
                        <td><img src={car.image} alt="car" style={{width: '200px'}}/></td>
                        <td>`{car.manufacture} - {car.model} ({car.transmission})`</td>
                        <td><span style={{fontSize: '1.2rem', fontWeight: '600'}}>{car.capacity}</span> Person</td>
                        <td><span style={{fontWeight: '600'}}>{formatCurrency(car.rentPerDay, 'id-ID', 'IDR')}</span> / day</td>
                        <td style={{width: '30%'}}>{car.description}</td>
                        <td>{statusAvailableTemplate(car.available)}</td>
                        <td>{formatDate(car.availableAt)}</td>
                    </tr>
                  ))
                }
            </tbody>
        </table>
      </div>
    </>
  )
}

export default Dashboard
