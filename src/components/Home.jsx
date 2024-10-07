import React, { useState } from 'react'
import Users from './Users'
import Products from './Products'

export default function Home() {
    const [value,setValue] = useState(100)
    const handleIncrease =() =>{
        setValue(value+1)
    }
    const handleDecrease =() =>{
        setValue(value-1)
    }
  return (
    <div>
      <h1 className='text-4xl my-8 text-center'>I have a number, That is {value}</h1>
      <div className='text-center'>
        <button onClick={handleIncrease} className='btn btn-primary text-white'>Increase</button>
        <button onClick={handleDecrease} className='btn btn-secondary text-white ml-4'>Decrease</button>
      </div>
      
     
    </div>
  )
}
