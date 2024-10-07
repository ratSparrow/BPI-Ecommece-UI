import { useState } from "react"
import Carousel from "./components/Carousel"
import Cart from "./components/Cart"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

import Products from "./components/Products"
import Users from "./components/Users"
import toast from "react-hot-toast"

function App() {
  const [cart,setCart] = useState([])
  const handleChangeInput = e =>{
    console.log(e.target.value)
  }

  const handleAddToCart = (item)=>{
    const newCart = [...cart,item]
    setCart(newCart)
    toast.success('Successfully added product to cart!')
    console.log(newCart)
  }

  const logo = "M. Rafiul Alam"
  return (
    <>
      <Header cart={cart}></Header>
      <Carousel></Carousel>
      <Home></Home>
      <Products handleAddToCart={handleAddToCart}></Products>
      <Users/>
      <Cart cart={cart}></Cart>

      <div className="mt-12">
        <input
        onChange={(e)=>handleChangeInput(e)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-secondary w-full max-w-xs" />
      </div>

      

      <div className="min-h-screen"></div>
      <Footer></Footer>

    </>
  )
}

export default App
