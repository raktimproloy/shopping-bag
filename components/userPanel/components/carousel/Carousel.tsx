'use client'
import Image from "next/image"
import {useState} from "react"

function Carousel() {
    const [carouselShowNumber, setCarouselShowNumber] = useState(1)
  return (
        <div id="default-carousel" className="relative w-full my-2 md:my-5 lg:my-8" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}
            <div className="relative h-40 overflow-hidden rounded-lg md:h-80">
                {/* <!-- Item 1 --> */}
                <div className={`${carouselShowNumber === 1 ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item>
                    <Image width={500} height={500} src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691260827/e-commerce/add1_vlr5mt.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 2 --> */}
                <div className={`${carouselShowNumber === 2 ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item>
                    <Image width={500} height={500} src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691260830/e-commerce/add2_zpthwo.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 3 --> */}
                <div className={`${carouselShowNumber === 3 ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item>
                    <Image width={500} height={500} src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691260831/e-commerce/add3_pdinfz.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 4 --> */}
                <div className={`${carouselShowNumber === 4 ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item>
                    <Image width={500} height={500} src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691260833/e-commerce/add4_in5r6z.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
                {/* <!-- Item 5 --> */}
                <div className={`${carouselShowNumber === 5 ? "block" : "hidden"} duration-700 ease-in-out`} data-carousel-item>
                    <Image width={500} height={500} src="https://res.cloudinary.com/dcbantk1f/image/upload/v1691260832/e-commerce/add5_d3q9rb.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-8 left-1/2 md:bottom-12 lg:bottom-5">
                <button type="button" className={`w-3 h-3 rounded-full ${carouselShowNumber === 1 ? "bg-blue-700" : "bg-white"}`} aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0" onClick={() => setCarouselShowNumber(1)}></button>
                <button type="button" className={`w-3 h-3 rounded-full ${carouselShowNumber === 2 ? "bg-blue-700" :  "bg-white"}`} aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1" onClick={() => setCarouselShowNumber(2)}></button>
                <button type="button" className={`w-3 h-3 rounded-full ${carouselShowNumber === 3 ? "bg-blue-700" : "bg-white"}`} aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2" onClick={() => setCarouselShowNumber(3)}></button>
                <button type="button" className={`w-3 h-3 rounded-full ${carouselShowNumber === 4 ? "bg-blue-700" : "bg-white"}`} aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3" onClick={() => setCarouselShowNumber(4)}></button>
                <button type="button" className={`w-3 h-3 rounded-full ${carouselShowNumber === 5 ? "bg-blue-700" : "bg-white"}`} aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4" onClick={() => setCarouselShowNumber(5)}></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={() => setCarouselShowNumber(carouselShowNumber === 1 ? 5 : carouselShowNumber - 1 )}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={() => setCarouselShowNumber(carouselShowNumber === 5 ? 1 : carouselShowNumber + 1 )}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

  )
}

export default Carousel