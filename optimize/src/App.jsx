import React from 'react'
import Button from './components/Button'
import { googleAuth, signin } from './config/firebase'

const App = () => {

  const handleGoogleAuth=async()=>{
    let userData=await googleAuth
    console.log(userData);
    
  }

  const login=async()=>{
    let email="react@gmail.com"
    let password="password"
    let userdata=await signin(email,password)
    console.log(userdata);
  }

  return (
    <div>
      <Button text="test"/>
      <button onClick={login}>Login</button>
      <button onClick={handleGoogleAuth}>google</button>
    </div>
  )
}

export default App