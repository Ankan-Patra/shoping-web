import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import NewsLetterbox from '../components/NewsLetterbox'

const Placeorder = () => {
  const [method, setMethod] = useState('cod');
  const { navigator } = useContext(ShopContext);
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t mb-12'>
        {/* left part  */}
        <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
          <div className='text-xl sm:text-2xl'>
            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
          </div>
          <div className='flex gap-3'>
            <input required type="text" placeholder='First Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' />
            <input required type="text" placeholder='Last Name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' />
          </div>
          <input required type="email" placeholder='Email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' />
          <input required type="text" placeholder='Place' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' />
          <div  className='flex gap-3'>
            <input required type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' />
            <input required type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' />
          </div>
          <div className='flex gap-3'>
            <input required type="number" placeholder='Zip-code' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' />
            <input required type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' />
          </div>
          <input required type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' />
        </div>

        {/* right part */}
        <div className='mt-8'>
          <div className='mt-8 min-w-80'>
            <CartTotal />
          </div>
          <div className='mt-12'>
            <Title text1={'PAYMENT'} text2={'METHODS'} />
            <div className='flex gap-3 flex-col lg:flex-row'>
              <div onClick={() => setMethod('strip')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'strip' ? 'bg-green-400' : ''}`}></p>
                <img className='h-10 mx-4 w-20' src='https://tse4.mm.bing.net/th?id=OIP.PVpeBnDxw3u6uv9uoiXP0gHaEK&pid=Api&P=0&h=180' alt="" />
              </div>
              <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
                <img className='h-5 mx-4' src={assets.razorpay_logo} alt="" />
              </div>
              <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
                <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
              </div>
            </div>
            <div className='w-full text-end mt-8'>
              <button type='submit' className='bg-black text-white px-16 py-3 text-sm'>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
      <NewsLetterbox/>
    </div>
  )
}

export default Placeorder


