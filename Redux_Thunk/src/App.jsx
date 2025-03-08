import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_post, get_posts } from './redux/Action'
import BlogCard from './Components/BlogCard'

const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(get_posts())
  },[])

  let {post} =useSelector(store=>store.post)

  const handledelete=(id)=>{
    dispatch(delete_post(id))
    console.log("deleted",id); 
  }
  return (
    <div>
      { 
        post&&(post.map((post,i)=><BlogCard {...post} onDelete={handledelete} i={i}/>))
      }
    </div>
  )
}

export default App