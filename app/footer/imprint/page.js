import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
        <div className='bg-white shadow-lg rounded-lg p-3 pt-8 lg:p-8 mb-8'>
            <h1 className='text-blue-800 transition duration-700 mb-5 hover:text-blue-600 text-4xl font-bold'>Impressum & Datenschutz</h1>
            <div>
              <p className='text-blue-800 mt-5 px-3 text-2xl'>Jungwacht St.Anton Wettingen</p>
              <p className='text-blue-800 px-3 text-2xl'>Antoniusstrasse 12</p>
              <p className='text-blue-800 px-3 text-2xl'>5430 Wettingen</p>
            </div>
            <a href="mailto:kontakt@stanton.ch" className='text-blue-800 mt-1 px-3 underline underline-offset-2 text-2xl'>kontakt@stanton.ch</a>
            <br />
            <br />
            <div>
              <h1 className='text-blue-300 text-3xl mb-6 font-bold'>Webhosting</h1>
              <strong className='text-2xl px-3'>Vercel Inc.</strong>
              <br />
              <a href='https://www.vercel.com' className='text-blue-800 mt-1 px-3 underline underline-offset-2 text-2xl'>www.vercel.com</a>
            </div>
            <br />
            <br />
            <h1 className='text-blue-800 transition duration-700 mb-5 hover:text-blue-600 text-4xl font-bold'>Datenschutz Mitgliedschaft</h1>
            <p className='mt-5 px-3 text-2xl'>Als Mitglied von Jungwacht Blauring Schweiz halten wir uns an die Datenschutzerklärung was die Mitgliedschaft betrifft: <a href="https://www.jubla.ch/footer/datenschutz" className='text-blue-800 underline underline-offset-2'>jubla.ch/datenschutz/</a></p>




        </div>
    </div>

  )
}