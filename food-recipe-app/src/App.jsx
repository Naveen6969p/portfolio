
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './components/Home'
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom'
import RecipeId from './components/RecipeId'
import Category from './components/Category'
import SearchElement from './components/SearchElement'

function App() {
  

  return (
    <>
  <Router>
    <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/:idMeal' element={<RecipeId />}/>
      <Route  path='/category/:name' element={<Category />}/>
      <Route  path='/search/:term' element={<SearchElement />}/>
      

    </Routes>
  </Router>
    </>
  )
}

export default App
