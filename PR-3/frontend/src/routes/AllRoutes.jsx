import React from 'react'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Home from '../pages/Home'
import  { Route ,Routes } from "react-router-dom"
import Details from '../pages/Details'

const AllRoutes = () => {
  return (
    <div> 
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/product/:id' element={<Details/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes