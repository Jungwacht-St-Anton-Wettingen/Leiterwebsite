"use client"
import { Baustelle, ImageSlider } from '@/components'
import Link from 'next/link';
import React from 'react'

const images = [
  {
    url: '../images/unsere-schar-1.jpg'
  },
  {
    url: '../images/unsere-schar-2.jpeg'
  },
  {
    url: '../images/unsere-schar-3.jpeg'
  }
];

function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg rounded-t-xl p-8 pb-8 mb-8'>
        <h1 className='text-blue-800 transition duration-700 mb-2 hover:text-blue-600 text-4xl font-bold'>Das ist die Jungwacht St.Anton Wettingen</h1>
        <h1 className="text-3xl text-blue-400 font-bold mb-3">Unsere Schar</h1>
        <p className='text-2xl mb-0'>Unsere Jungwacht besteht aus einem engagierten <strong>Leitungsteam</strong> und <strong>Gruppen</strong>, in denen sich gleichaltrige Kinder und Jugendliche regelmässig treffen. Gemeinsam gehen wir ins <strong>Lager</strong> und verbringen spannende <strong>Scharanlässe</strong>. </p>
        <ImageSlider images={images} />
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 mb-8'>
          <div>
            <h1 className="text-3xl text-blue-400 font-bold mb-3">Folge uns</h1>
            <p className='text-2xl mb-4'>für regelmässige Neuigkeiten und Impressionen:</p>
            <p className='text-2xl mb-0'>Instagram:</p>
            <a href='https://www.instagram.com/jungwacht_st.anton/' className='text-2xl text-blue-800 hover:underline underline-offset-2 cursor-pointer mb-4'>Jungwacht St.Anton Wettingen - Instagram</a>
            <p className='text-2xl mb-0'>YouTube:</p>
            <a href='https://www.youtube.com/@jublastantonwettingen' className='text-2xl text-blue-800 hover:underline underline-offset-2 cursor-pointer mb-4'>Jungwacht Blauring St. Anton Wettingen - YouTube</a>
          </div>
          <div>
            <h1 className="text-3xl text-blue-400 font-bold mb-3">Allgemeine Fragen</h1>
            <p className='text-2xl mb-8'>Unsere Scharleitung steht gerne zur Verfügung.</p>
            <Link href={`/unsere-schar/kontakt`}>
              <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 p-5 rounded-lg hover:shadow-lg">
                Zum Kontaktformular
              </span>
            </Link>
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8'>
                <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                  <div className='relative overflow-hidden shadow-md mb-6'>
                    <img 
                        src='/images/Leitungsteam.jpg'
                        alt='Leitungsteam'
                        className='object-top object-cower shadow-lg rounded-t-lg'
                    />
                    </div>
                    <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>Leitungsteam</p>
                    <Link className='px-3' href={'/unsere-schar/leitungsteam'}>
                        <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                            mehr erfahren
                        </span>
                    </Link>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                  <div className='relative overflow-hidden shadow-md mb-6'>
                    <img 
                        src='/images/scharartikel.jpg'
                        alt='Scharartikel'
                        className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                    />
                    </div>
                    <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>Scharartikel</p>
                    <Link className='px-3' href={'/unsere-schar/scharartikel'}>
                        <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                            mehr erfahren
                        </span>
                    </Link>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                  <div className='relative overflow-hidden shadow-md mb-6'>
                    <img 
                        src='/images/briefkasten.jpg'
                        alt='Kontakt'
                        className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                    />
                    </div>
                    <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>Kontakt</p>
                    <Link className='px-3' href={'/unsere-schar/kontakt'}>
                        <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                            mehr erfahren
                        </span>
                    </Link>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                  <div className='relative overflow-hidden shadow-md mb-6'>
                    <img 
                        src='/images/zeltaufbau.jpg'
                        alt='Zeltaufbau'
                        className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                    />
                    </div>
                    <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>Zeltvermietung</p>
                    <Link className='px-3' href={'/unsere-schar/zeltvermietung'}>
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