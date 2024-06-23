import React, { useEffect, useState } from 'react'
import HeaderLandingPage from '../../../components/HeaderLandingPage'
import Jumbotron from '../LandingPage/Jumbotron'
import FooterLandingPage from '../../../components/FooterLandingPage'
import SearchButton from './SearchButton'
import { BASE_API_URL } from '../../../helper/general'
import axios from 'axios'
import ListCar from './ListCar'

const SearchCar = () => {
  const [carSpec, setCarSpec]  = useState({
    tanggal: null,
    waktu: null,
    penumpang:  0,
  });
  const [availableCar, setAvailableCar] = useState([]);
  const [refresh, setRefresh] = useState(true);

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
        const listCar = response.data;
        const newDate = `${carSpec.tanggal}T${carSpec.waktu}:00.563Z`
        const available = listCar.filter(
          (car) => ( car.available && car.capacity >= Number(carSpec.penumpang) && new Date(car.availableAt).getTime() <= new Date(newDate).getTime() )
        );

        setAvailableCar(available);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    getAvailableCar();
    //eslint-disable-next-line
  }, [refresh])

  const changeHandler = (event) => {
    const {name, value} = event.target;
   
    setCarSpec((currentData) => ({
      ...currentData,
      [name]: value
    }));
  }

  return (
    <>
      <section id='home'>
        <HeaderLandingPage/>
        <Jumbotron/>
      </section>

      <section id='search-button'>
        <SearchButton
          changeHandler={changeHandler} 
          refresh={refresh} 
          setRefresh={setRefresh}
        />
      </section>

      <section id="result">
        <ListCar listCar={availableCar} adminStatus={false}/>
      </section>

      <section id='footer'>
        <FooterLandingPage/>
      </section>
    </>
  )
}

export default SearchCar
