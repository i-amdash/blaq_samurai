'use client'

import React from 'react'

const Footer = () => {
  return (
    <section className='bg-primary text-white'>
      <div className='max-w-7xl w-full mx-auto py-8 px-4 md:px-8'>
        <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-4'>
          <h2 className='text-2xl font-bold text-center md:text-left'>
            Blaq Samurai
          </h2>
          
          <p className='text-center text-sm px-4 md:px-0 max-w-xs md:max-w-md'>
            Follow us on social media for the latest updates and offers.
          </p>
          
          <div className='flex space-x-6 md:space-x-8'>
            <a href='#' className='text-sm md:text-base text-white hover:text-gray-300 transition-colors'>
              Facebook
            </a>
            <a href='#' className='text-sm md:text-base text-white hover:text-gray-300 transition-colors'>
              Twitter
            </a>
            <a href='#' className='text-sm md:text-base text-white hover:text-gray-300 transition-colors'>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer