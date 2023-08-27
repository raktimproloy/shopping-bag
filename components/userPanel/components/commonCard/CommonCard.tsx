import React from 'react'

import Image from 'next/image'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ColorOption from '../colorOption/ColorOption';

function CommonCard() {
  return (
    <div className='cursor-pointer'>
      <Image width={500} height={500} src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691327807/blog-desk/blogs/qbhnzon08c3immkvtvwt.jpg" alt='...' />
      <div className='pr-6 pl-6 pb-6 pt-3 bg-steel-500'>
        <ColorOption/>
        <h2 className='font-bold text-xl h-13'>Lorem, ipsum dolor sit amet consectetur </h2>
        <div className=''>
          <p>$200</p>
          <p>
            <span>
              <StarIcon/>
              <StarIcon/>
              <StarIcon/>
              <StarHalfIcon/>
              <StarBorderIcon/>
            </span>
              4.9{"("}33 review{")"}
          </p>

        </div>
      </div>
    </div>
  )
}

export default CommonCard