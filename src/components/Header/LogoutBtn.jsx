import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authservice from '../../appwrite/auth'



function LogoutBtn() {
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
    
  return (
    <button
    className='inline-block px-6 py-2 duration-200 text-white hover:bg-blue-100 hover:text-black rounded-full font-bold'
    onClick={logoutHandler}
    >
        Logout
    </button>
  )
}

export default LogoutBtn
