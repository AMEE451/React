import React from 'react'

const BlogCard = ({id,title,onDelete,i}) => {
  return (
    <div>
        <h1> <span>{i+1}</span> {title}</h1>
        <button onClick={()=>onDelete(id)}>Delete</button>
    </div>
  )
}

export default BlogCard