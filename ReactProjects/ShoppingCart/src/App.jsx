import React from 'react'
import './App.css'
import ProductCard from './components/ProductCard'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {


  return (
    <>
    <Header />
   {/* <h1 className='text-center p-5 font-bold text-3xl'>Welcome to our Store</h1> */}
   {/* <div className='flex align-items-center gap-10 justify-center'> */}
   <ProductCard/>
   {/* <ProductCard/> */}
   {/* <ProductCard/> */}
   {/* </div> */}
   <Footer/>
    </>
  )
}

export default App
