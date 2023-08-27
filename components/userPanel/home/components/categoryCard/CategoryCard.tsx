import Image from 'next/image'
import React from 'react'

function CategoryCard() {
  return (
    <div className='bg-white p-3'>
        <p className='text-right text-red-500'><span>155</span> Products</p>
        <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1692359680/lungi_dd1uh5.jpg" className='w-48 h-48' width={500} height={500} alt='category' />
        <p className='text-center text-md font-bold'>lungi</p>
    </div>
  )
}

export default CategoryCard