import { getAemtliDetails } from '@/services';
import React, { useState, useEffect } from 'react';

const Kontakt = () => {
  const [aemtliDetails, setAemtliDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAemtliDetails("clowvb7mf3s5a0bw21x91gv3z");
        setAemtliDetails(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (!aemtliDetails) {
    return <p>Lade...</p>;
  }

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h1 className='text-blue-800 mb-0 text-4xl font-bold'>Kontakt</h1>
      <h1 className="text-3xl text-blue-400 font-bold mb-3">Das ist unsere Scharleitung</h1>
      <img 
        className='object-top  h-full w-full object-cower shadow-lg rounded-lg' 
        src={aemtliDetails.foto.url}
        alt={aemtliDetails.leiters[0].name}
        />
      <h1 className="text-4xl text-blue-800 font-bold mt-5 mb-0">{aemtliDetails.leiters[0].name} ({aemtliDetails.leiters[0].taufname})</h1>
      <h1 className="text-3xl text-blue-400 font-bold mb-0">Scharleiter</h1>
      <p className='text-2xl mb-8'>So bin ich erreichbar:</p>
      <p className='text-2xl text-black px-3 mb-2'>Email: <a href={`mailto:${aemtliDetails.leiters[0].email}`} className='text-xl lg:text-2xl text-blue-800 hover:underline underline-offset-2 px-3 cursor-pointer mb-4'>{aemtliDetails.leiters[0].email}</a></p>
      <p className='text-2xl text-black px-3 mb-2'>Telefon: <a href={`tel:${aemtliDetails.leiters[0].telefon}`} className='text-xl lg:text-2xl text-blue-800 hover:underline underline-offset-2 px-3 cursor-pointer mb-4'>{aemtliDetails.leiters[0].telefon}</a></p>
      {aemtliDetails.leiters && aemtliDetails.leiters.length > 0 && (
        <div>
            <h1 className="text-4xl text-blue-800 font-bold mt-8 mb-0">{aemtliDetails.leiters[1].name} ({aemtliDetails.leiters[1].taufname})</h1>
            <h1 className="text-3xl text-blue-400 font-bold mb-0">Vize- Scharleiter</h1>       
            <p className='text-2xl mb-8'>So bin ich erreichbar:</p>
            <p className='text-2xl text-black px-3 mb-2'>Email: <a href={`mailto:${aemtliDetails.leiters[1].email}`} className='text-xl lg:text-2xl text-blue-800 hover:underline underline-offset-2 px-3 cursor-pointer mb-4'>{aemtliDetails.leiters[1].email}</a></p>
            <p className='text-2xl text-black px-3 mb-2'>Telefon: <a href={`tel:${aemtliDetails.leiters[1].telefon}`} className='text-xl lg:text-2xl text-blue-800 hover:underline underline-offset-2 px-3 cursor-pointer mb-4'>{aemtliDetails.leiters[1].telefon}</a></p>
        </div>  
      )}      
    </div>
  );
}

export default Kontakt;
