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
                src='/images/gruppenaktivitäten.jpg'
                alt='Zeltaufbau'
                className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
            </div>
            <div>
              <p className='text-2xl Ein wmt-5'>Das Pfingstlager ist wie ein kleineres Sommerlager. Wir übernachten auch inzelten und spielen den Tag durch Spiele zusammen.</p>
            </div>
            <div>
              <img
                src='/images/motto.jpg'
                alt='Aufbau'
                className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
            </div>
            <div>
              <p className='text-2xl Ein wmt-5'>Das Pfingstlager hat auch ein Motto. DIes ist das gleiche wie das des Sommerlagers </p>
            </div>
            <div>
              <img
                src='/images/mottobaut.jpg'
                alt='Aufbau'
                className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
            </div>
            <div>
              <p className='text-2xl Ein wmt-5'>Ein weiterer wichtiger Programmpunkt ist das Erstellen verschiedener Bauten auf dem Lagerplatz. Dabei helfen alle mit. Mache unserer Bauten sind funktional, aber die meisten sind einfach cool. Unsere baulichen Meisterwerke sind immer mottobezogen und geben dem ganzen Lager eine ganz besondere Note, da wir uns alle kreativ und handwerklich austoben können.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page