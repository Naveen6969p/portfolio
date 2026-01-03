import {BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import Zigocloud from './components/Zigocloud'
import VideoRoom from './components/VideoRoom'

function App() {


  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route  path='/' element={<Zigocloud/>}></Route>
      <Route path='/room/:id' element={<VideoRoom />} ></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
