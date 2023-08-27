import React from 'react'

import FlashSaleCard from './components/flashSaleCard/FlashSaleCard'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import FlashSaleTimer from '../components/flashSaleTimer/FlashSaleTimer'

function FlashSale() {
  return (
    <div className='container mx-auto my-5'>
      <SectionTitle title={`Flash Sale`}/>
      <div className='bg-gray-500 p-5'>
        <div className='flex justify-between items-center pb-5'>
          <FlashSaleTimer/>
          <button className='text-sm bg-red-500 py-2 px-3 lg:text-xl'>See more</button>
        </div>
        <div className='grid gap-4 grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 '>
          <FlashSaleCard/>
          <FlashSaleCard/>
          <FlashSaleCard/>
          <FlashSaleCard/>
          <FlashSaleCard/>
        </div>
      </div>
    </div>
  )
}

export default FlashSale