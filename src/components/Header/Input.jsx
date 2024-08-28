import React from 'react'
import { forwardRef,useId } from 'react';


let Input = forwardRef(function Input({
    label,
    type = "text",
    className = '',
    ...props
},ref){

    const id = useId();
    return (
        <div className='w-full'>
            {
                label && (
                <label 
                    className='inline-block mb-1 pl-1 font-bold'
                    htmlFor={id}
                >{label}</label>)
            }

            <input 
            type={type} 
            className={`px-3 py-2 rounded-lg bg-white text-black 
                outline-none focus:bg-grey-50 duration-200 border border-grey-200
                w-full ${className}`}
            id={id}
            {...props}
            ref = {ref}
            />
        </div>
    )
})

export default Input;
