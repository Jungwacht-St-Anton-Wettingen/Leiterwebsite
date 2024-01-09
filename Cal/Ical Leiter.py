from icalendar import Calendar, Event
from datetime import date, datetime, timedelta
from os import path
def create_ics_event(summary, start_date, end_date=None, location=None, description=None, time=False):
    event = Event()
    event.add('summary', summary)
    if time:
        event.add('dtstart', start_date)
        if end_date:
            event.add('dtend', end_date)
        else:
            event.add('dtend',start_date+ timedelta(hours=2))
    else:
        # Format dates without the time portion
        event.add('dtstart;value=date', start_date.strftime('%Y%m%d'))
        event.add('dtend;value=date', (end_date if end_date else start_date).strftime('%Y%m%d'))
    
    if location:
        event.add('location', location)
    
    if description:
        event.add('description', description)

    return event

def create_ics_file(events, org_name, cal_name):
    tz='Europe/Zurich'
    cal = Calendar()
    cal.add('prodid', '-//{}//Calendar//EN'.format(org_name))
    cal.add('version', '2.0')
    cal.add('X-WR-CALNAME', cal_name+' Kalender')
    cal.add('X-WR-TIMEZONE',tz)
    cal.add('TZID',tz)

    for event in events:
        cal.add_component(event)

    return cal.to_ical()

if __name__ == "__main__":
    org_name = "Jungwacht St.Anton Wettingen"

    events_data = {
        "Jungwacht": [
            {"summary": "Beerpong-Turnier", "start_date": date(2023, 12, 24), "description": "OK: Leitende \nZielgruppe: Leitende, Ehemalige"},
            {"summary": "Fungi", "start_date": date(2024, 4, 27), "description": "OK: Juri, Benedikt \nZielgruppe: Ehemalige"},
            {"summary": "Neopreneskalade", "start_date": date(2024, 5, 25), "description": "OK: Serafino, David \nZielgruppe: Leitende\nZielgruppe: Leitende, 15er Team"},
            {"summary": "Beerpong-Turnier", "start_date": date(2024, 12, 24), "description": "OK: Leitende \nZielgruppe: Leitende, Ehemalige"},
        ],
        "Gemeinsamer": [
            {"summary": "Papiersammlung", "start_date": date(2024, 1, 26), "end_date": date(2024, 1, 27), "description": "OK: Papisa-OK \nZielgruppe: Leitende"},
            {"summary": "WILA", "start_date": date(2024, 2, 12), "end_date": date(2024, 2, 16), "description": "OK: Juri, OK BR \nZielgruppe: Kinder"},
            {"summary": "Lagervorschau", "start_date": date(2024, 3, 15), "description": "OK: Lalei \nZielgruppe: Kinder, Eltern"},
            {"summary": "Palmbasteln/Palmsonntag", "start_date": date(2024, 3, 23), "end_date": date(2024, 3, 24), "description": "OK: Celine, Julia \nZielgruppe: Kinder/Chilemensche"},
            {"summary": "Fubatu", "start_date": date(2024, 5, 4), "end_date": date(2024, 5, 5), "description": "OK: Mauro, Gabrijel, Timo \nZielgruppe: Kinder, Eltern, Leitende, Scharen, Ehemalige"},
            {"summary": "Kaleikafi", "start_date": date(2024, 5, 8), "description": "OK: Kalei \nZielgruppe: Leitende"},
            {"summary": "Rekken", "start_date": date(2024, 5, 10), "end_date": date(2024, 5, 11), "description": "OK: Lalei \nZielgruppe: Leitende"},
            {"summary": "Neopreneskalade", "start_date": date(2024, 5, 25), "description": "OK: Serafino, David \nZielgruppe: Leitende"},
            {"summary": "Alphüttenwochenende", "start_date": date(2024, 6, 8), "description": "OK: OK \nZielgruppe: Leitende"},
            {"summary": "Patrozinium (Jubiläum)", "start_date": date(2024, 6, 15), "description": "OK: \nZielgruppe: Eltern, Kinder, Leiter, Ehemalige"},
            {"summary": "Dankesanlass", "start_date": date(2024, 6, 29), "description": "OK: Reto \nZielgruppe: Leitende"},
            {"summary": "SOLA", "start_date": date(2024, 7, 7), "end_date": date(2024, 7, 19), "description": "OK: Lalei \nZielgruppe: Kinder"},
            {"summary": "Apéro mit Aussicht", "start_date": date(2024, 7, 16), "description":"OK: Kalei \nZielgruppe: Ältere Leiter"},
            {"summary": "Jubla Tag & Burgerfest", "start_date": date(2024, 9, 9), "description": "OK: OK Burgerfest \nZielgruppe: Kinder, Eltern, Ehemalige"},
            {"summary": "Lagerrückblick", "start_date": date(2024, 9, 21), "description": "OK: Lalei \nZielgruppe: Kinder, Eltern, Ehemalige"},
            {"summary": "Dankesessen mit Putzen", "start_date": date(2024, 10, 26), "description": "OK: \nZielgruppe: Leiter"},
            {"summary": "Spassbadi", "start_date": date(2024, 11, 23), "description": "OK: OK \nZielgruppe: Kinder"},
            {"summary": "Adventstrail", "start_date": date(2024, 12, 5), "description": "OK: Präses \nZielgruppe: Leitende"},
            {"summary": "Papisa", "start_date": date(2024, 12, 13), "end_date": date(2024, 12, 14), "description": "OK: Papisa OK \nZielgruppe: Leitende"},
        ],
        "Externer": [
            {"summary": "Cola-Abend", "start_date": date(2024, 1, 15), "description": "OK: Relei \nZielgruppe: Lalei"},
            {"summary": "Turnhallenspass", "start_date": date(2024, 3, 9), "description": "OK: Relei \nZielgruppe: Leitende"},
            {"summary": "Regionalforum", "start_date": date(2024, 4, 29), "description": "OK: Relei \nZielgruppe: Scharleitung"},
            {"summary": "Kaleikafi", "start_date": date(2024, 5, 8), "description": "OK: Kalei \nZielgruppe: Leitende"},
            {"summary": "Regionalforum", "start_date": date(2024, 10, 14), "description": "OK: Relei \nZielgruppe: Scharleitung"},
            {"summary": "Volleynight", "start_date": date(2024, 11, 16), "description": "OK: Kalei \nZielgruppe: Leitende"},
            {"summary": "Ranftreffen", "start_date": date(2024, 12, 21), "end_date": date(2024, 12, 22), "description": "OK: Bulei \nZielgruppe: Leitende"}
        ]
    }

for groups, events in events_data.items():
        ics_events = []
        for event_data in events:
            ics_event = create_ics_event(
                event_data["summary"],
                event_data["start_date"],
                event_data.get("end_date"),
                time=event_data.get("time"),
                description=event_data.get("description"),
            )
            ics_events.append(ics_event)

        ics_content = create_ics_file(ics_events, org_name,groups)
        
        folder_path = "/Users/serafino/jungwacht-1/public/"     
        # Save to a file
        filename = f"{groups}_agenda.ics"
        with open(path.join(folder_path,filename), 'wb') as f:
            f.write(ics_content)