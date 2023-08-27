import Image from 'next/image'
import React from 'react'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import BrandCard from './components/brandCard/BrandCard'

function BrandNames() {
  return (
    <div className='my-5 container mx-auto hidden lg:block'>
        <SectionTitle title={"Our Brands"}/>
        <div className='grid grid-cols-8'>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>

            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
            <BrandCard/>
        </div>
    </div>
  )
}

export default BrandNames