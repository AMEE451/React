import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Assign from '../pages/Assign'
import PageNotFound from '../pages/PageNotFound'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/assign" element={<Assign/>}/> 
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes