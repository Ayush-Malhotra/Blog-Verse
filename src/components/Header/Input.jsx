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
        <div className='w-full mb-3'>
            {
                label && (
                <label 
                    className='block mb-1 font-bold text-left'
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
