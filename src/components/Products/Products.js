import React from "react";

function Products(props) {
  const {ProductName, price} = props.product;
  return (
    <div className='card'>
      <h4 className='name'>{ProductName}</h4>
      <h5 className='price'>{price}</h5>
      <a href="https://www.google.com" className='btn'>Buy Now</a>
    </div>
  )
}

export default Products;
