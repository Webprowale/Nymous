import React from 'react'
import Hero from '../Component/Hero';
import Feature from '../Component/Feature';
import Testimony from '../Component/Testimony';
import Footer from '../Component/Footer';
function Home() {
  return (
    <div className='container-fluid p-0 bg-white'>
        <Hero />
        <Feature />
       <Testimony />
      <Footer />
    </div>
  )
}

export default Home