import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing' 
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'

function App() {

  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='product' element={<Product />} />
      <Route path='pricing' element={<Pricing />} />
      <Route path='app' element={<AppLayout />} />
      <Route path='*' element={<PageNotFound />} />


      </Routes>
    </BrowserRouter>
    </div>
      
    
  )
}

export default App
