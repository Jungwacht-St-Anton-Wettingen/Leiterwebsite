import React, { useEffect, useState } from 'react';
import { getPosts } from '../services'
import Link from 'next/link';

const Interduction = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-8 mb-8'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div>
            <h1 className='text-blue-800 transition duration-700 mb-1 hover:text-blue-600 text-4xl font-bold'>Jungwacht St.Anton Wettingen</h1>
            <h1 className='text-blue-300 text-3xl mb-6 font-bold'>Für Kinder und Jugendliche</h1>
            <p className='text-lg'>
              Wir bieten ein spannendes Freizeitangebot und unvergessliche Sommerlager! 
            </p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
              <div className='relative overflow-hidden shadow-md mb-6'>
                <img 
                    src='/images/anlaesse_banner.jpg'
                    alt='Banner Anlässe'
                    className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                />
              </div>
              <p className='text-2xl text-blue-800 mt-5 px-3'>Unsere nächsten</p>
              <p className='text-2xl font-bold text-blue-800 px-3 pb-3'>Anlässe</p>
              <Link className='px-3' href={'/agenda'}>
                  <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                    zur Agenda
                  </span>
                </Link>
            </div>
            <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
              <div className='relative overflow-hidden shadow-md mb-6'>
                <img 
                  src='/images/lager_gruppenfoto.jpg'
                  alt='Gruppenfoto Lager'
                  className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                />
              </div>
              <p className='text-2xl text-blue-800 mt-5 px-3'>Alle wichtigen Infos zum</p>
              <p className='text-2xl font-bold text-blue-800 px-3 pb-3'>Lager</p>
              <Link className='px-3' href={'/lager'}>
                  <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                    mehr erfahren
                  </span>
                </Link>
            </div>
            <div className='lg:hidden bg-white shadow-lg rounded-lg p-0 pb-5'>
              <div className='relative overflow-hidden shadow-md mb-6'>
                <img 
                  src='/images/natur-erleben.jpg'
                  alt='über die Jubla'
                  className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                />
              </div>
              <p className='text-2xl text-blue-800 mt-5 px-3'>Alles wichtige</p>
              <p className='text-2xl font-bold text-blue-800 px-3 pb-3'>über die Jubla</p>
              <Link className='px-3' href={'/ueber-die-jubla'}>
                  <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                    mehr erfahren
                  </span>
                </Link>
            </div>
            <div className='lg:hidden bg-white shadow-lg rounded-lg p-0 pb-5'>
              <div className='relative overflow-hidden shadow-md mb-6'>
                <img 
                  src='/images/unsere-schar-1.jpg'
                  alt='unsre Schar'
                  className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                />
              </div>
              <p className='text-2xl text-blue-800 mt-5 px-3'>Hier gehts zu</p>
              <p className='text-2xl font-bold text-blue-800 px-3 pb-3'>unserer Schar</p>
              <Link className='px-3' href={'/unsere-schar'}>
                  <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                    mehr erfahren
                  </span>
                </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Interduction