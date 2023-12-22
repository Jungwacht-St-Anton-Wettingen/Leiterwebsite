// components/CalendarSubscription.js

import { useEffect } from 'react';

const CalendarSubscription = () => {
  useEffect(() => {
    const isAppleDevice = /iPhone|iPod|Macintosh|MacIntel|MacPPC/.test(navigator.userAgent);
    const subscribeButton = document.getElementById('subscribeBtn'); // Change to 'subscribeBtn'

    if (isAppleDevice) {
      subscribeButton.href = 'webcal://stanton.ch/leiter_agenda.ics';
    } else {
        subscribeButton.href = 'https://stanton.ch/leiter_agenda.ics';
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