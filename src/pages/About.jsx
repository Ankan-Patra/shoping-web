
import React from 'react'
import Title from '../components/Title'
import NewsLetterbox from '../components/NewsLetterbox'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src='https://i.pinimg.com/originals/14/91/75/14917541df0cb0404e712fad37156636.jpg' className='w-full md:max-w-[550px] rounded-xl' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure ratione blanditiis, veritatis nemo quia omnis explicabo tempora tenetur, ipsa voluptates sit reprehenderit quibusdam deserunt quos odit atque animi alias iusto natus? Dolor, minus ab.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem repellat necessitatibus quasi accusamus est fuga voluptatum porro eius delectus! Porro inventore non natus suscipit! Delectus consequuntur ipsa quibusdam quae dicta veritatis nesciunt consectetur repellat facere!</p>
          <b className='text-gray-800 text-xl'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius autem ducimus excepturi atque, aspernatur, natus, error repellat quo assumenda voluptate reprehenderit. Quaerat, doloribus.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum culpa facere iste? Soluta reiciendis ea voluptatibus atque sequi animi deserunt voluptates eos!</p>
        </div>
      </div>
      
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      {/* hovering divs */}
      <div className='flex flex-col md:flex-row text-base mb-20 gap-10'>
        <div className='border px-7 md:px-16 py-8 sm:py-10 flex flex-col gap-5 relative overflow-hidden group transition-all duration-300 ease-in-out'>
          <div className='absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'></div>
          <b className='relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out'>Quality Assurance:</b>
          <p className='relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300 ease-in-out'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci obcaecati numquam deleniti facere.</p>
        </div>
        <div className='border px-7 md:px-16 py-8 sm:py-10 flex flex-col gap-5 relative overflow-hidden group transition-all duration-300 ease-in-out'>
          <div className='absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'></div>
          <b className='relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out'>Convenience:</b>
          <p className='relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300 ease-in-out'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci obcaecati numquam deleniti facere.</p>
        </div>
        <div className='border px-7 md:px-16 py-8 sm:py-10 flex flex-col gap-5 relative overflow-hidden group transition-all duration-300 ease-in-out'>
          <div className='absolute inset-0 bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out'></div>
          <b className='relative z-10 group-hover:text-white transition-colors duration-300 ease-in-out'>Exceptional Customer Service:</b>
          <p className='relative z-10 text-gray-600 group-hover:text-white transition-colors duration-300 ease-in-out'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci obcaecati numquam deleniti facere.</p>
        </div>
      </div>
      <NewsLetterbox/>
    </div>
  )
}

export default About
