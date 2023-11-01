import { getLeiter } from '@/services';
import React, { useState, useEffect } from 'react';

const LeiterListe = () => {

  const [leiterListe, setLeiterListe] = useState([])

  useEffect(() => {
    getLeiter()
      .then((result) => setLeiterListe(result))
  }, []); // leere Abhängigkeitsliste bedeutet, dass der Effekt nur beim Mounten der Komponente aufgerufen wird
  

  return (
    <div className="container mx-auto px-10 mb-8">
        <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
            <h1 className='text-blue-800 mb-5 text-4xl font-bold'>Leiter der Jungwacht St.Anton</h1>
            <p className='text-2xl mb-8'>Wir sind junge, motivierte Menschen und ein eingespieltes Team. Ehrenamtlich organisieren wir Freizeitaktivitäten für Kinder und Jugendliche.</p>
            {leiterListe.map((leiter) => (
                <div key={leiter.node.name}>
                    <div className='bg-white shadow-xl rounded-xl mb-8 p-0'>
                        <div className='grid grid-cols-1 lg:grid-cols-10'>
                            <div className='relative overflow-hidden shadow-md col-span-2'>
                                <img 
                                    src={leiter.node.image.url}
                                    alt={leiter.node.name}
                                    className='object-top  h-full w-full object-cower shadow-lg rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl'
                                  />
                            </div>   
                            <div className='m-5 col-span-8'>
                                <p className='text-4xl font-bold text-blue-800 mb-2 px-3'>{leiter.node.name}</p>
                                <div className='grid grid-cols-1 lg:grid-cols-2'>
                                    <div>
                                        <p className='text-2xl text-black px-3 mb-2'>{'Taufname: '+leiter.node.taufname}</p>
                                        <p className='text-2xl text-black px-3 mb-2'>{'Gruppe: '+leiter.node.gruppe[0]}</p>
                                        <p className='text-2xl text-black px-3 mb-2'>{'Ämtli: '+leiter.node.aemtli[0]}</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl text-black px-3 mb-5'>{'Kurse: '+leiter.node.kurse[0]}</p>
                                        <p className='text-2xl text-black px-3 mb-2'>Email:</p>
                                        <a href={`mailto:${leiter.node.email}`} className='text-2xl text-blue-800 hover:underline underline-offset-2 px-3 cursor-pointer mb-4'>{leiter.node.email}</a>
                                    </div>
                                </div>
                            </div>   
                        </div>            
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LeiterListe