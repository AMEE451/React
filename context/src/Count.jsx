import React, { useContext } from 'react'
import { context } from './context/ContextProvider'

const Count = () => {
    const {count}=useContext(context)

  return (
    <div>
        <h1>Count:{count}</h1>
    </div>
  )
}

export default Count