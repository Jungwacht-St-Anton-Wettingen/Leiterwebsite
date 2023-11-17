"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const EquationSolver = () => {
  const [Elements, setElements] = useState('');
  const [Days, setDays] = useState('');
  const [result1, setResult1] = useState(160);
  const [result2, setResult2] = useState(0);

  const handleCalculate = () => {
    const resultValue = 30 * Elements * Days + 150 * Elements + 160;
    setResult1(resultValue);
    const resultValue2 = 3 * Elements;
    setResult2(resultValue2);

  };

  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h1 className='text-blue-800 transition duration-700 mb-4 hover:text-blue-600 text-4xl lg:text-6xl font-bold'>Zeltvermietung</h1>
        <div className='relative overflow-hidden shadow-md mb-6'>
          <img
            src='/images/zeltaufbau.jpg'
            alt='Zeltaufbau'
            className='object-top  h-full w-full object-cower shadow-lg rounded-t-lg'
          />
        </div>
        <div className='text-lg lg:text-2xl'>
          <h4 className='mb-8'>Unser Esszelt ist in jedem Sommerlager mit dabei. Das Zelt ist von allen Seiten wind- und wettergeschützt und bietet genug Platz für Festbankgarnituren für circa 20 Personen pro Element. Wir vermieten das Zelt aber auch für private Anlässe und Feste. Nehmen Sie bei Interesse gerne mit uns Kontakt auf über das untenstehende Kontaktformular. Bei Fragen melden Sie sich bitte bei {' '}
            <a href="mailto:zeltvermitung@stanton.ch">
              <p className='text-blue-800 inline underline underline-offset-2'>zeltvermitung@stanton.ch</p>
            </a></h4>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4'>
            <div>
              <div>
                <h2 className='text-blue-300 text-3xl font-bold pt-0'>Grösse</h2>
                <p>Länge: 3m pro Element<br />Breite: 6m<br />Maximalhöhe: 3.3m <br />Minimalhöhe: 2.3m</p>
              </div>
              <div>
                <h2 className='text-blue-300 text-3xl font-bold pt-5'>Preise</h2>
                <p className='pb-5'>150 CHF für den ersten Tag pro Element<br />Dann 30 CHF pro Tag und Element<br />Transport: 160CHF <br />Auf- und Abbau inbegriffen</p>
                <div>
                  <h2 className='text-blue-300 text-3xl mb-2 font-bold pt-5'>Preisberechnung</h2>
                  <label>
                    Elemente (platz für circa 20 Personen):
                    <input type="number" min="1" className='outline outline-blue-800 w-10 ml-2' value={Elements} onChange={(e) => setElements(e.target.value)} />
                  </label>
                  <br />
                  <label>
                    Tage:
                    <input type="number" min="1" className='outline outline-blue-800 w-10 ml-2' value={Days} onChange={(e) => setDays(e.target.value)} />
                  </label>
                  <br />
                  <button className="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-2 my-3 rounded-lg hover:shadow-lg" onClick={handleCalculate}>Berechnen</button>
                  <br />
                  <p>
                    Preis: <strong>{result1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}CHF</strong><br />
                    Länge: <strong>{result2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'")}m</strong>
                 </p>
                </div>
              </div>
            </div>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSebaXy6nb9dPZFJeOyJkSFEuFs158-i1jRhAgXStPjhWs9Wzg/viewform?embedded=true" width="100%" height="635">Wird geladen…</iframe>
          </div>
        </div>
      </div>
      <br className='mb-10' />
    </div>
  );
};

export default EquationSolver;