import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProduct = ({ category, subCategory }) => {

    const { products } = useContext(ShopContext);
    const [related, setRelated] = useState([]);

    useEffect(() => {
        if (products.length > 0) {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item) => category === item.category) // if the category we are passing as a promp is === to the item.category in the products it will be in the product copy 
            productCopy = productCopy.filter((item) => subCategory === item.subCategory)
            setRelated(productCopy.slice(0, 5));
        }
    }, [products])
    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'Related'} text2={'Products'} />

            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    related.map((item , index)=>{
                        return <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name} />
                    })
                }
            </div>
        </div>
    )
}

export default RelatedProduct
