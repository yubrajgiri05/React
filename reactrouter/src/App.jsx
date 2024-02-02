import React, { useState } from 'react'
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './Component/Home/Home'
import Product from './Component/Product/Product'
import Dashboard from './Component/Dashboard/Dashboard'
import Navbar from './Component/Navbar/Navbar'

const App = () => {
    const [user,setUser] = useState(false);

    const login =()=> {
      setUser(true);
    }

    const logout =()=> {
      setUser(false);
    }

  return (
    <>
     <BrowserRouter>
     <Navbar user={user} login={login} logout={logout}/>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='dasboard' element={
              <ProtectedRoute user={user}>
                <Dashboard/>
              </ProtectedRoute>
            }/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

 export const ProtectedRoute = ({user, children}) =>{
  if(user){
    return children
  } else
  return <Navigate to={'/'}/>
}
