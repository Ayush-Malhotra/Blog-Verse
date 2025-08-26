import React,{useState,useEffect} from 'react'
import service from '../appwrite/config'
import {Container} from '../components/index'
import {PostCard} from '../components/index';  
import { useSelector } from 'react-redux';

export default function Home() {
    let isActive = useSelector((state)=>state.auth.status);
    let [posts,setPosts] = useState([]);

    useEffect(()=>{
        service.getPosts([])
        .then((data) => {
            if(data)
            {
                setPosts(data.documents);
            }
        });
    },[])
    
    if(posts.length === 0 || !isActive)
    {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-grey-500'>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    else{
        return (
            
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post)=>(
                            <div key={post.$id} className='p-2 w-full sm:w-full md:w-1/2 lg:w-1/4'>
                                <PostCard {...post}/>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        )
    }
}

