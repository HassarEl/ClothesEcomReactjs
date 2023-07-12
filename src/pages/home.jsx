import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/hero'
import FeaturedProducts from '../components/featuredProducts'

const home = () => {
  return <>
    <section className="banner">
      <div className="container-xxl">
        <div className="row">
          <div className="banner-details p-3 d-flex flex-column align-items-start justify-content-center">
            <span className='shadow-lg p-3 mt-3 text-white '>Trade in offer!!</span>
            <h1>Super Value Deals</h1>
            <h2>On all products</h2>
            <p className='p-3 m-0'>Save more with Apnech</p>
            <Link className='button-link mb-3'>Shop Now</Link>
          </div>
        </div>
      </div>
    </section>

    <Hero/>

    <section className="featured-products p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1>Our Featured Products</h1>
            <p>All Weather Modern Designs</p>
          </div>
          <FeaturedProducts />
        </div>
      </div>
    </section>

    <section className="repair">
      <div className="container-xxl">
        <div className="row">
          <div className="repair-details text-center d-flex flex-column align-items-center p-3">
            <span className='text-white mt-1'>Repair Services</span>
            <h2 className='text-white'>On <span className='text-success'>70%</span> Off on All Products And Accessories</h2>
            <div className="mt-3">
              <button>Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default home
