import React from 'react'

const Button = ({text,something}) => {
    console.log("button called");

  return (
    <div>
        <button>{text}</button>
    </div>
  )
}

export default Button