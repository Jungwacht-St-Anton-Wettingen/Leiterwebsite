// components/CalendarSubscription.js

import { useEffect } from 'react';

const CalendarSubscription = () => {
  useEffect(() => {
    const isAppleDevice = /iPhone|iPod|Macintosh|MacIntel|MacPPC/.test(navigator.userAgent);
    const subscribeButton = document.getElementById('subscribeButton');

    if (isAppleDevice) {
      const subscribeBtn = document.createElement('a');
      subscribeBtn.href = 'webcal://www.stanton-jungwacht-wettingen.ch/agenda.ics';
      subscribeBtn.innerHTML = '<span class="text-4xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">Kalender abonnieren <img src="images/Calander.png" class="h-8 inline-block ml-2  align-center" alt="Calendar icon" /></span>';
      subscribeButton.innerHTML = '';
      subscribeButton.appendChild(subscribeBtn);
    } else {
      const subscribeBtn = document.createElement('a');
      subscribeBtn.href = 'https://www.stanton-jungwacht-wettingen.ch/agenda.ics';
      subscribeBtn.innerHTML = '<span class="text-2xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg">Kalender abonnieren <img src="images/Calander.png" class="h-8 inline-block ml-2  align-center" alt="Calendar icon" /></span>';
      subscribeButton.innerHTML = '';
      subscribeButton.appendChild(subscribeBtn);
    }
  }, []);

  return (
    <div id="subscribeButton" className="text-center my-6">
      <button
        id="subscribeBtn"
        className="text-4xl font-semibold truncate cursor-pointer transition-all text-white bg-blue-800 hover:bg-blue-600 px-2 py-1 rounded-lg hover:shadow-lg"
      >
        Kalender abonnieren <img src="images/Calander.png" class="h-8 inline-block ml-2  align-center" alt="Calendar icon" />
      </button>
    </div>
  );
};

export default CalendarSubscription;