import React
 from 'react'; 
import './navbar.css'
import {GoogleAuthProvider ,getAuth,signInWithPopup } from 'firebase/auth'
import {  db } from '../firebase.config';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()

  const auth = getAuth();

// for Google pop up 
  const handleGoogleClick = async ()  => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
 

    const user = result.user;

    //check for user
    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef)

// check if id is already exist 
    if(!docSnap.exists()){
      await setDoc(doc(db, "users", user.uid),{
        name:user.displayName,
        email: user.email,
        photoUrl: user.photoURL,
        timeStamp:serverTimestamp(),
      })
    }
    navigate('/profile')
  }


  const handleLogOut = async() =>  {
    await auth.signOut();
console.log("logOut")
navigate('/')
   }

  return (
   <div className="nav_bar sticky-top">
    <Link to={'/'} className="left">
      {auth?.currentUser ?   <><img src={auth?.currentUser
      ?.photoURL
    } />
    <h3>{auth?.currentUser?.displayName}</h3> </> : (

    <h3>Social Media</h3> 
   
    )}
    </Link>
    <div className="right">
      <button className='btn btn-light mx-5' onClick={handleGoogleClick}>Login With Google</button>
   
      <Link to={'/post'} className="btn btn-info">Post</Link>
      <Link  to={'/profile'} className="btn btn-secondary mx-3">Profile</Link>
      <Link to={'/user'} className='btn btn-warning '>All users</Link>
      <button className="btn btn-danger mx-3" onClick={handleLogOut}>Log Out</button>
     
     
    </div>
   </div>
  )
}

export default Navbar