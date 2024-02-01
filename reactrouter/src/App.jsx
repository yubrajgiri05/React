import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Component/Home/Home'
import Product from './Component/Product/Product'
import Dashboard from './Component/Dashboard/Dashboard'

const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='dasboard' element={<Dashboard/>}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
