import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Products from "./Products";

import { useEffect } from "react";



const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  useEffect(() => {
    const productItem = items.filter((product) => product.id == id);
    setProduct(productItem[0]);

    const relatedProduct = items.filter(
      (item) => item.category === product.category
    );
    setRelatedProduct(relatedProduct);
  }, [id, product.category]);

  const handleAddToCart = (id, price, title, description, imgSrc) => {
    const newItems = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, newItems]);

   
  };

  return (
    <>
      
      <div className="container">
        <div className="img">
          <img src={product.imgSrc} />
        </div>
        <div class="card-body">
          <h5 class="card-title">{product.title}</h5>
          <p class="card-text">{product.description}</p>
          <button type="button" class="btn btn-primary mx-3">
            ₹ {product.price}
          </button>
          <button
            type="button"
            class="btn btn-warning"
            onClick={() =>
              handleAddToCart(
                product.id,
                product.price,
                product.title,
                product.description,
                product.imgSrc
              )
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
      <h1 className="text-center">Related Products</h1>
      <Products cart={cart} setCart={setCart} items={relatedProduct} />
    </>
  );
};

export default ProductDetail;
