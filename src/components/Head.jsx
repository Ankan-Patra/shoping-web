import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Head = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* left side part */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>Our Bestsellers</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>Shop Right NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>

            {/* right side */}
            <img src='https://welpmagazine.com/wp-content/uploads/2020/10/158-758x426.jpeg' className='w-full sm:w-1/2' alt="this is nothing" />
        </div>
    )
}

export default Head
