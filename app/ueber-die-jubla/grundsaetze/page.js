"use client"
import { Baustelle, Counter, ZahlenUndFakten } from '@/components'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
        <div className='bg-white shadow-lg rounded-lg p-8 pb-8 mb-8'>
            <h1 className='text-blue-800 transition duration-700 mb-2 hover:text-blue-600 text-4xl font-bold'>Die fünf Grundsätze von Jungwacht Blauring</h1>
            <p className='text-2xl mb-5'>Nach den folgenden Werten richten wir unsere Aktivitäten aus:</p>
            <div className="lg:flex mb-5">
                <img src="../images/zusammen-sein.jpg" alt="zusammen sein" className="lg:h-1/4 lg:w-1/4 lg:mr-4 mb-5" />
                <div>
                    <h1 className="text-3xl text-blue-400 font-bold mb-3">zusammen sein</h1>
                    <p className='text-xl'>Jungwacht Blauring bildet eine Gemein­schaft, in der alle mit ihren Stärken und Schwächen zusammen sind und Grosses bewirken. Wir leben Akzeptanz und Respekt und setzen uns dafür ein. Gemeinsam haben wir Spass und übernehmen Verantwortung für uns und andere.</p>
                </div>
            </div>
            <div className="lg:flex mb-5">
                <img src="../images/mitbestimmen.jpg" alt="mitbestimmen" className="lg:h-1/4 lg:w-1/4 lg:mr-4 mb-5" />
                <div>
                    <h1 className="text-3xl text-blue-400 font-bold mb-3">mitbestimmen</h1>
                    <p className='text-xl'>In Jungwacht Blauring dürfen alle ihre eigenen Ideen und Ansichten einbringen. Wir nehmen die Meinungen aller ernst, respektieren sie und treffen gemeinsam Entscheide. Wir engagieren uns für unsere Werte und Haltungen.</p>
                </div>
            </div>
            <div className="lg:flex mb-5">
                <img src="../images/glauben-leben.jpeg" alt="glauben leben" className="lg:h-1/4 lg:w-1/4 lg:mr-4 mb-5" />
                <div>
                    <h1 className="text-3xl text-blue-400 font-bold mb-3">Glauben leben</h1>
                    <p className='text-xl'>In Jungwacht Blauring teilen und feiern wir besondere Momente in grosser Vielfalt und schaffen Raum für Fragen des Lebens. Wir setzen uns für ein friedliches, gerechtes und solidarisches Zusammen­leben ein. So gestalten wir die Welt mit.</p>
                </div>
            </div>
            <div className="lg:flex mb-5">
                <img src="../images/kreativ-sein.jpg" alt="kreativ sein" className="lg:h-1/4 lg:w-1/4 lg:mr-4 mb-5" />
                <div>
                    <h1 className="text-3xl text-blue-400 font-bold mb-3">kreativ sein</h1>
                    <p className='text-xl'>In Jungwacht Blauring sind der Fantasie keine Grenzen gesetzt. Gemeinsam setzen wir kreative Ideen um und wagen Neues. Dabei entdecken und entwickeln wir unsere Fähig­keiten.</p>
                </div>
            </div>
            <div className="lg:flex mb-3">
                <img src="../images/natur-erleben.jpg" alt="natue erleben" className="lg:h-1/4 lg:w-1/4 lg:mr-4 mb-5 lg:mb-0" />
                <div>
                    <h1 className="text-3xl text-blue-400 font-bold mb-3">Natur erleben</h1>
                    <p className='text-xl'>In Jungwacht Blauring unter­nehmen wir viel­fältige Aktivitäten im Freien. Wir entdecken, schätzen und geniessen die Natur. Wir gehen bewusst mit ihr um und tragen Sorge zu ihr.</p>
                </div>
            </div>
        </div>
        <ZahlenUndFakten />
    </div>
  )
}
