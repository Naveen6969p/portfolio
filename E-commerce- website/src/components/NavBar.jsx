import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./Data";

import { FaCartPlus } from "react-icons/fa6";

const NavBar = ({setData ,cart}) => {
  const [filterData , setFilterData] = useState("")
  const location = useLocation();

  const navigate = useNavigate()

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category)
    setData(element);
  }

  const filterByPrice =(price) => {
    const element = items.filter((product) => product.price >= price)
    setData(element)
  }

  const handleSubmitData = (e) => {
    e.preventDefault();
    navigate(`/search/${filterData}`)
    setFilterData("")
  }

 
  return (
    <header className="sticky-top ">
      <div className="navbar">
        <Link to={'/'} className="e-coommerce">E-Commmerce</Link>
        <form className="input" onSubmit={handleSubmitData }>
          <input type="text" value={filterData} placeholder="Search items here" onChange={(event) => setFilterData(event.target.value)} />
        </form>

        <Link to={'/cart'} className="cart" >
        <button type="button" class="btn btn-primary position-relative">
        <FaCartPlus />
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {cart.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</button>
        </Link>
      </div>
{location.pathname == '/' && (
   <div className="nav_bar_wrapper">
   <div className="items">Filter BY {"->"}</div>
   <div className="items" onClick={() => setData(items)}>No Filter</div>
   <div className="items" onClick={() => filterByCategory('mobiles')}>Mobiles</div>
   <div className="items" onClick={() => filterByCategory('laptops')}>Laptops</div>
   <div className="items" onClick={()=> filterByCategory('tablets')}>Tablets</div>
   <div className="items" onClick={() => filterByPrice(29999)}>{">="}29999</div>
   <div className="items" onClick={() => filterByPrice(49999)}>{">="}49999</div>
   <div className="items" onClick={() => filterByPrice(69999)}>{">="}69999</div>
   <div className="items" onClick={() => filterByPrice(89999)}>{">="}89999</div>
 </div>
)}
     
    </header>
  );
};

export default NavBar;
