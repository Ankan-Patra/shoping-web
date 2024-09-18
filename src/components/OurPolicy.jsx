// import React from 'react'
// import { assets } from '../assets/frontend_assets/assets'

// const OurPolicy = () => {
//   return (
//     <div className='flex flex-col sm:flex-row justify-center gap-14 sm:gap-20 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
//       <div className='p-4 border-2 rounded-xl hover:bg-black hover:text-white '>
//         <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
//         <p className='font-semibold'>Easy Exchange Policy</p>
//         <p className='text-gray-500'>We Offer Hassle free exchange policy</p>
//       </div>
//       <div className='p-4 border-2 rounded-xl hover:bg-black hover:text-white '>
//         <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
//         <p className='font-semibold'>7 Days Return Policy</p>
//         <p className='text-gray-500'>We Offer 7 Days free Return policy</p>
//       </div>
//       <div className='p-4 border-2 rounded-xl hover:bg-black hover:text-white '>
//         <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
//         <p className='font-semibold'>Best customer support</p>
//         <p>We Offer 24/7 Customer Support</p>
//       </div>
//     </div>
//   )
// }

// export default OurPolicy


import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center gap-14 sm:gap-20 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      <PolicyCard 
        icon={assets.exchange_icon} 
        title="Easy Exchange Policy" 
        description="We Offer Hassle free exchange policy"
      />
      <PolicyCard 
        icon={assets.quality_icon} 
        title="7 Days Return Policy" 
        description="We Offer 7 Days free Return policy"
      />
      <PolicyCard 
        icon={assets.support_img} 
        title="Best customer support" 
        description="We Offer 24/7 Customer Support"
      />
      
    </div>
  );
}

const PolicyCard = ({ icon, title, description }) => (
  <div className='relative p-4 border-2 rounded-xl overflow-hidden group'>
    <div className='relative z-10 transition-colors duration-300 group-hover:text-white'>
      <img src={icon} className='w-12 m-auto mb-5 ' alt="" />
      <p className='font-semibold'>{title}</p>
      <p className='text-gray-500 group-hover:text-gray-200'>{description}</p>
    </div>
    <div className='absolute inset-x-0 bottom-0 h-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300 ease-out group-hover:h-full'></div>
  </div>
);

export default OurPolicy;

