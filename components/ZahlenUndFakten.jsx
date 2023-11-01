import React from 'react'
import { Counter } from '.'

const ZahlenUndFakten = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 p-8 pb-8 mb-8'>
        <h1 className='text-blue-800 mb-0 text-3xl font-bold'>Zahlen und Fakten</h1>
        <h1 className="text-2xl text-blue-400 font-bold mb-8">über die Jubla</h1>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
            <div>
                <Counter targetNumber={390} />
                <h1 className="text-blue-800 mb-5 text-5xl">Scharen</h1>
                <p className='text-2xl'>Über 390 Scharen (lokale Gruppen) bieten schweiz­weit das Angebot «Freizeit­spass und Lebens­schule» an und schaffen damit Lebens­freu(n)de pur!</p>
            </div>
            <div>
                <Counter targetNumber={32500} />
                <h1 className="text-blue-800 mb-5 text-5xl">Mitglieder</h1>
                <p className='text-2xl'>Die Jubla zählt schweiz­weit über 32'500 Mitglieder. Davon sind 22'000 Kinder und Jugend­liche, die regel­mässig an Gruppen­stunden, Schar­anlässen und Lagern teilnehmen. Weitere über 10'500 Jugend­liche und junge Erwachsene engagieren sich als Leitungs­personen oder als Aktive im Verband ehren­amtlich für die Jubla.</p>
            </div>
            <div>
                <Counter targetNumber={3000000} />
                <h1 className="text-blue-800 mb-5 text-5xl">Stunden</h1>
                <p className='text-2xl'>In der Jubla leisten Jugendliche und junge Erwachsene schweiz­weit über 3 Millionen Stunden ehren­amtliches Engagement pro Jahr. Damit gestalten sie unsere Gesell­schaft aktiv mit und eignen sich wert­volle Kompetenzen an.</p>
            </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8'>
            <div>
                <Counter targetNumber={450} />
                <h1 className="text-blue-800 mb-5 text-5xl">Lager</h1>
                <p className='text-2xl'>Schweizweit finden jährlich über 400 Lager statt. Sie bilden neben den Aktivitäten unter dem Jahr den Höhe­punkt einer jeden Jubla-Schar.</p>
            </div>
            <div>
                <Counter targetNumber={150} />
                <h1 className="text-blue-800 mb-5 text-5xl">Kurse</h1>
                <p className='text-2xl'>In über 150 J+S- und Verbands­kursen bilden sich jährlich über 3'500 junge Leitende aus- und weiter. Die Kurse gestalten sich von Ehren­amtlichen für Ehren­amtliche.</p>
            </div>
            <div>
                <Counter targetNumber={21} />
                <h1 className="text-blue-800 mb-5 text-5xl">Kantone</h1>
                <p className='text-2xl'>Die Jubla ist in 21 Kantonen der Deutsch­schweiz vertreten und in 15 Kantonal­verbände, die teilweise wiederum in Regionen unterteilt sind, aufgeteilt. Das Engagement in den Kantons- bzw. Regional­verbänden ist ehrenamtlich.</p>
            </div>
        </div>
    </div>
  )
}

export default ZahlenUndFakten