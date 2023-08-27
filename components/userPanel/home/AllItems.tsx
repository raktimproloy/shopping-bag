import React from 'react'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import CommonCard from '../components/commonCard/CommonCard'

function AllItems() {
  return (
    <div className='container mx-auto my-5'>
      <SectionTitle title={"Just for you"} />
      <div className='grid grid-cols-1 gap-x-3 gap-y-3 min-[500px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-5'>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
        <CommonCard/>
      </div>
    </div>
  )
}

export default AllItems