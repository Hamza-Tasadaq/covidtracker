import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import axios from 'axios'

import Logo from './components/Logo';
import Form from './components/Form';
import Card from "./components/Card";
import Spineer from "./components/Spineer";
import Chart from "./components/Chart";
import Table from "./components/Table";


function App() {
  const [allCountriesData, setAllCountriesData] = useState([])
  const [singleData, setSingleData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  const [query, setQuery] = useState('')

  useEffect(() => {
    if (query === '') {
      const fetchData = async () => {
        setIsLoading(true)
        const result = await axios(
          `https://covid19.mathdro.id/api/`
        )
        setSingleData(result.data)


        const result1 = await axios(
          `https://api.covid19api.com/summary`
        )
        setAllCountriesData(result1.data.Countries)
        setIsLoading(false)
      }
      fetchData()
    }
    else {
      const fetchDataCountry = async () => {
        setIsLoading(true)
        const result = await axios(
          `https://covid19.mathdro.id/api/countries/${query}`
        )
        setSingleData(result.data)
        setIsLoading(false)
      }
      fetchDataCountry()
    }

  }, [query])

  return (
    <>
      <Logo />
      <br />
      <Form set={setQuery} />
      <br />
      {
        isLoading ?
          <Spineer /> :
          <>
            <Card item={singleData} />
            < div className="container">
              <div className="row">
                <Chart chartData={singleData} />
                <Table data={allCountriesData} />
              </div>
            </div>
          </>
      }
    </>
  );
}

export default App;
