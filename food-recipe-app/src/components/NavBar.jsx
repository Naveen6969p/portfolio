import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {

  const [input, setInput] = useState();
  const navigate = useNavigate()

  const handleonSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${input}`)
  }
  return (
    <>
    <div className="navbar sticky-top">
      <div className="left">
       <Link to={'/'} className='link'> <h3>Recipe App</h3>
       </Link>
      </div>
      <form className="search" onSubmit={handleonSubmit}><input type='text' onChange={(e) => setInput(e.target.value)} /></form>
      <div className="right">
      <Link className='link' to={'/category/indian'}>
        <div className="items">Indian</div> </Link>
        <Link className='link' to={'/category/america'}> <div className="items">American</div> </Link>
        <Link className='link' to={'/category/brithish'}> <div className="items">British</div></Link>
        <Link className='link' to={'/category/chinese'}>  <div className="items">Chinese</div></Link>
        <Link className='link' to={'/category/thai'}>  <div className="items">Thai</div></Link>
      </div>
    </div>
    </>
  )
}

export default NavBar