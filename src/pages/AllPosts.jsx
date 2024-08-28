import React,{ useEffect, useState } from 'react'
import service from '../appwrite/config'
import {PostCard} from '../components/index'

function AllPosts() {

    let [posts,setPosts] = useState([]);
    

    useEffect(()=>{
      service.getPosts([])
      .then((data)=>{
        if(data)
        {
          setPosts(data.documents)
        }
      })
    },[]);
    
  return (
    <div className='flex flex-wrap'>
      {posts.map((post)=>(
        <div key={post.$id} className='p-2 w-1/4'>
            <PostCard {...post}/>
        </div>
      ))}
    </div>
  )
}

export default AllPosts
