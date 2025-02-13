import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../config/api'
import Cookies from "js-cookie"

const Login = () => {

  const nav = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleInput = (e) => {
    let { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const createUser=async(data)=>{
    try {
      let res = await API.post("/users/login", data);
        const { user, token } = res.data;
        console.log(user, token);
        Cookies.set("token", token,{expires:2})
    } catch (error) {
        console.log(error);
        
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    createUser(user);
    nav("/")
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='email' name='email' value={user.name} onChange={handleInput} /> <br />
        <input type="text" placeholder='password' name='password' value={user.password} onChange={handleInput}/> <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Login