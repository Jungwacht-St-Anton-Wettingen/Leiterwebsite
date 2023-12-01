import { AccordionSection } from '@/components'
import { getLagerDetails } from '@/services';
import moment from 'moment';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Sola = () => {

  const [lagerDetails, setLagerDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getLagerDetails("sola");
        setLagerDetails(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!lagerDetails) {
    return <p>Lade...</p>;
  }

  if (!lagerDetails.lager.findetstatt) {
    return (
        <div className="container mx-auto px-0 lg:px-10 mb-8">
            <img
                src='../images/lager_gruppenfoto.jpg'
                alt='Sola'
                className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
              />
            <div className='bg-white shadow-lg rounded-b-lg p-8 mb-8'>        
                <div className='relative overflow-hidden mb-6'>
                    <h1 className='text-blue-800 mb-3 text-4xl lg:text-6xl font-bold'>{lagerDetails.lager.was}</h1>
                    <h1 className="text-3xl text-blue-400 font-bold mb-0">Dieses Jahr findet leider kein {lagerDetails.lager.was} statt.</h1>        
                </div>
            </div>
        </div>
    )
  }

  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <img
            src='../images/lager_gruppenfoto.jpg'
            alt='Sola'
            className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
          />
      <div className='bg-white shadow-lg rounded-b-lg p-8 mb-8'>        
        <div className='relative overflow-hidden mb-6'>
          <h1 className='text-blue-800 mb-3 text-4xl lg:text-6xl font-bold'>{lagerDetails.lager.was}</h1>
          <h1 className="text-3xl text-blue-400 font-bold mb-8">Der Höhepunkt im Jubla-Jahr</h1>        
          <div>
            <h1 className='text-blue-800 mb-5 text-4xl font-bold'>Fragen rund ums Lager</h1>
            <AccordionSection title='
                  Was?
              ' content={
                  <div className='text-lg lg:text-xl'>
                      <p className='mb-3'>Das absolute Highlight des Jahres ist das Sommerlager. Im Sommer verbringt die ganze Schar zwei Wochen zusammen auf einem Lagerplatz. Zelten, Geländespiele, Baden, Wandern und vieles mehr erwartet die Kinder und Jugendlichen. Unter einem bestimmten Motto ziehen die Kinder und LeiterInnen los, um grosse Abenteuer zu erleben. Action ist bei den zahlreichen Aktivitäten garantiert. Daneben bieten weitere spannende und lustige Aktivitäten grossen Spass für Jung und Alt.</p>
                  </div>
               } />
            <AccordionSection title='
                  Wann?
              ' content={
                  <div className='text-lg lg:text-xl'>
                      <p className='mb-3'>{lagerDetails.lager.wann}</p>
                  </div>
               } />
            <AccordionSection title='
                  Wo?
              ' content={
                  <div className='text-lg lg:text-xl'>
                      <p className='mb-3'>{lagerDetails.lager.wo}</p>
                  </div>
               } />
          </div>
          <br />
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
            {lagerDetails.lagersConnection.edges.map((post) => (
                <div key={post.node.title}>
                    <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                        <div className='relative overflow-hidden shadow-md mb-6'>
                            <img 
                                src={post.node.blogImage.url}
                                alt={post.node.title}
                                className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
                              />
                        </div>
                        <p className='text-2xl font-bold text-blue-800 px-3'>Sola Blog {post.node.jahr}</p>
                        <br />
                        <Link className='px-3' href={`/lager/${post.node.blogSlug}`}>
                            <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                                Details
                            </span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
          {lagerDetails.lager.spendelink && (
            <div>
              <h1 className='text-blue-800 mt-5 mb-5 text-4xl font-bold'>Spenden</h1>
              <h1 className="text-lg lg:text-2xl text-blue-400 font-bold mb-8">Um unser Lager durchführen zu können, sind wir auf eure Unterstützung angewiesen. Vielen Dank schon einmal im Voraus!</h1>
              <p className='text-lg lg:text-xl mb-3'>In dieser Tabelle könnt ihr etwas eintragen, was ihr spenden wollt:</p>
              <a className='font-bold text-lg lg:text-xl text-blue-800 hover:underline underline-offset-2 mb-3' href={lagerDetails.lager.spendelink}>{lagerDetails.lager.spendelink}</a>
            </div>
          )}
          {lagerDetails.lager.anmeldelink && (
            <div>
              <h1 className='text-blue-800 mt-5 mb-8 text-4xl font-bold'>Anmeldung</h1>
              <h1 className="text-lg lg:text-2xl text-blue-400 font-bold mb-3">Hier könnt ihr euch für das Wila Anmelden:</h1>
              <a className='font-bold text-lg lg:text-xl text-blue-800 hover:underline underline-offset-2 mb-3' href={lagerDetails.lager.anmeldelink}>{lagerDetails.lager.anmeldelink}</a>
            </div>
          )}
          {lagerDetails.lager.lagerleitung[0] && (
            <div>
                <br />
                <h1 className='text-blue-800 mt-5 mb-2 text-4xl font-bold'>Lagerleitung {lagerDetails.lager.jahr}</h1>
                <h1 className="text-lg lg:text-2xl text-blue-400 font-bold mb-3">Bei Fragen sind wir gerne für euch da!</h1>
                {lagerDetails.lager.lagerleitung.map((leiter) => (
                <div key={leiter.name}>
                    <div className='bg-white shadow-xl rounded-xl mb-8 p-0'>
                        <div className='grid grid-cols-1 lg:grid-cols-10'>
                            <div className='relative overflow-hidden shadow-md col-span-2'>
                                <img 
                                    src={leiter.image.url}
                                    alt={leiter.name}
                                    className='object-top  h-full w-full object-cower shadow-lg rounded-t-xl lg:rounded-tr-none lg:rounded-l-xl'
                                  />
                            </div>   
                            <div className='m-5 col-span-8'>
                                <p className='text-4xl font-bold text-blue-800 mb-2 px-3'>{leiter.name}</p>
                                <div className='grid grid-cols-1 lg:grid-cols-2'>
                                    <div>
                                        <p className='text-2xl text-black px-3 mb-2'>{'Taufname: '+leiter.taufname}</p>
                                        <p className='text-2xl text-black px-3 mb-2'>{'Gruppe: '+leiter.gruppe.join(', ')}</p>
                                        <p className='text-2xl text-black px-3 mb-2'>{'Ämtli: ' + leiter.aemtli.join(', ')}</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl text-black px-3 mb-5'>{'Kurse: ' + leiter.kurse.join(', ')}</p>
                                        <p className='text-2xl text-black px-3 mb-2'>Email:</p>
                                        <a href={`mailto:${leiter.email}`} className='text-xl lg:text-2xl text-blue-800 hover:underline underline-offset-2 px-3 cursor-pointer mb-4'>{leiter.email}</a>
                                    </div>
                                </div>
                            </div>   
                        </div>            
                    </div>
                </div>
            ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sola