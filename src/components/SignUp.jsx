import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import Button from './Button'
import { useNavigate,Link } from 'react-router-dom'
import authservice from '../appwrite/auth'
import Input from './Header/Input'
import { useForm } from 'react-hook-form'

function SignUp() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    let [error,setError] = useState("");
    const {register,handleSubmit} = useForm();
    const createAc = async(data)=>{
        setError("");
        try {
            let newAc = await authservice.createAccount(data);

            if(newAc)
            {
                let userData = await authservice.getCurrentUser();
                if(userData)
                {
                    dispatch(login(userData));
                    navigate("/");
                }
            }
        } 
        catch (error) {
            console.log(error);
            setError(error);
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
                    <h2 className="text-center text-2xl font-bold leading-tight">Create your account</h2>
                    <p className="mt-2 text-center text-base text-black/60">
                        Don&apos;t have any account?&nbsp;
                        <Link
                                    to="/signup"
                                    className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                        Sign Up
                    </Link>
                </p>
                {/*error && <p className='text-red-600 mt-8 text-center'>{error}</p>*/}
                <form onSubmit={handleSubmit(createAc)}>
                    <Input 
                    label="Full Name: "
                    type="text"
                    placeholder="Enter your name"
                    {...register("name",{
                        required:true,
                    })}
                    />
                    <Input 
                    label="E-mail: "
                    type="email"
                    placeholder="Enter your email-id"
                    {...register("email",{
                        required:true,
                    })}
                    />
                    <Input 
                    label="Password: "
                    type="password"
                    placeholder="Enter your password"
                    {...register("password",{
                        required:true,
                    })}
                    />
                    <Button type="submit">SignUp</Button>
                </form>
            </div>
        </div>
  )
}

export default SignUp
