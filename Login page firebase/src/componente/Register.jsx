import React from 'react'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )

      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
   <>
    
  <div className="container my-5 con">
    <h1 className="text-center heading">
      New User Register here
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
 
  <button type="submit" class="btn btn-primary login-btn">Register</button>
</form>
  </div>
  </>
  )
}

export default Register