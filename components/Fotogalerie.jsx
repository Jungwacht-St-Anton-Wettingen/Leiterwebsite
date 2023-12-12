import { getJahre } from '@/services';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const Fotogalerie = () => {

    const [jahre, setJahre] = useState(null)

    useEffect(() => {
      getJahre()
        .then((result) => {
            console.log(result);
            setJahre(result);
        })
    }, []);


    
    if (!jahre || !jahre.edges[0].node.galerieEintraege[0]) {
        return(
            <div className="flex items-center justify-center h-screen">
              <div className="bg-white shadow-lg rounded-xl p-8">
                <div className="flex">
                  <img src="../kran.png" alt="kran Icon" className="mr-4 h-20 w-20" />
                  <div>
                    <h1 className="text-2xl font-bold mb-2">Huch?</h1>
                    <p>Es gab ein Fehler beim Laden der Jahre</p>
                  </div>
                </div>
              </div>
            </div>
        );
    }

  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
        <div className='bg-white shadow-lg rounded-lg p-0 pb-8 mb-8'>
            <div className='p-8'>
                <h1 className='text-blue-800 mb-8 text-4xl font-bold'>Galerie</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    {jahre.edges.map((jahr) => (
                        <div key={jahr.node.jahr}>
                            <div className='bg-white shadow-lg rounded-lg p-0 pb-5'>
                                <p className='text-3xl font-bold pt-5 text-blue-800 px-3'>{jahr.node.jahr}</p>
                                <br/>
                                <br/>
                                <Link className='px-3' href={`/galerie/${jahr.node.jahr}`}>
                                    <span className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
                                        Details
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fotogalerie