"use client"
import React from 'react'
import { CalendarSubscription } from '@/components'

function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg pb-4'>
        <div className='relative shadow-md mb-4 rounded-t-lg rounded-b-lg'>
          <div className='items-center self-center m-auto'>
            <p className='text-center text-4xl'>Jahresprogramm 2024 Jungwacht St. Anton Wettingen</p>
            <br/>
            <div className='p-4'>
              <table className='text-xl text-center rounded-t-lg w-full'>
                <tr  >
                  <td className='bg-blue-400 border border-black' >
                    Gemeinsame Anlässe
                  </td>
                </tr>
                <tr>
                  <td className='bg-green-400 border border-black' >
                    Jungwacht Anlässe
                  </td>
                </tr>
                <tr  >
                  <td className='bg-orange-400 border border-black' >
                    Externe Anlässe
                  </td>
                </tr>
              </table>
              <br/>
              <table className='w-full border border-black'>
                <tr className=' border border-black'>
                  <td className=' border border-black' >
                    <strong>Datum</strong>
                  </td>
                  <td className=' border border-black' >
                    <strong>Anlass</strong>
                  </td>
                  <td className=' border border-black'>
                    <strong>Organisatoren</strong>
                  </td>
                  <td className=' border border-black'>
                    <strong>Zielgruppe</strong>
                  </td>
                </tr>
                <tr>
                  <td className='bg-green-400' >24.12.2023</td>
                  <td className='bg-green-400' >
                    Beerpong-Turnier
                  </td>
                  <td className='bg-green-400' >
                    Leitende
                  </td>
                  <td className='bg-green-400' >
                    Leitende, Ehemalige
                  </td>
                  
                </tr>
                <tr>
                  <td className='bg-orange-400' >15.01.2024</td>
                  <td className='bg-orange-400' >
                    Cola-Abend
                  </td>
                  <td className='bg-orange-400' >
                    Relei
                  </td>
                  <td className='bg-orange-400' >
                    Lalei
                  </td>
                  
                </tr>
                <tr>
                  <td className='bg-blue-400' >
                    26./27.01 2024
                  </td>
                  <td className='bg-blue-400' >
                    Papiersammlung
                  </td>
                  <td className='bg-blue-400' >
                    Papisa-OK
                  </td>
                  <td className='bg-blue-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr >
                  <td className='bg-blue-400' >
                    12. – 16.01.2024
                  </td>
                  <td className='bg-blue-400' >
                    WILA
                  </td>
                  <td className='bg-blue-400' >
                    Juri, OK BR
                  </td>
                  <td className='bg-blue-400' >
                    Kinder
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400'  >
                    Noch unklar
                  </td>
                  <td className='bg-blue-400' >
                    Spielnamitag
                  </td>
                  <td className='bg-blue-400' >
                    15er bzw. neuste Leiter
                  </td>
                  <td className='bg-blue-400' >
                    Kinder (und Eltern)
                  </td>
                  
                </tr>
                <tr >
                  <td className='bg-orange-400'>09.03.2024</td>
                  <td className='bg-orange-400' >
                    Turnhallenspass
                  </td>
                  <td className='bg-orange-400' >
                    Relei
                  </td>
                  <td className='bg-orange-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' >15.03.2024</td>
                  <td className='bg-blue-400' >
                    Lagervorschau
                  </td>
                  <td className='bg-blue-400' >
                    Lalei
                  </td>
                  <td className='bg-blue-400' >
                    Kinder, Eltern
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' s>
                    23./24.03.2024
                  </td>
                  <td className='bg-blue-400' >
                    Palmbasteln/Palmsonntag
                  </td>
                  <td className='bg-blue-400' >
                    Celine, Julia
                  </td>
                  <td className='bg-blue-400' >
                    Kinder/Chilemensche
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-orange-400' >29.04.2024</td>
                  <td className='bg-orange-400' >
                    Regionalforum
                  </td>
                  <td className='bg-orange-400' >
                    Relei
                  </td>
                  <td className='bg-orange-400' >
                    Scharleitung
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-green-400' >27.04.2024</td>
                  <td className='bg-green-400' >
                    Fungi
                  </td>
                  <td className='bg-green-400' >
                    Juri, Benedikt
                  </td>
                  <td className='bg-green-400' >
                    Ehemalige
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' s>
                    04./05.05.2024
                  </td>
                  <td className='bg-blue-400' >
                    Fubatu
                  </td>
                  <td className='bg-blue-400' >
                    Mauro, Gabrijel, Timo
                  </td>
                  <td className='bg-blue-400' >
                    Kinder, Eltern, Leitende, Scharen, Ehemalige
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-orange-400' >08.05.2024</td>
                  <td className='bg-orange-400' >
                    Kaleikafi
                  </td>
                  <td className='bg-orange-400' >
                    Kalei
                  </td>
                  <td className='bg-orange-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400'  >
                    10./11.05.2024
                  </td>
                  <td className='bg-blue-400' >
                    Rekken
                  </td>
                  <td className='bg-blue-400' >
                    Lalei
                  </td>
                  <td className='bg-blue-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-green-400' >25.05.2024</td>
                  <td className='bg-green-400' >
                    Neopreneskalade
                  </td>
                  <td className='bg-green-400' >
                    Serafino, David
                  </td>
                  <td className='bg-green-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400'  >
                    08./09.06.2024
                  </td>
                  <td className='bg-blue-400' >
                    Alphüttenwochenende
                  </td>
                  <td className='bg-blue-400' >
                    OK
                  </td>
                  <td className='bg-blue-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' >15.06.2024</td>
                  <td className='bg-blue-400' >
                    Patrozinium (Jubiläum)
                  </td>
                  <td className='bg-blue-400' >&nbsp;</td>
                  <td className='bg-blue-400' >
                    Eltern, Kinder, Leiter, Ehemalige
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' >29.06.2024</td>
                  <td className='bg-blue-400' >
                    Dankesanlass
                  </td>
                  <td className='bg-blue-400' >
                    Reto
                  </td>
                  <td className='bg-blue-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' s>
                    07.-19.07.2024
                  </td>
                  <td className='bg-blue-400' >
                    SOLA
                  </td>
                  <td className='bg-blue-400' >
                    Lalei
                  </td>
                  <td className='bg-blue-400' >
                    Kinder
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400'  >
                    16. 07.2024
                  </td>
                  <td className='bg-blue-400' >
                    Apéro mit Aussicht
                  </td>
                  <td className='bg-blue-400' >
                    Kalei
                  </td>
                  <td className='bg-blue-400' >
                    Ältere Leiter
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' >09.09.2024</td>
                  <td className='bg-blue-400' >
                    Jubla Tag &amp; Burgerfest
                  </td>
                  <td className='bg-blue-400' >
                    OK Burgerfest
                  </td>
                  <td className='bg-blue-400' >
                    Kinder, Eltern, Ehemalige
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' >21.09.2024</td>
                  <td className='bg-blue-400' >
                    Lagerrückblick
                  </td>
                  <td className='bg-blue-400' >
                    Lalei
                  </td>
                  <td className='bg-blue-400' >
                    Kinder, Eltern, Ehemalige
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-orange-400' >14.10.2024</td>
                  <td className='bg-orange-400' >
                    Regionalforum
                  </td>
                  <td className='bg-orange-400' >
                    Relei
                  </td>
                  <td className='bg-orange-400' >
                    Scharleitung
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' >26.10.2024</td>
                  <td className='bg-blue-400' >
                    Dankesessen mit Putzen
                  </td>
                  <td className='bg-blue-400' >&nbsp;</td>
                  <td className='bg-blue-400' >
                    Leiter
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-green-400'  >
                    31.10 -<br />

                    03.11.2024
                  </td>
                  <td className='bg-green-400' >
                    JAPOOOOOO
                  </td>
                  <td className='bg-green-400' >
                    Schalei, David, Samridh
                  </td>
                  <td className='bg-green-400' >
                    Leitende, 15er Team
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-orange-400' >16.11.2024</td>
                  <td className='bg-orange-400' >
                    Volleynight
                  </td>
                  <td className='bg-orange-400' >
                    Kalei
                  </td>
                  <td className='bg-orange-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' >23.11.2024</td>
                  <td className='bg-blue-400' >
                    Spassbadi
                  </td>
                  <td className='bg-blue-400' >
                    OK
                  </td>
                  <td className='bg-blue-400' >
                    Kinder
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' >05.12.2024</td>
                  <td className='bg-blue-400' >
                    Adventstrail
                  </td>
                  <td className='bg-blue-400' >
                    Präses
                  </td>
                  <td className='bg-blue-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-blue-400' s>
                    13./14.12.2024
                  </td>
                  <td className='bg-blue-400' >
                    Papisa
                  </td>
                  <td className='bg-blue-400' >
                    Papisa OK
                  </td>
                  <td className='bg-blue-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-orange-400'  >
                    21./22.12.2024
                  </td>
                  <td className='bg-orange-400' >
                    Ranftreffen
                  </td>
                  <td className='bg-orange-400' >
                    Bulei
                  </td>
                  <td className='bg-orange-400' >
                    Leitende
                  </td>
                  
                </tr>
                <tr  >
                  <td className='bg-green-400' >24.12.2024</td>
                  <td className='bg-green-400' >
                    Beerpong-Turnier
                  </td>
                  <td className='bg-green-400' >
                    Leitende
                  </td>
                  <td className='bg-green-400' >
                    Leitende, Ehemalige
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className='flex items-center justify-center'>
            <CalendarSubscription />
          </div>
          <div className="text-center my-4">
            <a href='images/Japo_Kinder_2024.pdf' download="Japo_Kinder_2024.pdf" className="text-4xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
              Kalender Abbonieren <img src="images/Download icon.png" className="h-8 inline-block ml-2 py-1 align-center" alt="Calendar icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page