import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import GetPost from './components/getPost/GetPost'
import AddPost from './components/addpost/AddPost'
import PostDetail from './components/postDetail/PostDetail'
import Profile from './components/profile/Profile'
import AllUser from './components/allUsers/AllUser'

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
<Route path='/' element={<GetPost />} />
<Route path='/post' element={<AddPost />} />
<Route path='/post/:id' element={<PostDetail />} />
<Route path='/profile' element={<Profile />} />
<Route path='/user' element={<AllUser />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
