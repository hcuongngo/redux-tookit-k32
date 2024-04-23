import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path='/:id' element={<ProductDetail /> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
