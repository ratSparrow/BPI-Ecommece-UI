import React, { useEffect, useState } from 'react'

export default function Products() {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    fetch("./products.JSON")
    .then((response)=>response.json())
    .then(data=> setProducts(data))
  },[])
  console.log(products)

     const handleClick = (item) =>{
          console.log(item)
     }
  return (
   <div className='grid grid-cols-3 gap-4'>
    {
      products.map(product=>  <div className="card bg-base-100 w-96 shadow-xl">
        
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>Description: {product.description}</p>
          <p>Brand: {product.brand}</p>
          <p>${product.price}</p>
          <p>Review: {product.review}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleClick(product)} className="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>)
    }
   </div>
  )
}
