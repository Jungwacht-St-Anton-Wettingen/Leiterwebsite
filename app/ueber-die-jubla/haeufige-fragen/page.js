"use client"
import { AccordionSection } from '@/components'
import React from 'react'

export default function page() {
  return (
    <div className="container mx-auto px-0 lg:px-10 mb-8">
        <div className='bg-white shadow-lg rounded-lg p-3 pt-8 lg:p-8 mb-8'>
            <h1 className='text-blue-800 transition duration-700 mb-5 hover:text-blue-600 text-4xl font-bold'>Fragen rund um die Jubla</h1>
            <AccordionSection title='
                Was machen Kinder und Jugendliche in der Jubla
            ' content={
                <div className='text-xl'>
                    <p className='mb-3'>Bei uns in der Schar treffen sich <strong>gleich­altrige Kinder und Jugend­liche</strong> mit ihren Leitungs­personen zu regel­mässigen Gruppen­stunden.</p> 
                    <p className='mb-3'>Ob am Waldrand eine Hütte bauen, mit Kreide ein Riesen­mandala malen, auf einer Wiese Kräuter für ein Zauber­trank sammeln, mit dem Velo an den nächst­gelegenen Bach fahren, im Tief­schnee den Dorf­hügel hinunter­schlitteln, in einer Sommer­nacht eine Pyjama-Party veranstalten – Die Kinder und Jugend­lichen gestalten die <strong>Gruppen­stunden</strong> mit und machen sie zu unvergess­lichen Erlebnissen mit Freund*innen.</p>
                    <p className='mb-3'>Neben Gruppen­stunden gibt es auch <strong>Schar­anlässe und Lager mit der ganzen Schar</strong>. Dort erleben alle Alters­gruppen gemeinsam ein <stong>viel­seitiges Angebot mit spannenden Aktivitäten</stong>.</p>
                </div>
             } />
            <AccordionSection title='
                Wie oft finden in der Jubla Gruppenstunden, Schar­anlässe und Lager statt?
            ' content={
                <div className='text-xl'>
                    <p className='mb-3'><strong>Einmal pro Woche</strong> an einem fixen Wochentag findet eine Gruppenstunde statt. Zwischendurch gibt es an Wochenenden Scharanlässe.</p> 
                    <p className='mb-3'>Das Sommerlager ist unser Jahres­höhepunkt. Meist im Sommer, in gewissen Scharen aber auch im Herbst, Winter oder Frühling, geht es gemeinsam für <strong>eine oder zwei Wochen ins Zelt- oder Hauslager</strong>.</p>
                </div>
             } />
            <AccordionSection title='
                Ab welchem Alter können Kinder in die Jubla?
            ' content={
                <div className='text-xl'>
                    <p className='mb-3'>Bei uns beginnt das Angebot <strong>ab der 2. Primarschule</strong>. Es gibt aber auch Scharen, die spezielle Programme für jüngere Kinder anbieten. </p> 
                </div>
             } />
            <AccordionSection title='
                Können alle in die Jubla?
            ' content={
                <div className='text-xl'>
                    <p className='mb-3'>Ja klar! Wer alt genug für die jüngste Gruppe unserer Schar ist, darf an den Aktivitäten teilhaben. Für eine Aufnahme in die Jubla spielen weder Geschlecht, Herkunft, Religion, Sexualität oder Beeinträchtigungen jeglicher Art eine Rolle. <strong>In der Jubla findet jede*r seinen Platz</strong>.</p> 
                </div>
             } />
            <AccordionSection title='
                Wer leitet die Jubla?
            ' content={
                <div className='text-xl'>
                    <p className='mb-3'>Wir sind junge Erwachsene, die die Gruppenstunden, Anlässe und Lager planen und durchführen. Wir investieren dafür viel Freizeit und haben Spass daran, uns dafür <strong>ehrenamtlich</strong> zu engagieren (d.h. wir erhalten dafür keine finanzielle Entschädigugung). </p> 
                    <p className='mb-3'>Als Leitungspersonen werden wir von <strong>Begleitpersonen</strong> (Scharbegleitung, Präses, Lager-Coach) unterstützt. Wir besuchen diverse <strong>Aus- und Weiterbildungskurse</strong>, die in Zusammenarbeit mit <a className='font-bold text-blue-800 hover:underline underline-offset-2' href='https://www.jugendundsport.ch/'>Jugend + Sport (J+S)</a> angeboten werden. So wird eine fach- und kindgerechte Freizeitgestaltung sichergestellt.</p>
                    <a className='font-bold text-blue-800 hover:underline underline-offset-2 mb-3' href='https://www.jubla.ch/ueber-die-jubla/ausbildung-und-begleitung'>Mehr zur Ausbildung und Begleitung</a>
                </div>
             } />
            <AccordionSection title='
                Was ist der Unterschied zwischen Jungwacht, Blauring und Jubla?
            ' content={
                <div className='text-xl'>
                    <p className='mb-3'>Zu ihrer Gründungszeit (30er Jahre) war das Angebot der Jubla geschlechtergetrennt. In der <strong>Jungwacht</strong> waren die Knaben, im <strong>Blauring</strong> waren die Mädchen. In den 70er Jahren schlossen sich immer mehr einst getrennte Jungwacht- und Blauring-Scharen zusammen und nannten sich neu «<strong>Jubla</strong>». In der Jubla sind Kinder und Jugendliche <strong>aller Geschlechter</strong> willkommen.</p> 
                </div>
             } />
            <AccordionSection title='
                Die Jubla und die Kirche – Wie ist das genau?
            ' content={
                <div className='text-xl'>
                    <p className='mb-3'>Ihren Ursprung hat die Jubla in der katholischen Kirche. Noch heute ist die Jubla Teil der katholischen Kirche, allerdings sind <strong>Kinder und Jugendliche aller Kulturen, Religionen und Konfessionen herzlich willkommen</strong>.</p> 
                </div>
             } />
        </div>
    </div>
  )
}
