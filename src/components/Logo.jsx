import React from 'react'

function Logo({width=40}) {
  return (
    <div className='relative left-100'>
        <img src="../../vite.svg" alt="tempo" width={width}/>
    </div>
  )
}

export default Logo
