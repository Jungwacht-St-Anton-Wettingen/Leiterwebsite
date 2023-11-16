"use client"
import React from 'react'

function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h1 className='text-blue-800 transition duration-700 mb-4 hover:text-blue-600 text-4xl lg:text-6xl font-bold'>Pfingstlager</h1>
        <div className='relative overflow-hidden shadow-md mb-6'>
          <img
            src='/images/Pfila.jpg'
            alt='Zeltaufbau'
            className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
          />
          <div className='grid lg:grid-cols-2 gap-8 mt-8'>
            <div>
              <img
                src='/images/pfila_aktivität.jpg'
                alt='Zeltaufbau'
                className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
            </div>
            <div>
              <p className='text-3xl Ein wmt-5'>Das Pfingstlager ist wie ein kleineres Sommerlager das wir machmal über Pfingste machen. Es ist meist irgendwo um Wettingen herum und hat das gleiche Motto wie das darauffolgenden Sommerlager. Wir übernachten auch in Zelten und spielen den Tag durch Spiele zusammen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page