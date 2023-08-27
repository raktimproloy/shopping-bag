import React from 'react'

function ColorOption() {
  return (
    <div className='flex justify-start align-center'>
        <span className='bg-black w-5 h-5 rounded-full block me-2 cursor-pointer'></span>
        <span className='bg-red-600 w-5 h-5 rounded-full block me-2 cursor-pointer'></span>
        <span className='bg-yellow-200 w-5 h-5 rounded-full block me-2 cursor-pointer'></span>
        <span className='bg-lime-500 w-5 h-5 rounded-full block me-2 cursor-pointer'></span>
        <span className='bg-cyan-500 w-5 h-5 rounded-full block me-2 cursor-pointer'></span>
    </div>
  )
}

export default ColorOption