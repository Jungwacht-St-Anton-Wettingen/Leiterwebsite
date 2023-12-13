"use client"
import { Baustelle } from '@/components'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
        <div className='bg-white shadow-lg rounded-lg p-0 pb-8 mb-8'>
            <div className='p-8'>
                <h1 className='text-blue-800 mb-8 text-4xl font-bold'>Videos</h1>
                <p className='text-lg lg:text-2xl'>Videos findest du auf unserem YouTube-Kanal.</p>
                <br/>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                  <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                    <div className='relative overflow-hidden shadow-md mb-6'>
                      <img 
                          src='../images/Lager.jpg'
                          alt='Banner Lager'
                          className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                      />
                    </div>
                    <p className='text-2xl text-blue-800 mt-5 px-3'>Youtube</p>
                    <p className='text-2xl font-bold text-blue-800 px-3 pb-3'>Jungwacht Blauring St.Anton Wettingen</p>
                    <Link className='px-3' href='https://www.youtube.com/@jublastantonwettingen'>
                        <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                          Detais
                        </span>
                      </Link>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page