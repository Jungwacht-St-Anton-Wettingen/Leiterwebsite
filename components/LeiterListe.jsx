import { getLeiter } from '@/services';
import React, { useState, useEffect } from 'react';

const LeiterListe = () => {

  const [leiterListe, setLeiterListe] = useState([])

  useEffect(() => {
    getLeiter()
      .then((result) => setLeiterListe(result))
  }, []); // leere Abhängigkeitsliste bedeutet, dass der Effekt nur beim Mounten der Komponente aufgerufen wird
  

  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
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
                                        <p className='text-2xl text-black px-3 mb-2'>{'Gruppe: '+leiter.node.gruppe.join(', ')}</p>
                                        <p className='text-2xl text-black px-3 mb-2'>{'Ämtli: ' + leiter.node.aemtli.join(', ')}</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl text-black px-3 mb-5'>{'Kurse: ' + leiter.node.kurse.join(', ')}</p>
                                        <p className='text-2xl text-black px-3 mb-2'>Email:</p>
                                        <a href={`mailto:${leiter.node.email}`} className='text-xl lg:text-2xl text-blue-800 hover:underline underline-offset-2 px-3 cursor-pointer mb-4'>{leiter.node.email}</a>
                                    </div>
                                </div>
                            </div>   
                        </div>            
                    </div>
                </div>
            ))}
            <div className='text-2xl text-blue px-3 mb-2'>
                <div className=''>
                    <h3 className=' text-blue-800 transition duration-700 mb-1 text-4xl font-bold'>Unsere Aus- und Weiterbildung</h3>
                    <p>Als Leitungspersonen besuchen wir regelmässig{' '}
                        <span>  
                            <a  href="https://www.jubla.ch/ueber-die-jubla/ausbildung-und-begleitung" className='text-2xl text-blue-800 hover:underline underline-offset-2 cursor-pointer mb-4'>Aus- und Weiterbildungskurse</a>
                        </span>
                        , die von Jungwacht Blauring in Zusammenarbeit mit{' '}
                        <span>
                            <a href="http://www.jugendundsport.ch/" className='text-2xl text-blue-800 hover:underline underline-offset-2 cursor-pointer mb-4'>Jugend+Sport (J+S)</a>
                        </span>{' '}    
                        und weiteren Partnerorganisationen organisiert werden. Dabei lernen wir, kind- und jugendgerechte Freizeitgestaltung zu organisieren.
                        </p>
                    <br />
                    <h3 className='text-blue-800 transition duration-700 mb-1 text-4xl font-bold'>Unterstützung durch Begleitpersonen</h3>
                    <p>
                        Wir erhalten von verschiedenen Begleit­personen Unterstützung. Dazu gehört ein*e <strong>Präses</strong>, eine <strong>Scharbegleitung</strong> und für die Aktivität «Lager» zusätzlich ein*e <strong>J+S-Lagercoach</strong>. Dank unserem <strong>breiten Netzwerk</strong> dürfen wir auf die Unterstützung von vielen weiteren Personen zählen. Neben ehe­maligen Mitgliedern der Schar (frühere Leitungs­personen) stehen auch Personen aus dem näheren Umfeld und der Gemeinde (Pfarrei, Behörde, Schule, andere Vereine usw.) bei Bedarf mit Rat und Tat zur Seite.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LeiterListe