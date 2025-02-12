import React, { useState } from 'react'
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const nav = useNavigate()
  const [user, setUser] = useState({
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

  const onSubmit = (e) => {
    e.preventDefault()

    const isExist = JSON.parse(localStorage.getItem("users"))
    // const isCookie = Cookies.get("user")
    // const usersofcookie = isCookie ? JSON.parse(isCookie) : [];

    console.log(isExist);
    // console.log(isCookie);

    //   const foundcookie = usersofcookie.find(
    //     (storedUser) =>
    //         storedUser.email === user.email && storedUser.password === user.password
    // );

    const foundlocal = isExist.find((isExist) => isExist.email == user.email && isExist.password == user.password);
    console.log(foundlocal);
    // console.log(foundcookie);



    if (foundlocal) {
      alert("user already exists")
    }
    else {
      alert("please signup")
      nav("/signup")
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='email' name='email' value={user.email} onChange={handleInput} /> <br />
        <input type="text" placeholder='password' name='password' value={user.password} onChange={handleInput} /> <br />
        <input type="submit" value="login" />
      </form>
    </div>
  )
}

export default Login
