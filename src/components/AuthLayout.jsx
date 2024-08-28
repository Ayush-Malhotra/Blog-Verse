import React,{useEffect,useState}from 'react'
import { useSelector } from 'react-redux'
import authservice from '../appwrite/auth'
import { useNavigate } from 'react-router-dom';
export default function Protection({children,authentication="true"}) {

    let [loader,setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector((state)=>state.auth.status);
    useEffect(()=>{
        if(authentication && authStatus !== authentication)
        {
            navigate("/login");
        }
        else if(!authentication && authStatus !== authentication)
        {
            navigate("/");
        }
        setLoader(false);
    },[authentication,authStatus,navigate])

  return  loader?(<h2>...loading</h2>):(<div>{children}</div>);
}

