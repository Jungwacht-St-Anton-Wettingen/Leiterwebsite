import React from 'react'
import { Counter } from '.'

const ZahlenUndFakten = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-8 mb-8'>
        <h1 className='text-blue-800 mb-0 text-3xl font-bold'>Zahlen und Fakten</h1>
        <h1 className="text-2xl text-blue-400 font-bold mb-8">über die Jubla</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
            <div>
                <Counter targetNumber={390} />
                <h1 className="text-blue-800 mb-5 text-5xl">Scharen</h1>
                <p className='text-2xl'>Über 390 Scharen (lokale Gruppen) bieten schweizweit das Angebot «Freizeitspass und Lebensschule» an und schaffen damit Lebensfreu(n)de pur!</p>
            </div>
            <div>
                <Counter targetNumber={32500} />
                <h1 className="text-blue-800 mb-5 text-5xl">Mitglieder</h1>
                <p className='text-2xl'>Die Jubla zählt schweizweit über 32500 Mitglieder. Davon sind 22000 Kinder und Jugendliche, die regelmässig an Gruppenstunden, Scharanlässen und Lagern teilnehmen. Weitere über 10500 Jugendliche und junge Erwachsene engagieren sich als Leitungspersonen oder als Aktive im Verband ehrenamtlich für die Jubla.</p>
            </div>
            <div>
                <Counter targetNumber={3000000} />
                <h1 className="text-blue-800 mb-5 text-5xl">Stunden</h1>
                <p className='text-2xl'>In der Jubla leisten Jugendliche und junge Erwachsene schweizweit über 3 Millionen Stunden ehrenamtliches Engagement pro Jahr. Damit gestalten sie unsere Gesellschaft aktiv mit und eignen sich wertvolle Kompetenzen an.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
            <div>
                <Counter targetNumber={450} />
                <h1 className="text-blue-800 mb-5 text-5xl">Lager</h1>
                <p className='text-2xl'>Schweizweit finden jährlich über 400 Lager statt. Sie bilden neben den Aktivitäten unter dem Jahr den Höhepunkt einer jeden Jubla-Schar.</p>
            </div>
            <div>
                <Counter targetNumber={150} />
                <h1 className="text-blue-800 mb-5 text-5xl">Kurse</h1>
                <p className='text-2xl'>In über 150 J+S- und Verbandskursen bilden sich jährlich über 3500 junge Leitende aus- und weiter. Die Kurse gestalten sich von Ehrenamtlichen für Ehrenamtliche.</p>
            </div>
            <div>
                <Counter targetNumber={21} />
                <h1 className="text-blue-800 mb-5 text-5xl">Kantone</h1>
                <p className='text-2xl'>Die Jubla ist in 21 Kantonen der Deutschschweiz vertreten und in 15 Kantonalverbände, die teilweise wiederum in Regionen unterteilt sind, aufgeteilt. Das Engagement in den Kantons- bzw. Regionalverbänden ist ehrenamtlich.</p>
            </div>
        </div>
    </div>
  )
}

export default ZahlenUndFakten