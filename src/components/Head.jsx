import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import {motion} from 'framer-motion'

const Head = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-400'>
            {/* left side part */}
            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ duration: 0.7 }}
                className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm md:text-base'>Our Bestsellers</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>Shop Right NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
                </motion.div>
            </div>

            {/* righted side */}
            <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0 }}
            transition={{ duration: 0.7 }}
            src={assets.hero_img} className='w-full sm:w-1/2' alt="this is nothing" />
            
        </div>
    )
}

export default Head
