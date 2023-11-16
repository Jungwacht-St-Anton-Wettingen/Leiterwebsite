"use client"
import Link from 'next/link';
import React from 'react'

function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h1 className='text-blue-800 transition duration-700 mb-4 hover:text-blue-600 text-6xl font-bold pb-5'>Lager</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <img 
              src='/images/Gruppenaktivitäten.jpg'
              alt='lager_gruppenfoto'
              className='object-top  h-full w-full rounded'
            />
          </div>
          <div>
            <p className='ml-3 text-xl'>Jedes Jahr gehen wir in den ersten zwei Sommerferienwochen ins Sommerlager, auch SoLa genannt. Wir verbringen zwei Wochen irgendwo in der Schweiz, meistens im Zelt draussen in der Natur, mit Spiel und Spass. Wir haben immer ein Lagermotto, das uns mittels einer Geschichte während des Lagers begleitet. Im Rahmen dieser Geschichte müssen wir Rätsel lösen und Hindernisse überwinden. Wir vergnügen uns mit verschiedenen Sportarten und machen riesige Geländespiele. Daneben ruhen wir uns auch aus mit Wellness und baden. Abends singen wir am Lagerfeuer unsere Lagerlieder. Das ganze Lager durch werden wir von einem Küchenteam, bestehend aus ehemaligen Leitenden, bekocht. </p>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8'>
          <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
            <div className='relative overflow-hidden shadow-md mb-6'>
              <img 
                  src='/images/lager_gruppenfoto.jpg'
                  alt='SoLa'
                  className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
              </div>
              <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>SoLa</p>
              <Link className='px-3' href={'/lager/sola'}>
                  <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                      mehr erfahren
                  </span>
              </Link>
          </div>
          <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
            <div className='relative overflow-hidden shadow-md mb-6'>
              <img 
                  src='/images/Pfila.jpg'
                  alt='Pfila'
                  className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
              </div>
              <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>PfiLa</p>
              <Link className='px-3' href={'/lager/pfila'}>
                  <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                      mehr erfahren
                  </span>
              </Link>
          </div>
          <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
            <div className='relative overflow-hidden shadow-md mb-6'>
              <img 
                  src='/images/wila.jpg'
                  alt='Pfila'
                  className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
              </div>
              <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>WiLa</p>
              <Link className='px-3' href={'/lager/wila'}>
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

export default page