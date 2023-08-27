import Link from "next/link"


const NotFound = () => {
    return(
      <>
        <div className='w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4 h-[60vh]'>
          <h1 className='text-4xl font-semibold'>404 - Page Not Found</h1>
          <h4 className='py-10 text-lg text-red-500 font-semibold capitalize'>
            The Nothingness and Emptiness is here...
          </h4>
          <p>
            Use the search box or the links below to explore our amazing
            application
          </p>
          <input
            className='w-4/5 px-6 py-3 border border-gray-400 rounded-full'
            type='search'
            placeholder='Just a dummy search box...'
          />
        </div>
      </>
    )
}

export default NotFound