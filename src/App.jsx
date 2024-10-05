import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"

import Products from "./components/Products"

function App() {
  const handleChangeInput = e =>{
    console.log(e.target.value)
  }
  const handleAddToCart = (item)=>{
    console.log(item)
  }

  const value = 1290
  const logo = "M. Rafiul Alam"
  return (
    <>
      <Header logo={logo} value={value}></Header>
      <Carousel></Carousel>
      <Home></Home>
      <Products handleAddToCart={handleAddToCart}></Products>
      

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
