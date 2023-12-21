"use client"
import Link from 'next/link';

import React, { useState, useEffect } from 'react';

const EquationSolver = () => {
  const [Elements, setElements] = useState('');
  const [Days, setDays] = useState('');
  const [result1, setResult1] = useState(160);
  const [result2, setResult2] = useState(0);

  useEffect(() => {
    const resultValue =
      30 * (Elements || 1) * (Days || 1) + 120 * (Elements || 1) + 160;
    setResult1(resultValue);

    const resultValue2 = 3 * (Elements || 1);
    setResult2(resultValue2);
  }, [Elements, Days]);

  const updateValueAndCalculate = (value, identifier) => {
    switch (identifier) {
      case 'Elements':
        setElements(value);
        break;
      case 'Days':
        setDays(value);
        break;
      default:
        break;
    }
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
          <h4 className='mb-8'>Unser Esszelt ist in jedem Sommerlager mit dabei. Das Zelt ist von allen Seiten wind- und wettergeschützt und bietet genug Platz für Festbankgarnituren für circa 20 Personen pro Element. Wir vermieten das Zelt aber auch für private Anlässe und Feste. Nehmen Sie bei Interesse gerne mit uns Kontakt auf über das Kontaktformular. Bei Fragen melden Sie sich bitte bei {' '}
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
                <p className='pb-5'>150CHF für den ersten Tag pro Element<br />Dann 30CHF pro Tag und Element<br />Transport: 160CHF <br />Auf- und Abbau inbegriffen</p>
                <div>
                  <h2 className='text-blue-300 text-3xl mb-2 font-bold pt-5'>Preisberechnung</h2>
                  <label>
                    Elemente (platz für circa 20 Personen):
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="1"
                        max="10"
                        step="1"
                        value={Elements || 1}
                        onChange={(e) => updateValueAndCalculate(e.target.value, 'Elements')}
                        className="text-2xl font-semibold cursor-pointer transition-all text-white bg-blue-800 my-3 rounded-lg mr-2" />
                      <div className="text-2xl">{Elements || 1}</div>
                    </div>
                  </label>
                  <label>
                    Tage:
                    <div className="flex items-center">
                      <input
                        type="range"
                        min="1"
                        max="20"
                        step="1"
                        value={Days || 1}  // If Days is null, use 1 as the default value
                        onChange={(e) => updateValueAndCalculate(e.target.value, 'Days')}
                        className="text-2xl font-semibold cursor-pointer transition-all text-white bg-blue-800 my-3 rounded-lg mr-2"
                      />
                      <div className="text-2xl">{Days || 1}</div>
                    </div>
                  </label>
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