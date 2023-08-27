import React from 'react'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import CategoryCard from './components/categoryCard/CategoryCard'

function Category() {
  return (
    <>
        <div className='container mx-auto my-5 hidden lg:block'>
            <SectionTitle title={"Category"} />
            <div className='grid gap-7 grid-cols-6 grid-rows-2 bg-gray-500'>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>

                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
                <CategoryCard/>
            </div>
        </div>
    </>
  )
}

export default Category