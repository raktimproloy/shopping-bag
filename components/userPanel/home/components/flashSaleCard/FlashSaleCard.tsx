import React from 'react'

import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import LimitedProductCounter from '@/components/userPanel/components/limitedProductCounter/LimitedProductCounter';

function FlashSaleCard() {
  return (
    <div>
      <Image width={500} height={500} src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691327807/blog-desk/blogs/qbhnzon08c3immkvtvwt.jpg" alt='...' />
      <div className='pr-6 pl-6 pb-6 pt-3 bg-white'>
        <h2 className='font-bold text-xl h-13'>Lorem, ipsum dolor sit amet consectetur </h2>
        <div className='mt-3'>
          <p className='text-xl font-bold text-red-500'>$200</p>
          <p className='line-through text-sm mb-4'>$130</p>
          <LimitedProductCounter/>
          
        </div>
      </div>
    </div>
  )
}

export default FlashSaleCard