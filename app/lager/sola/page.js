"use client"
import React from 'react'

function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h1 className='text-blue-800 transition duration-700 mb-4 hover:text-blue-600 text-4xl lg:text-6xl font-bold'>Sommerlager</h1>
        <div className='relative overflow-hidden shadow-md mb-6'>
          <img
            src='/images/lager_gruppenfoto.jpg'
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
              <p className='text-2xl Ein wmt-5'>Jeden Tag spielen wir alle zusammen auf der Spiel- und Sportwiese. Von Völkerball zu Volleyball ist all dabei und jeden Tag steht etwas anderes auf dem Programm.</p>
            </div>
            <div>
              <img
                src='/images/motto.jpg'
                alt='Aufbau'
                className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
            </div>
            <div>
              <p className='text-2xl Ein wmt-5'>Jedes Sommerlager hat auch ein Motto. Dies führt zu Problemen, die wir als Gruppe zusammen lösen müsse. Wir schlüpfen alle in neue Rollen und probier ein gemeinsames Ziel zu erreichen. Dafür machen wir mottobezogenes Spiele und Aktivitäten.</p>
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