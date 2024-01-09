"use client";
import React, { useState } from "react";
const YourComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className=" text-4xl">
      <div
        className="flex sm:flex-row flex-col items-center justify-center py-12 outline"
        onMouseLeave={() => setIsHovered(false)}
        onMouseEnter={() => setIsHovered(true)}
      >
        <a
          href="images/Japo_Kinder_2024.pdf"
          className={`font-semibold  cursor-pointer transition-all text-white bg-blue-800 px-2 py-1 m-2 rounded-lg hover:bg-blue-600 hover:shadow-lg relative z-10`}
        >
          Alle Kalender{" "}
          <img
            src="images/Download icon.png"
            className="h-8 inline-block ml-2 py-1 align-center"
            alt="Calendar icon"
          />
        </a>
        <a
          href="images/Japo_Kinder_2024.pdf"
          className={`lg:absolute -translate-y-2 mb-4 font-semibold cursor-pointer transition-all duration-300 text-white bg-blue-800 px-2 py-1 rounded-lg hover:bg-blue-600 hover:shadow-lg ${
            isHovered
              ? " lg:scale-200 lg:translate-x-3/4 lg:-translate-y-full"
              : "lg:scale-50"
          }`}
        >
          Jungwacht{" "}
          <img
            src="images/Download icon.png"
            className="h-8 inline-block ml-2 py-1 align-center"
            alt="Calendar icon"
          />
        </a>
      </div>
    </div>
  );
};

export default YourComponent;
