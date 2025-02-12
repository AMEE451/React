import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from "js-cookie"

const Signup = () => {

    const nav=useNavigate()
    const [userData,setUserData]=useState({
        username:"",
        email:"",
        password:""
    })

    const handleInput=(e)=>{
       const {name,value}=e.target
       setUserData({
        ...userData,
        [name]:value
       })
    }

    const onSubmit=(e)=>{
        e.preventDefault()
        console.log(userData);

        let users=JSON.parse(localStorage.getItem('users')) || []
        users.push(userData)

        const cookieuser = Cookies.get('user');
        const existingUsers = cookieuser ? JSON.parse(cookieuser) : []

        existingUsers.push(userData)

        localStorage.setItem('users', JSON.stringify(users))
        Cookies.set('user', JSON.stringify(existingUsers), { expires: 1 })
        console.log("added",userData);
        
        nav("/home")
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" name='username' placeholder='name' value={userData.username} onChange={handleInput}/> <br />
            <input type="text" name='email' placeholder='email' value={userData.email} onChange={handleInput}/> <br />
            <input type="text" name='password' placeholder='password' value={userData.password} onChange={handleInput}/> <br />
            <input type="submit" value="signup"/>
        </form>
    </div>
  )
}

export default Signup
