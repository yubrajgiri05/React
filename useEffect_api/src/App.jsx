import { useState } from 'react'
import './App.css'
import Product from './Product'

function App() {

  let [showProduct, setShowProduct]= useState(true);

  return (
    <>
    <h1>Use effect</h1>
    <button onClick={()=>{
      setShowProduct(true);
    }}>show</button>
   
   <button onClick={()=>{
      setShowProduct(false);
    }}>hide</button>
    {

      showProduct===true?(<Product/>):
      <h1>No Product Found</h1>

    }
    </>
  )
}

export default App
