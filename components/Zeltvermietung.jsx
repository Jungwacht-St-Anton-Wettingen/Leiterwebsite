import React from 'react'
import Link from 'next/link';

const Zeltvermietung = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h1 className='text-blue-800 mb-8 text-4xl font-bold'>Zeltvermietung</h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='relative overflow-hidden shadow-md mb-4'>
                <img 
                  src='/images/zeltaufbau.jpg'
                  alt='Foto Zeltaufbau'
                  className='object-top  h-full w-full object-cower shadow-lg rounded-lg'
                />
            </div>
            <div>
              <h1 className='text-blue-800 transition duration-700 mb-1 hover:text-blue-600 text-4xl font-bold mb-4'>Festzelt gefällig?</h1>
              <p className='text-lg mb-6'>
                Seit Jahren vermieten wir unser Festzelt für Anlässe aller Art.
              </p>
              <Link className='' href={'/unsere-schar/zeltvermietung'}>
                  <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                    mehr erfahren
                  </span>
                </Link>
          </div>
        </div>
    </div>
  )
}

export default Zeltvermietung