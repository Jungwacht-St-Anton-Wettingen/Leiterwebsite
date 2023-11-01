"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AccordionSection from '@/components/AccordionSection';

export default function Page() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    // Initial überprüfen
    checkScreenSize();

    // Event-Listener für Größenänderungen hinzufügen
    window.addEventListener('resize', checkScreenSize);

    // Event-Listener entfernen, wenn die Komponente entladen wird
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg rounded-t-xl p-0 pb-8 mb-8'>
        <iframe
          className='object-top w-full object-cower shadow-lg rounded-t-xl'
          height={isSmallScreen ? "287" : "560"}
          src="https://www.youtube.com/embed/5bMcxiFIaNI?si=EflYUK-RVj5d2NLN&amp;controls=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className='p-8'>
            <h1 className='text-blue-800 transition duration-700 mb-1 hover:text-blue-600 text-4xl font-bold'>Das ist Jungwacht Blauring (JuBla)</h1>
            <h1 className='text-blue-300 text-2xl mb-4 font-bold'>Kinder- und Jugendverband</h1>
            <h1 className='text-blue-800 text-3xl font-bold mb-2'>Was erlebt man in der Jubla?</h1>
            <h1 className='text-xl mb-2 font-bold'>Die Jubla bedeutet Freizeitspass & Lebensschule</h1>
            <p className='text-lg mb-2'>Jungwacht Blauring (Jubla) bietet Freizeitgestaltung und Ferienlager für alle Kinder und Jugendliche. Die einzelnen Vereine (genannt «Scharen») sind in der ganzen Deutschschweiz verteilt. In der Jubla sind alle willkommen.</p>
            <p className='text-lg'>
                Die <strong>Aktivitäten</strong> richten sich nach den <strong>Grundsätzen</strong> und{" "}
                <a className='font-bold text-blue-800 hover:underline underline-offset-2' href='https://www.jubla.ch/ueber-die-jubla/leitbild/haltungen'>Haltungen</a> von der Jubla.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mt-8'>
                <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                  <div className='relative overflow-hidden shadow-md mb-6'>
                    <img 
                        src='/images/Aktivitäten.jpg'
                        alt='Aktivitäten'
                        className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                    />
                    </div>
                    <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>Aktivitäten</p>
                    <Link className='px-3' href={'/ueber-die-jubla/aktivitaeten'}>
                        <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                            mehr erfahren
                        </span>
                    </Link>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                  <div className='relative overflow-hidden shadow-md mb-6'>
                    <img 
                        src='/images/häufige_fragen.jpg'
                        alt='Häufige Fragen'
                        className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                    />
                    </div>
                    <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>Häufige Fragen</p>
                    <Link className='px-3' href={'/ueber-die-jubla/haeufige-fragen'}>
                        <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                            mehr erfahren
                        </span>
                    </Link>
                </div>
                <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                  <div className='relative overflow-hidden shadow-md mb-6'>
                    <img 
                        src='/images/grundsätze.jpg'
                        alt='Grundsätze'
                        className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                    />
                    </div>
                    <p className='text-2xl text-blue-800 mt-5 px-3 pb-11'>Grundsätze</p>
                    <Link className='px-3' href={'/ueber-die-jubla/grundsaetze'}>
                        <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                            mehr erfahren
                        </span>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
