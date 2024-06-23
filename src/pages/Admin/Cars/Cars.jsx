import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/NavBar/Navbar'
import SideBar from '../../../components/SideBar/SideBar'
import axios from 'axios'
import { BASE_API_URL } from '../../../helper/general'
import ListCar from '../../Public/SearchCar/ListCar'

const Cars = () => {
  const [carList, setCarList] = useState([])
  const [refresh, setRefresh] = useState(false)

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
  }, [refresh])

  return (
    <>
        <Navbar listMenu={['List Car']} titleMenu={'CARS'}/>
        <SideBar activeMenu={'Cars'}/>
        <div style={{marginTop: '50px', marginLeft: '270px'}} className='p-3'>
            <nav aria-label="breadcrumb" style={{height: 'fit-content'}} className='p-0 mb-3'>
                <ol className="breadcrumb" style={{fontSize: '15px', fontWeight: '700'}}>
                    <li className="breadcrumb-item"><a href="/admin/cars">Cars</a></li>
                    <li className="breadcrumb-item active" aria-current="page">List Cars</li>
                </ol>
            </nav>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="text-bold">List Car</h4>
                <a href="/admin/cars/create-cars"><button className="button-add">+ Add New Car</button></a>
            </div>

            {
                carList.length === 0 ?
                <div className="d-flex flex-column justify-content-center align-items-center mt-3" style={{width: '100%'}}>
                  <img src="/images/empty-data.png" alt='empty' style={{width: '500px'}}/>
                  <h5>Data masih kosong nih, yuk isikan data lebih dulu</h5>
                </div> :
                <ListCar listCar={carList} adminStatus={true} setRefresh={setRefresh} refresh={refresh}/>
            }
        </div>
    </>
  )
}

export default Cars
