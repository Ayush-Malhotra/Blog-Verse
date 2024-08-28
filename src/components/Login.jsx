import React, { useState } from 'react'
import {login as authLogin} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import authservice from '../appwrite/auth'
import { useNavigate,Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import Input from '../components/Header/Input'
import Button from './Button'

export default function Login() {

    const {register, handleSubmit} = useForm();
    let [error,setError] = useState("");
    let navigate = useNavigate();
    let dispatch = useDispatch();
    
    const login = async(data)=>{
        setError("");
        try {
            console.log("hello ji");
            const session = await authservice.login(data);
            console.log("hello ji");
            if(session)
            {
                const userData = await authservice.getCurrentUser();
                console.log(userData);
                if(userData)
                {
                    dispatch(authLogin(userData));
                    navigate("/");
                }
            }
            return true;
        } catch (error) {
            console.log(error);
            setError(error);
            return false;
        }
    }
  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        {/* <Logo width="100%" /> */}
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {/* {error && <p className='text-red-600 mt-8 text-center'>{error}</p>} */}
        <form onSubmit={handleSubmit(login)}>
            <Input
            label="email"
            type = "email"
            placeholder = "enter your email"
            {...register("email",{
                required:true,
            })}
            />
            <Input 
            label="password"
            type="password"
            placeholder="enter your password"
            {...register("password",{
                required:true
            })}
            />
            <Button type="submit">Sign in</Button>
        </form>
    </div>
    </div>
  )
}

