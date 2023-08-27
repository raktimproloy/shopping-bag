import React from 'react'
import Image from 'next/image'

function BrandCard() {
  return (
    <>
        <Image className='h-[12rem] w-[12rem]' 	style={{objectFit: "contain"}} src="https://res.cloudinary.com/dcbantk1f/image/upload/v1692421434/e-commerce/Adidas_vrxsou.png" width={500} height={500} alt='brand logo' />
    </>
  )
}

export default BrandCard