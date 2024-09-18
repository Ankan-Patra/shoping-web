import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets, products } from '../assets/frontend_assets/assets';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const { productId } = useParams(); //  <Route path='/product/:productId' element={<Product />} />  we have taken productId from there
  const { products, currency , addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {

    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })

  }
  useEffect(() => {
    fetchProductData();
  }, [productId, products])

  

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>

      {/* product data  */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.6%] '>
            {
              productData.image.map((item, index) => {
                return <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              })
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>
        {/* Product info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p>(152)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {
                productData.sizes.map((item, index) => {
                  return <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-400" : ""}`} key={index}>{item}</button>
                })
              }
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id , size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Origina Products</p>
            <p>COD is available on order above 100$</p>
            <p>Easy 7 days returns available</p>
          </div>
        </div>
      </div>
      {/* review section    */}

      <div className='mt-20'>
        <div className='flex'>
           <b className='border px-5 py-3 text-sm'>Description</b>
           <p className='border px-5 py-3 text-sm'>Reviews</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quia enim incidunt perferendis qui mollitia nemo possimus eligendi, libero modi delectus autem accusamus eos rem temporibus cum illo veritatis sit consectetur? Soluta enim labore rem ea accusantium autem, reprehenderit ad eaque placeat in sequi quis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro quod iusto nostrum amet atque debitis iure est corrupti, in nemo beatae eveniet eos quia facere neque fugiat fugit velit tempore iste pariatur ab.</p>
        </div>
      </div>
      
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : <div className='opacity-0'> </div>
}

export default Product


// import React, { useContext, useEffect, useState, useRef, useCallback } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/frontend_assets/assets';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency } = useContext(ShopContext);
//   const [productData, setProductData] = useState(false);
//   const [image, setImage] = useState('');
//   const [size, setSize] = useState('');
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const scrollContainerRef = useRef(null);

//   const fetchProductData = async () => {
//     products.map((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         setImage(item.image[0]);
//         return null;
//       }
//     });
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   const generateRandomReview = () => {
//     const names = ['Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'Grace', 'Henry'];
//     const reviewTexts = [
//       'Great product! Highly recommended.',
//       'Good quality for the price.',
//       'Exactly what I was looking for.',
//       'Decent, but could be better.',
//       'Exceeded my expectations!',
//       'Not bad, but not great either.',
//       'Amazing value for money.',
//       'Will definitely buy again!'
//     ];

//     return {
//       name: names[Math.floor(Math.random() * names.length)],
//       text: reviewTexts[Math.floor(Math.random() * reviewTexts.length)],
//       rating: Math.floor(Math.random() * 5) + 1
//     };
//   };

//   useEffect(() => {
//     const newReviews = Array.from({ length: 20 }, generateRandomReview);
//     setReviews(newReviews);
//   }, []);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (scrollContainer) {
//       const scrollWidth = scrollContainer.scrollWidth;
//       const animationDuration = scrollWidth / 50; // Adjust speed here

//       scrollContainer.style.setProperty('--scroll-width', `${scrollWidth}px`);
//       scrollContainer.style.setProperty('--animation-duration', `${animationDuration}s`);
      
//       scrollContainer.addEventListener('mouseenter', () => {
//         scrollContainer.style.animationPlayState = 'paused';
//       });
      
//       scrollContainer.addEventListener('mouseleave', () => {
//         scrollContainer.style.animationPlayState = 'running';
//       });
//     }
//   }, [reviews]);

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <img
//         key={index}
//         src={index < rating ? assets.star_icon : assets.star_dull_icon}
//         alt=""
//         className="w-3.5"
//       />
//     ));
//   };

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//       {/* product data  */}
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.6%] '>
//             {
//               productData.image.map((item, index) => {
//                 return <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
//               })
//             }
//           </div>
//           <div className='w-full sm:w-[80%]'>
//             <img src={image} className='w-full h-auto' alt="" />
//           </div>
//         </div>
//         {/* Product info */}
//         <div className='flex-1'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-1 mt-2'>
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_dull_icon} alt="" className="w-3 5" />
//             <p>(152)</p>
//           </div>
//           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//           <div className='flex flex-col gap-4 my-8'>
//             <p>Select Size</p>
//             <div className='flex gap-2'>
//               {
//                 productData.sizes.map((item, index) => {
//                   return <button onClick={() => setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-400" : ""}`} key={index}>{item}</button>
//                 })
//               }
//             </div>
//           </div>
//           <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
//           <hr className='mt-8 sm:w-4/5' />
//           <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//             <p>100% Original Products</p>
//             <p>COD is available on order above 100$</p>
//             <p>Easy 7 days returns available</p>
//           </div>
//         </div>
//       </div>
      
//       {/* Review section */}
//       <div className='mt-20 overflow-hidden'>
//         <div className='flex mb-6'>
//           <b className='border px-5 py-3 text-sm'>Description</b>
//           <p className='border px-5 py-3 text-sm'>Reviews ({reviews.length})</p>
//         </div>
//         <div 
//           ref={scrollContainerRef}
//           className='flex space-x-4 pb-4 animate-scroll'
//           style={{
//             '--scroll-width': '5000px',
//             '--animation-duration': '100s',
//             animation: 'scroll var(--animation-duration) linear infinite'
//           }}
//         >
//           {reviews.concat(reviews).map((review, index) => (
//             <div 
//               key={index}
//               className='flex-shrink-0 w-64 border p-4 rounded-lg shadow'
//             >
//               <div className='flex items-center justify-between mb-2'>
//                 <p className='font-semibold'>{review.name}</p>
//                 <div className='flex'>
//                   {renderStars(review.rating)}
//                 </div>
//               </div>
//               <p className='text-sm'>{review.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(calc(-1 * var(--scroll-width) / 2));
//           }
//         }
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </div>
//   ) : <div className='opacity-0'> </div>;
// };

// export default Product;