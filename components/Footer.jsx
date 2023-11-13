import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='bg-white shadow-lg rounded-t-lg p-8 mt-8'>
        <div className="container mx-auto px-10 mb-8">
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                <div>
                    <p className='text-blue-800 mt-5 px-3'>Jungwacht St.Anton Wettingen</p>
                    <p className='text-blue-800 px-3'>Antoniusstrasse 12</p>
                    <p className='text-blue-800 px-3'>5430 Wettingen</p>
                </div>
                <div>
                    <Link prefetch={false} href={'/ueber-die-jubla'}>
                        <p className='text-blue-800 mt-5 px-3 underline underline-offset-2'>Über die Jubla</p>
                    </Link>
                    <Link prefetch={false} href={'/unsere-schar'}>
                        <p className='text-blue-800 mt-1 px-3 underline underline-offset-2'>Unsere Schar</p>
                    </Link>
                    <Link prefetch={false} href={'/galerie'}>
                        <p className='text-blue-800 mt-1 px-3 underline underline-offset-2'>Galerie</p>
                    </Link>
                </div>
                <div>
                    <Link prefetch={false} href={'/agenda'}>
                        <p className='text-blue-800 mt-5 px-3 underline underline-offset-2'>Agenda</p>
                    </Link>
                    <Link prefetch={false} href={'/unsere-schar/kontakt'}>
                        <p className='text-blue-800 mt-1 px-3 underline underline-offset-2'>Kontakt</p>
                    </Link>
                    <Link prefetch={false} href={'/unsere-schar/zeltvermietung'}>
                        <p className='text-blue-800 mt-1 px-3 underline underline-offset-2'>Zeltvermietung</p>
                    </Link>
                </div>
            </div>
            <br />
            <a href="mailto:kontakt@stanton.ch" className='text-blue-800 mt-1 px-3 underline underline-offset-2'>kontakt@stanton.ch</a>
            <br />
            <br />
            <Link prefetch={false} href={'/Impressum-&-Datenschutz'}>
                <p className='text-blue-800 mt-1 px-3 underline underline-offset-2'>Impressum & Datenschutz</p>
            </Link>
        </div>
    </div>
  )
}

export default Footer