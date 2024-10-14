import React from 'react'
import { useParams } from 'react-router'

export default function ProductDetails() {
  const {id} = useParams()

  console.log(id)
  return (
    <div>
      <h1>Product Details Page</h1>
    </div>
  )
}
