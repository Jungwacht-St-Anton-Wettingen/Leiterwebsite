import React from 'react';

const Baustelle = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <div className="flex">
          <img src="../kran.png" alt="Kran Icon" className="mr-4" />
          <div>
            <h1 className="text-3xl font-bold mb-3">Baustelle</h1>
            <p>Diese Seite ist unter Konstruktion. Wir sind bald wieder für dich da!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baustelle;
