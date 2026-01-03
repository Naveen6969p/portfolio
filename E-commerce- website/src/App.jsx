
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar'

import { BrowserRouter,Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from "./components/SearchItem"
import Cart from "./components/Cart"
import Products from './components/Products'
import { items } from './components/Data'
import { useState } from 'react'

function App() {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
 

  return (
    <>
        
     
    <BrowserRouter>
    <NavBar setData={setData} cart={cart}  />
    <Routes>

      <Route  path="/" element={<Products cart={cart} setCart={setCart}items={data} />}></Route>
      <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} ></Route>
      <Route path="/search/:term" element={<SearchItem  cart={cart} setCart={setCart}/>} ></Route>
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} ></Route>
     
    </Routes>
   
    </BrowserRouter>


    </>
  )
}

export default App
