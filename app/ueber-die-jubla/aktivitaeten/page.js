import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
        <h1 className='text-blue-800 transition duration-700 mb-4 hover:text-blue-600 text-4xl font-bold'>Vielseitige Aktivitäten</h1>
        <div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4'>
            <div className='relative overflow-hidden shadow-md mb-4'>
                  <img 
                    src='/images/Gruppenaktivitäten.jpg'
                    alt='Gruppenaktivitäten'
                    className='object-top  h-full w-full object-cower shadow-lg rounded-lg'
                  />
              </div>
              <div>
              <h1 className='text-blue-300 text-3xl mb-4 font-bold'>Gruppenaktivitäten</h1>
              <p className='text-xl mb-6'>
                In der Jubla treffen sich <strong>gleichaltrige Kinder</strong> regelmässig zu Gruppenaktivitäten, den sogenannten <strong>Gruppenstunden</strong>. Ob am Waldrand eine Hütte bauen, mit Kreide ein Riesenmandala malen, auf einer Wiese Kräuter für einen Zaubertrank sammeln, mit dem Velo an den nächstgelegenen Bach fahren, im Tiefschnee den Dorfhügel hinunterschlitteln oder in einer Sommernacht eine Pyjama-Party veranstalten. Die Gruppenaktivitäten werden von den Leitungs­personen organisiert und durch­geführt und durch die Kinder aktiv mitgestaltet. Das garantiert ein <strong>abwechslungsreiches Freizeitangebot</strong>, das den Interessen der Kinder entspricht und für unvergessliche Erlebnisse mit ihren Freund*innen sorgt.
              </p>
              </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4'>
            <div className='relative overflow-hidden shadow-md mb-4'>
                  <img 
                    src='/images/Scharanlässe.jpg'
                    alt='Gruppenaktivitäten'
                    className='object-top  h-full w-full object-cower shadow-lg rounded-lg'
                  />
              </div>
              <div>
              <h1 className='text-blue-300 text-3xl mb-4 font-bold'>Scharanlässe</h1>
              <p className='text-xl mb-6'>
                Neben den Gruppenaktivitäten verbringen die Kinder an Anlässen Zeit mit allen Vereinsmitgliedern. Das bedeutet, dass Gross und Klein gemeinsam an einem <strong>vielseitigen Angebot von Aktivitäten</strong> teilhaben.
              </p>
              <p className='text-xl mb-6'>
              Eine Schnitzeljagd durchs Dorf, ein Kinoabend im Jugendraum, eine Sommer-olympiade auf dem Schulhausareal, ein Laternenmarsch durch den Schnee oder ein Cervelat- und Schlangenbrot-Wettbräteln im Wald. Drei bis vier Mal im Jahr heisst es in der Jubla: Gemeinsam Spass haben, Neues wagen und Grosses schaffen!
              </p>
              </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4'>
            <div className='relative overflow-hidden shadow-md mb-4'>
                  <img 
                    src='/images/Lager.jpg'
                    alt='Gruppenaktivitäten'
                    className='object-top  h-full w-full object-cower shadow-lg rounded-lg'
                  />
              </div>
              <div>
              <h1 className='text-blue-300 text-3xl mb-4 font-bold'>Lager</h1>
              <p className='text-xl mb-6'>
                Im Sommerlager verbringen wir 2 tolle Wochen, immer in den ersten zwei Sommerferienwochen. 
              </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
