import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products , search , showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]); // display the whole category
  const [category, setCategory] = useState([]);  // display the updated category 
  const [subCategory, setSubcategory] = useState([]); // display the updated subcategory
  const [sortType, setSortType] = useState('Relavent');

  const toggleCatagory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => {
        return prev.filter((item) => item !== e.target.value)
      })
      //When you uncheck a checked box:->
      // The category array already includes this value.
      // So category.includes(e.target.value) is true.
      // Therefore, the if block runs, removing the category from the array.
    }
    else {
      setCategory((prev) => { return [...prev, e.target.value] })
    }
    // When you check a  unchecked box :-> 
    // The category array does not yet include this value.
    // So category.includes(e.target.value) is false.
    // Therefore, the else block runs, adding the new category to the array.
  }

  const toggleSubCatagory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubcategory((prev) => {
        return prev.filter((item) => item !== e.target.value)
      })
    }
    else {
      setSubcategory((prev) => { return [...prev, e.target.value] })
    }
  }


  const filtering = () => {
    let productCopy = products.slice();
    
    if(showSearch && search){
     productCopy = productCopy.filter((item)=>{return item.name.toLowerCase().includes(search.toLowerCase())}); 
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter((item) => subCategory.includes(item.subCategory))
    }
    setFilterProduct(productCopy);
    
  }

  const sortProduct = () => {
    let fPCopy = filterProduct.slice();
    switch (sortType) {
      case 'Low-to-high':
        setFilterProduct(fPCopy.sort((a, b) => (b.price - a.price)));
        break;

      case 'High-to-low':
        setFilterProduct(fPCopy.sort((a, b) => (a.price - b.price)));
        break;

      default:
        filtering();
        break;
    }

  }

  useEffect(() => {
    setFilterProduct(products);
  }, [])

  useEffect(() => {
    filtering();
  }, [category, subCategory, search, showSearch ])

  useEffect(() => {
    sortProduct();
  }, [sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* filter option - Left side */}
      <div className='min-w-60'>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={() => { return setShowFilter(!showFilter) }}>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ''}`} alt="" />
        </p>
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleCatagory} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleCatagory} /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleCatagory} /> Kids
            </p>
          </div>
        </div>

        {/* subcategory */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Topwear"} onChange={toggleSubCatagory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Bottomwear"} onChange={toggleSubCatagory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={"Winterwear"} onChange={toggleSubCatagory} /> Winterwear
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTION'} />
          <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-400 text-sm px-2'>
            <option value="Relavent">Sort by: Relavent</option>
            <option value="High-to-low">Sort by: Low to High</option>
            <option value="Low-to-high">Sort by: High to Low</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProduct.map((item, index) => {
              return <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            })
          }
        </div>
      </div>

    </div>
  )
}

export default Collection
