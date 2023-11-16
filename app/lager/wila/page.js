"use client"
import React from 'react'

function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h1 className='text-blue-800 transition duration-700 mb-4 hover:text-blue-600 text-4xl lg:text-6xl font-bold'>Winterlager</h1>
        <div className='relative overflow-hidden shadow-md mb-6'>
          <img
            src='/images/wila.jpg'
            alt='Zeltaufbau'
            className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
          />
          <div className='grid lg:grid-cols-2 gap-8 mt-8'>
            <div>
              <img
                src='/images/wila_aktivitaet.jpg'
                alt='Zeltaufbau'
                className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
            </div>
            <div>
              <p className='text-3xl Ein wmt-5'>Im Winter ist das schönste der Schnee. Um diesen vool auszunutzen gehen wir manchmal im Winter in die Berge. Dort verbringen wir eine Woche oder ein Wochenende mit iglubauen und schlittenfahren und gensiessen den Schnee.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page