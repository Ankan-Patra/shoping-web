import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { motion } from 'framer-motion'

const Bestseller = () => {
    const { products } = useContext(ShopContext);
    const [bestseller, setBestSeller] = useState([]);

    useEffect(() => {
        setBestSeller(products.filter((item) => { return item.bestseller }).slice(0, 5));
    }, [])
    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <Title text1={'Best'} text2={'Seller'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sit voluptates magni.</p>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestseller.map((item, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
                        </motion.div>
                    ))
                }
            </div>

        </div>
    )
}

export default Bestseller
