import React from 'react'
import Image from 'next/image'

function Reviews() {
  return (
    <div>
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1692435184/blog-desk/users/man_qalzkr.jpg" className='w-16 h-16 rounded-full mr-3' width={500} height={500} alt='image' />
                    <div>
                        <h1>Rafiqul Islam</h1>
                        <p>London, UK</p>
                    </div>
                </div>
                <p>3.5/5 rating</p>
            </div>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio iusto placeat assumenda aliquam. Labore praesentium facilis, velit ea nostrum itaque placeat magni at officiis eum, quo iusto molestiae asperiores similique.</p>
        </div>
        <div className='ml-[5%]'>
            <div className='flex items-center'>
                <Image src="https://res.cloudinary.com/dcbantk1f/image/upload/v1692435184/blog-desk/users/man_qalzkr.jpg" className='w-16 h-16 rounded-full mr-3' width={500} height={500} alt='image' />
                <h1>Company Name</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in, rem soluta ea voluptatum, nisi, similique molestiae ullam numquam laborum tempore ad modi odit fuga sunt praesentium optio dolorum. Impedit.</p>
        </div>
        <div className='bg-red-500 text-center mt-5'>
            Load More
        </div>
    </div>
  )
}

export default Reviews