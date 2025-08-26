import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authservice from '../../appwrite/auth'



function LogoutBtn() {
    const [user,setUser] = useState();
    let dispatch = useDispatch();
    const logoutHandler = async()=>{
        await authservice.logout()
        .then(
            dispatch(
                logout()
            )
        )
        return true;
    }

    useEffect(()=>{
        const getUserDetails = async()=>{
            const res = await authservice.getCurrentUser();
            if(res){
                setUser(res);
            }
        }
        getUserDetails();
    },[])
  return (
    <button
    className='inline-block px-2 md:px-6 py-1 md:py-2 duration-200 text-white hover:bg-blue-100 hover:text-black rounded-full font-bold'
    onClick={logoutHandler}
    >
        {user?.name}
    </button>
  )
}

export default LogoutBtn
