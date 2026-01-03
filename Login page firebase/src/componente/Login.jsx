import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider,signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )

      navigate('/home')
    } catch (error) {
      console.log(error)
    }
  }


  const handleGoogle = async() => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider)
      navigate('/home');
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <>
  <div className="container my-5 con">
    <h1 className="text-center heading">
      React FireBase Authentecation
    </h1>
    <form onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}  onChange={(e) => setEmail(e.target.value)} />
  
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1 " value={password}  onChange={(e) => setPassword(e.target.value)}/>
  </div>
 
  <button type="submit" class="btn btn-primary login-btn">Login</button>
</form>
  </div>

  <Link  className='home' to={'/register'}> Register New User</Link>

  <div className="container img-con">
    <button className="  google-btn"  onClick={handleGoogle}>
      <img src='https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png' />
      <h5 className=' glg my-2'>Login With Google</h5>
    </button>
  </div>
   </>
  )
}

export default Login