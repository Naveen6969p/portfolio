import React from 'react'

import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Products = ({items,cart,setCart}) => {
  const handleAddToCart = (id,price,title,description,imgSrc) => {
    const newItems = {
      id,price,title,description,imgSrc
    }
    setCart([...cart, newItems])
 
  
  toast.success('Your Item is Added', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  
    });
  }
  return (
    <>
<ToastContainer
position="top-right"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    <div className="container my-8 text-center ">
      <div className="row">
        {
          items.map((product) => {
            return (
             <>
             <div key={product.id} className="col-lg-4 my-3">
            <div class="card" style={{width: "18rem"}}>
              <Link to={`/product/${product.id}`}  style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                
  <img src={product.imgSrc} class="card-img-top" alt="..." />
  </Link>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p class="card-text">{product.description}</p>
    <button type="button" class="btn btn-primary mx-3">₹ {product.price}</button>
    <button type="button" class="btn btn-warning"  onClick={() => handleAddToCart(product.id,product.price,product.title,product.description,product.imgSrc)}>Add to Cart</button>
  </div>
  </div>
</div>
</>
        )  })
        }
     
      </div>
    </div>
    </>
  )
}

export default Products