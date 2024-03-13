import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useEffect} from 'react'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'



function App() {
  useEffect(()=>{
    fetch('http://localhost:8000/cities')
    .then((res)=>res.json())
    .then((data)=>console.log(data))
}, [])

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
