import React from 'react'

function Logo({width=40}) {
  return (
    <div className='relative left-100'>
        <img src="../../comment-blog-icon.svg" alt="tempo" width={width}/>
    </div>
  )
}

export default Logo
