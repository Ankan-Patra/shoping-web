import React from 'react'
import Head from '../components/Head'
import LatestCollection from '../components/LatestCollection'
import Bestseller from '../components/Bestseller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterbox from '../components/NewsLetterbox'

const Home = () => {
  return (
    <div>
      <Head/>
      <LatestCollection/>
      <Bestseller/>
      <OurPolicy/>
      <NewsLetterbox/>
    </div>
  )
}

export default Home
