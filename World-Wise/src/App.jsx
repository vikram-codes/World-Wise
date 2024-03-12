import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='product' element={<Product />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
      
    
  )
}

export default App
