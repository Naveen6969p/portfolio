import { getAuth } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const auth = getAuth();
  const navigate = useNavigate()

  const logOut = async() => {
     await auth.signOut();
    navigate('/');
  }
  return (
    <>
    <div className="container text-center my-5">
      <h1 className="text-center my-5">Welcome to HomePage.....</h1>
      <h2>{auth.currentUser.displayName}</h2>
      <h2>{auth.currentUser.email}</h2>
      <img src={auth.currentUser.photoURL} />

    </div>

<button className="btn btn-warning text-center my-5 button  n" onClick={logOut}>Log Out</button>
</>
  );
};

export default Home;
