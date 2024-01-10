// components/CalendarSubscription.js

import { useEffect, useState } from "react";

const CalendarSubscription = () => {
  const linkData = [
    { name: "Alle Anlässe", link: "leiter_agenda.ics"},
    { name: "Jungwacht", link: "Jungwacht_agenda.ics"},
    { name: "Gemeinsame", link: "Gemeinsamer_agenda.ics"},
    { name: "Externe", link: "Externer_agenda.ics" },
    // Add more calendars as needed
  ];

  useEffect(() => {
    const isAppleDevice = /iPhone|iPod|Macintosh|MacIntel|MacPPC/.test(
      navigator.userAgent
    );

    linkData.forEach((data, index) => {
      const subscribeButton = document.getElementById(`link${index}`);

      if (subscribeButton) {
        const protocol = isAppleDevice ? "webcal" : "https";
        const calendarUrl = `${protocol}://stanton.ch/${data.link}`;
        subscribeButton.href = calendarUrl;
        document.getElementById(`text${index}`).innerHTML = data.name
        if (data.name == "Alle Anlässe") {
          document.getElementById("main").href = calendarUrl;
        }
      }
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="lg:w-5/6 text-4xl">
      <div
        className="flex lg:flex-row flex-col items-center justify-center py-9"
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
      >
        <a
          id="main"
          
          className="font-semibold  cursor-pointer transition-all text-white bg-blue-800 px-2 py-1 m-2 rounded-lg hover:bg-blue-600 hover:shadow-lg relative z-10"
        >
          Kalender abbonieren
          <img
            src="images/Calander.png"
            className="h-8 inline-block ml-2 py-1 align-center"
            alt="Calendar icon"
          />
        </a>
        <a
          id="link0"
          
          className={`lg:absolute scale-75 lg:mb-1 font-semibold cursor-pointer transition-all duration-300 text-black sha bg-red-400 px-2 py-1 rounded-lg hover:bg-red-200 hover:shadow-lg ${
            isHovered
              ? " lg:scale-75 lg:-translate-x-1/2 lg:-translate-y-full"
              : "lg:scale-50"
          }`}
        >
          <div className="flex items-center">
            <p id="text0"></p>
            <img
              src="images/Calander.png"
              className=" invert h-8 inline-block ml-2 py-1 align-center"
              alt="Calendar icon"
            />
          </div>
        </a>
        <a
          id="link1"
          
          className={`lg:absolute scale-75 lg:mb-1 font-semibold cursor-pointer transition-all duration-300 text-black bg-green-400 px-2 py-1 rounded-lg hover:bg-green-200 hover:shadow-lg ${
            isHovered
              ? " lg:scale-75 lg:translate-x-1/2 lg:-translate-y-full"
              : "lg:scale-50"
          }`}
        >
          <div className="flex items-center">
            <p id="text1"></p>
            <img
              src="images/Calander.png"
              className="invert h-8 inline-block ml-2 py-1 align-center"
              alt="Calendar icon"
            />
          </div>
        </a>
        <a
          id={"link2"}
          
          className={`lg:absolute scale-75 lg:mt-1 font-semibold cursor-pointer transition-all duration-300 text-black bg-blue-400 px-2 py-1 rounded-lg hover:bg-blue-200 hover:shadow-lg ${
            isHovered
              ? " lg:scale-75 lg:-translate-x-1/2 lg:translate-y-full"
              : "lg:scale-50"
          }`}
        >
          <div className="flex items-center">
            <p id="text2"></p>
            <img
              src="images/Calander.png"
              className="invert h-8 inline-block ml-2 py-1 align-center"
              alt="Calendar icon"
            />
          </div>
        </a>
        <a
          id={"link3"}
          
          className={`lg:absolute scale-75 lg:mt-1 font-semibold cursor-pointer transition-all duration-300 text-vlack bg-orange-400 px-2 py-1 rounded-lg hover:bg-orange-200 hover:shadow-lg ${
            isHovered
              ? " lg:scale-75 lg:translate-x-2/3 lg:translate-y-full"
              : "lg:scale-50"
          }`}
        >
          <div className="flex items-center">
            <p id="text3"></p>
            <img
              src="images/Calander.png"
              className="invert h-8 inline-block ml-2 py-1 align-center"
              alt="Calendar icon"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default CalendarSubscription;
