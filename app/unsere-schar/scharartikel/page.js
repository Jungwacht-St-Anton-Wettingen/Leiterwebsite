"use client"
import { ImageSlider } from '@/components'
import React from 'react'

const images = [
  {
    url: '../images/scharartikel_1.jpg'
  },
  {
    url: '../images/scharartikel_2.jpg'
  },
  {
    url: '../images/scharartikel_3.jpg'
  }
];

function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg rounded-t-xl p-8 pb-8 mb-8'>
        <h1 className='text-blue-800 transition duration-700 mb-2 hover:text-blue-600 text-4xl font-bold'>Scharartikel</h1>
        <h1 className="text-3xl text-blue-400 font-bold mb-3">Vertrete unseren Verein</h1>
        <p className='text-2xl mb-0'>Möchtest du deine Farben präsentieren und zeigen, dass du Mitglied von Jungwacht und Blauring St. Anton bist? Dann stehen dir viele Scharartikel zur Verfügung. Sei es ein Pullover, ein T-Shirt und noch vieles mehr. Eine Bestellung abgeben kannst du bei deinen Gruppenleitern. </p>
        <ImageSlider images={images} />
        <h1 className='text-blue-800 transition duration-700 mb-2 hover:text-blue-600 text-3xl font-bold'>Preise:</h1>
        <p className='text-2xl mb-0'>Pulli: 35.00</p>
        <p className='text-2xl mb-0'>T-shirt: 15.00</p>
        <p className='text-2xl mb-0'>Tanktop: 15.00</p>
        <p className='text-2xl mb-0'>Badetuch: 15.00</p>
        <p className='text-2xl mb-0'>Schlüsselanhänger: 5.00</p>
        <p className='text-2xl mb-0'>Totebag: 5.00</p>
      </div>
    </div>
  )
}

export default page