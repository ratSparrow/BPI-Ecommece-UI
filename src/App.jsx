import Carousel from "./components/Carousel"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./components/Home"
import Products from "./components/Products"

function App() {
  const handleChangeInput = e =>{
    console.log(e.target.value)
  }
  return (
    <>
      <Header></Header>
      <Carousel></Carousel>
      <Home></Home>
      <div>
        <h1 className="text-center text-4xl m-10 text-amber-500 font-bold">Our Products</h1>
        <Products></Products>
      </div>

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
