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

def create_ics_file(events, org_name):
    tz='Europe/Zurich'
    cal = Calendar()
    cal.add('prodid', '-//{}//Calendar//EN'.format(org_name))
    cal.add('version', '2.0')
    cal.add('X-WR-CALNAME', 'Jungwacht St.Anton')
    cal.add('X-WR-TIMEZONE',tz)
    cal.add('TZID',tz)

    for event in events:
        cal.add_component(event)

    return cal.to_ical()

if __name__ == "__main__":
    org_name = "Jungwacht St.Anton Wettingen"

    events_data = [
        {"summary": "WILA", "start_date": date(2024, 2, 12), "end_date": date(2024, 2, 16)},
        {"summary": "Lagervorschau", "start_date": date(2024, 3, 8)},
        {"summary": "Palmbasteln/Palmsonntag", "start_date": date(2024, 3, 23), "end_date": date(2024, 3, 24)},
        {"summary": "Fubatu", "start_date": date(2024, 5, 4), "end_date": date(2024, 5, 5)},
        {"summary": "Patrozinium (Jubiläum)", "start_date": date(2024, 6, 15)},
        {"summary": "SOLA", "start_date": date(2024, 7, 7), "end_date": date(2024, 7, 19)},
        {"summary": "Wassersplashspecial", "start_date": date(2024, 8, 17)},
        {"summary": "Jubla Tag mit Burgerfest", "start_date": date(2024, 9, 14)},
        {"summary": "Lagerrückblick", "start_date": date(2024, 9, 21)},
        {"summary": "Spassbadi", "start_date": date(2024, 11, 23)},
    ]

    ics_events = []
    for event_data in events_data:
        ics_event = create_ics_event(
            event_data["summary"],
            event_data["start_date"],
            event_data.get("end_date"),
            time=event_data.get("time", False),
        )
        ics_events.append(ics_event)

    ics_content = create_ics_file(ics_events, org_name)

    folder_path = "/Users/serafino/jungwacht-1/public/"

    # Save to a file
    with open(path.join(folder_path, 'kinder_agenda.ics'), 'wb') as f:
        f.write(ics_content)