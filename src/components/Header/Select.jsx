import React, { useId,forwardRef } from 'react'

let Select = forwardRef(function Select({
    options,
    label,
    className,
    ...props
},ref){

    const id = useId();
  return (
    <div className='w-full'>
      {
        label && <label htmlFor={id}>{label}</label>
      }

      <select 
      id={id}
      className={`px-3 py-2 rounded-lg bg-white text-black 
                outline-none focus:bg-grey-50 duration-200 border border-grey-200
                w-full ${className}`}
      {...props}
      ref = {ref}
      >
        {
            options?.map((opt)=>(
                <option key={opt} value={opt}>{opt}</option>
            ))
        }
      </select>
    </div>
  )
})

export default Select;
