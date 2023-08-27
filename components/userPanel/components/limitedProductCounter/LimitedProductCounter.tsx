import React from 'react'

function LimitedProductCounter() {
  return (
    <>
    <div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "45%"}}></div>
      </div>
      <div className='flex justify-between items-center'>
        <p>5 sold</p>
        <p>Total 20</p>
      </div>
    </div>
    </>
  )
}

export default LimitedProductCounter