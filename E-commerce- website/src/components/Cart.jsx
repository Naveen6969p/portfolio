import React from 'react'
import { Link } from 'react-router-dom'

const Cart = ({cart , setCart}) => {
  return (
    <>
    
    <div className='cart-container my-5' style={{width: "54%"}}>
      {cart.length == 0 ? (
<div className="text-center my-5">
  <h2>Cart is Empty</h2>
  <Link  to={'/'} className='btn btn-warning ' >Continue Shopping...</Link>
</div>
      ):
      cart.map((product) => {
        return <>
        <div class="card mb-3 my-5" style={{width:"700px"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={product.imgSrc} class="img-fluid rounded-start" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body text-center">
      <h5 class="card-title">{product.title}</h5>
        <p class="card-text">{product. description}</p>
        <button type="button" class="btn btn-primary mx-3">₹ {product.price}</button>
        <button type="button" class="btn btn-warning mx-2">Buy Now</button>
        
       
      </div>
    </div>
  </div>
</div>
        </>
})}
    


    </div>
    {cart.length!= 0 &&
    <div className="carts-container text center">
      <button className='btn btn-warning mx-5'>Check Out</button>
      <button  onClick={() => setCart('')} className='btn btn-danger'>Clear Cart</button>
    </div>
  }
    </>
  )
}

export default Cart