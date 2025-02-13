import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API } from '../config/api'
import Cookies from "js-cookie"

const Signup = () => {

  const nav = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const createUser = async (data) => {
    console.log(data);
    try {

      let res = await API.post("/users/signup", data)
      const { user, token } = res.data
      console.log(user, token);
      Cookies.set("token", token, { expires: 2 })
    } catch (error) {
      console.log(error);
      
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    createUser(user)
    nav("/")
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='name' name='name' value={user.name} onChange={handleInput} /> <br />
        <input type="text" placeholder='email' name='email' value={user.email} onChange={handleInput} /> <br />
        <input type="text" placeholder='password' name='password' value={user.password} onChange={handleInput} /> <br />
        <input type="submit" />
      </form>
    </div>
  )
}

export default Signup