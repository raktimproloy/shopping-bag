import React from 'react'
import Description from './components/Description'
import Reviews from './components/Reviews'
import SellerInfo from './components/SellerInfo'

function ItemsDetails() {
  return (
    <div>
        <div className='flex items-center mt-5 border-b-2'>
            <h5 className='text-xl border-r-2 px-3 py-2 cursor-pointer'>Description</h5>
            <h5 className='text-xl border-r-2 px-3 py-2 cursor-pointer'>Reviews</h5>
            <h5 className='text-xl px-3 bg-gray-500 py-2 cursor-pointer font-semibold'>Seller Info</h5>
        </div>
        <div className='py-5'>
            {/* <Description/> */}
            {/* <Reviews/> */}
            <SellerInfo/>
        </div>
    </div>
  )
}

export default ItemsDetails