import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../pages/Public/LandingPage/Index'
import SearchCar from '../pages/Public/SearchCar'
import Login from '../pages/Public/Auth/Login'
import Register from '../pages/Public/Auth/Register'

const UserRoutes = [
  <Route
    path='/'
    element= { <Home/> }
    key={"/"}
  />,
  <Route
    path='/cars'
    element= { <SearchCar/> }
    key={"/cars"}
  />,
  <Route
    path='/login'
    element= { <Login/> }
    key={"/login"}
  />,
  <Route
    path='/register'
    element= { <Register/> }
    key={"/register"}
  />
]

export default UserRoutes
