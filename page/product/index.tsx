import React from 'react'
import dynamic from 'next/dynamic'
import TopLeft from '@/components/userPanel/product/TopLeft'
import TopRight from '@/components/userPanel/product/TopRight'
import ItemsDetails from '@/components/userPanel/product/ItemsDetails'
const AllItems = dynamic(() => import('@/components/userPanel/home/AllItems'))

function index() {
  return (
    <>
    <div className='my-5 container mx-auto'>
      <div className='block md:flex gap-5 justify-between items-center'>
        <TopLeft/>
        <TopRight/>
      </div>
      <ItemsDetails/>
      <AllItems/>
    </div>
    </>
  )
}

export default index