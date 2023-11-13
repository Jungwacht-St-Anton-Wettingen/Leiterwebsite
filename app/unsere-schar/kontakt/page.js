"use client"
import Kontakt from '@/components/Kontakt';
import React from 'react';

export default function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <Kontakt />
    </div>
  )
    {/*
      return(
      <div className="container mx-auto px-0 lg:px-10 mb-8">
        <div className='bg-white shadow-lg rounded-lg p-3 pt-8 lg:p-8 mb-8'>
            <h1 className='text-blue-800 transition duration-700 mb-5 hover:text-blue-600 text-6xl font-bold'>Kontakt</h1>
            <div>
              <h1 className='text-blue-800 transition duration-700 text-3xl font-bold'>Lars Kirschbaum</h1>
              <p className='text-xl'>Scharleitung</p>
              <img className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg lg:rounded-lg' src='/images/Lars.jpg' alt='Lars Kirschbaum'/>
              <br />
              <a href="mailto:kontakt@stanton.ch" className='text-blue-800 underline underline-offset-2 text-2xl mt-10'>kontakt@stanton.ch</a>
              <br />
              <a href="tel:078 675 73 91" className='text-blue-800 mt-1 underline-offset-2 text-2xl'>+41 78 675 73 91</a>
            </div>     
      </div>  
    </div>
    )
  */}
}
