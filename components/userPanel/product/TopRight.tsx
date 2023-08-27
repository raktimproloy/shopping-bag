import React from 'react'
import LimitedProductCounter from '../components/limitedProductCounter/LimitedProductCounter'
import FlashSaleTimer from '../components/flashSaleTimer/FlashSaleTimer'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ColorOption from '../components/colorOption/ColorOption';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import HandymanIcon from '@mui/icons-material/Handyman';

function TopRight() {
  return (
    <>
    <div className='w-[100%] lg:w-[48%]'>
        <div className='block text-center lg:flex justify-between align-center gap-3'>
            <p className='hidden lg:block text-xl'>Super Sale</p>
            <div className='w-[100%] lg:w-[30%]'>
            <LimitedProductCounter/>
            </div>
              <FlashSaleTimer/>
        </div>
        <h1 className='w-[100%] lg:w-[70%] text-xl font-semibold  mt-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
        <div className='flex justify-between mt-4'>
          <p className='text-lg'><span>3.5/5</span> review {"("}<span>35</span> Sales{")"}</p>
          <div>
            <ShareIcon className='mr-4'/>
            <MessageIcon className='mr-4'/>
          </div>
        </div>
        <p className='text-2xl font-bold text-red-500 mt-3'>$400</p>
        <p className='line-through mb-2'>$300</p>
        <ColorOption/>
        <div className='flex items-center mt-3'>
          <p className='mr-3 border-2 border-black w-12 text-center'>XL</p>
          <p className='mr-3 border-2 border-black w-12 text-center'>MD</p>
          <p className='mr-3 border-2 border-black w-12 text-center'>SM</p>
        </div>
        <div className='hidden md:flex items-center mt-5'>
          <div className='flex align-center'>
            <AddIcon className='h-[2rem] w-[2rem] bg-gray-500'/>
            <p className='border-2 border-black w-[5rem] text-center h-[2rem] flex items-center justify-center'>
              <span>01</span>
            </p>
            <RemoveIcon className='h-[2rem] w-[2rem] bg-gray-500'/>
          </div>
          <button className='ml-10 bg-red-500 px-5 py-2'>
            Add to cart
          </button>
          <button className='ml-10 bg-blue-500 px-5 py-2'>
            Buy Now
          </button>
        </div>
        {/* Mobile buy button*/}
        <div className='w-[100%] fixed bottom-0 md:hidden'>
          <button className='w-[50%] bg-red-500 py-3'>Buy Now</button>
          <button className='w-[50%] bg-blue-500 py-3'>Add To Cart</button>
        </div>
        <div className='mt-5'>
          <h5 className='text-xl font-bold'>Available Facility</h5>
          <ul className='ml-5'>
            <li className='mb-1'>
              <span className='mr-2'><DeliveryDiningIcon/></span><span> Free Dalivary</span>
            </li>
            <li className='mb-1'>
              <span className='mr-2'><LocalAtmIcon/></span><span>Cash on Delivery</span>
            </li>
            <li className='mb-1'>
              <span className='mr-2'><AssignmentReturnIcon/></span><span>7 Days Returns</span>
            </li>
            <li className='mb-1'>
              <span className='mr-2'><HandymanIcon/></span><span>1 Year Warranty</span>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}

export default TopRight