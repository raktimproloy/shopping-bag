import dynamic from 'next/dynamic'
import React from 'react'
const Carousel = dynamic(() => import('@/components/userPanel/components/carousel/Carousel'))
const TodayAdd = dynamic(() => import('@/components/userPanel/home/TodayAdd'))
const FlashSale = dynamic(() => import('@/components/userPanel/home/FlashSale'))
const Category = dynamic(() => import('@/components/userPanel/home/Category'))
const BrandNames = dynamic(() => import('@/components/userPanel/home/BrandNames'))
const AllItems = dynamic(() => import('@/components/userPanel/home/AllItems'))

function index() {
  return (
    <>
        <Carousel/>
        <TodayAdd/>
        <FlashSale/>
        <Category/>
        <BrandNames/>
        <AllItems/>
    </>
  )
}

export default index