import Image from 'next/image'
import React from 'react'

function TodayAdd() {
  return (
    <div className='flex justify-center h-[6rem] md:h-[10rem]'>
        <Image width={500} height={500} src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691260833/e-commerce/add4_in5r6z.jpg" alt="" className='w-[100%] rounded-full lg:w-[70%]' />
    </div>
  )
}

export default TodayAdd