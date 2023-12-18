// components/CalendarSubscription.js

import { useEffect } from 'react';

const CalendarSubscription = () => {
  useEffect(() => {
    const isAppleDevice = /iPhone|iPod|Macintosh|MacIntel|MacPPC/.test(navigator.userAgent);
    const subscribeButton = document.getElementById('subscribeBtn'); // Change to 'subscribeBtn'

    if (isAppleDevice) {
      subscribeButton.href = 'webcal://www.stanton-jungwacht-wettingen.ch/agenda.ics';
    } else {
      // Check if the user is on a Windows device
      const isWindowsDevice = /Windows/.test(navigator.userAgent);
      if (isWindowsDevice) {
        subscribeButton.href = 'https://calendar.google.com/calendar/u/1?cid=c3RhbnRvbmp1bmd3YWNodEBnbWFpbC5jb20';
      } else {
        subscribeButton.href = 'https://www.stanton-jungwacht-wettingen.ch/agenda.ics';
      }
    }
  }, []);

  return (
    <div className="text-center my-4">
      <a id="subscribeBtn" className="text-4xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">
        Kalender Abbonieren <img src="images/Calander.png" className="h-8 inline-block ml-2 py-1 align-center" alt="Calendar icon" />
      </a>
    </div>
  );
};

export default CalendarSubscription;