import React from 'react'
import CardCar from '../../../components/CardCar/CardCar'

const ListCar = ({listCar, adminStatus, refresh, setRefresh}) => {
  return (
    adminStatus ? 
    <div className='result-admin'>
        { listCar.map((car) => (<CardCar key={car.id} car={car} adminStatus={adminStatus} refresh={refresh} setRefresh={setRefresh}/>)) }
    </div>
    :
    <div className='container result'>
        { listCar.map((car) => (<CardCar key={car.id} car={car} adminStatus={adminStatus}/>)) }
    </div>
  )
}

export default ListCar