import Image from 'next/image'
import React from 'react'
import Carousel from '../components/carousel/Carousel'

function TopLeft() {
  return (
    <>
    <div className='w-[50%] hidden md:block'>
        <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691327805/pwfujuacz1sdb4bparzw.jpg" alt='' height={1000} width={1000} />
        <div className='grid grid-cols-5 mt-3'>
            <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691327805/pwfujuacz1sdb4bparzw.jpg" alt='' height={1000} width={1000} />
            <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691327805/pwfujuacz1sdb4bparzw.jpg" alt='' height={1000} width={1000} />
            <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691327805/pwfujuacz1sdb4bparzw.jpg" alt='' height={1000} width={1000} />
            <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691327805/pwfujuacz1sdb4bparzw.jpg" alt='' height={1000} width={1000} />
            <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691327805/pwfujuacz1sdb4bparzw.jpg" alt='' height={1000} width={1000} />
        </div>
    </div>
    <div className='block md:hidden'>
      <Carousel/>
    </div>
    </>
  )
}

export default TopLeft