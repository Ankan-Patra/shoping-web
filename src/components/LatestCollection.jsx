import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';
import {motion} from 'framer-motion'

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProduct, setLatestProduct] = useState([]);

    useEffect(() => {
        setLatestProduct(products.slice(0, 10))
    }, [])

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl '>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam omnis recusandae commodi aliquid.</p>
            </div>

            {/* rendering products */}

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProduct.map((item, index) => (
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

export default LatestCollection
