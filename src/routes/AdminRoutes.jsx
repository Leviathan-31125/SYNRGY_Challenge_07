import React from 'react'
import { Route } from 'react-router-dom'
import Dashboard from '../pages/Admin/Dashboard'
import Cars from '../pages/Admin/Cars/Cars'
import CarForm from '../pages/Admin/CarForm/CarForm'

const AdminRoutes = [
  <Route path='/admin' key={"/admin"}>
    <Route
      index
      element={ <Dashboard/> }
    />
    <Route
      path='cars'
      element={ <Cars/> }
    />
    <Route
      path='cars/update-cars'
      element={ <CarForm statusUpdate={true}/> }
    />
    <Route
      path='cars/create-cars'
      element={ <CarForm statusUpdate={false}/> }
    />
  </Route>
]

export default AdminRoutes
