import Login from './componente/Login'
import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Register from './componente/Register'
import Home from './componente/Home'
function App() {

  return (
    <>
    <BrowserRouter>
 <Routes>
  <Route path='/' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/home'  element={<Home />} />
 </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
