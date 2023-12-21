"use client"
import React from 'react'
import { CalendarSubscription } from '@/components'

function page() {
  return (
<div className="container mx-auto px-0 lg:px-10 mb-8">
  <div className='bg-white shadow-lg rounded-lg pb-4'>
    <div className='relative shadow-md mb-4 rounded-t-lg rounded-b-lg'>
      <img
        src='images/Japo_Kinder_2024.png'
        alt='Zeltaufbau'
        className='object-top h-full w-full object-cover shadow-lg rounded-t-lg rounded-b-lg'
      />
    </div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className='flex items-center justify-center'>
          <CalendarSubscription/>
        </div>
        <div className='flex items-center justify-center'>
          <a href='images/Japo_Kinder_2024.pdf' download="Japo_Kinder_2024.pdf">
            <span className="text-4xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
              PDF Herunterladen <img src="images/Download icon.png" className="h-8 inline-block ml-2 align-center" alt="Download icon" />
            </span>
          </a>
        </div>
      </div>
  </div>
</div>
  )
}

export default page