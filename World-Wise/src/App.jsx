/* eslint-disable no-unused-vars */
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'



function App() {

  const [cities, setCities] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(function() {
    async function fetchCities() {
      try {
    setIsLoading(true)
    const response = await fetch('http://localhost:8000/cities')
    const data = await response.json()
    setCities(data) }
    catch (error) {
      alert('There was an error loading data...')
    } finally {
      setIsLoading(false)
    }
  }
    fetchCities()
}, [])
console.log(cities)

  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='product' element={<Product />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='app' element={<AppLayout />}>
          <Route index element={<CityList />} />
          <Route path='cities' element={<CityList />} />
          <Route path='cities' element={<p>Cities</p>} />
          <Route path='countries' element={<p>Countries</p>} />
          <Route path='form' element={<p>Form</p>} />
      </Route>
      <Route path='login' element={<Login />} />
      <Route path='*' element={<PageNotFound />} />


      </Routes>
    </BrowserRouter>
    </div>
      
    
  )
}

export default App
