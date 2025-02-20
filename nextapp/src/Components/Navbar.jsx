import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
        <Link href="/">Home</Link>
        <Link href="/signup">Signup</Link>
        <Link href="/login">Login</Link>
        <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Navbar