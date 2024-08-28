import React,{useEffect, useState} from 'react'
import service from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'
import { PostForm } from '../components';
function EditPost() {
    let [post,setPost] = useState({});
    let {slug} = useParams();
    let navigate = useNavigate();
    useEffect(()=>{
        if(slug)
        {
            service.getPost(slug)
            .then((data)=>{
              if(data){
                setPost(data);
              }
            })
        }
        else
        {
            navigate("/")
        }
    },[navigate,slug])
    console.log(post);
    return post ? (
    <div className='py-8'>
      <PostForm post = {post}/>
    </div>
  ): null
}

export default EditPost
