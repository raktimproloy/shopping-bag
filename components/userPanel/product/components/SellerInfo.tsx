import React from 'react'
import Image from 'next/image'

function SellerInfo() {
  return (
    <div className='block md:grid grid-cols-5 items-center'>
        <div className='col-span-1 flex items-center'>
            <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1692435184/blog-desk/users/man_qalzkr.jpg" className='w-16 h-16 rounded-full mr-3' width={500} height={500} alt='image' />
            <h1>Seller Name</h1>
        </div>
        <div className='col-span-2'>
            <h1>Location:</h1>
            <p>London</p>
            <p>United Kingdom</p>
        </div>
        <div className='col-span-2'>
            <h1>Product:</h1>
            <p>Total product: 120</p>
            <p>Category: Mobile, Gaming, Electronics</p>
            <p>Tags: Phone, Apple, IPhone</p>
        </div>
    </div>
  )
}

export default SellerInfo