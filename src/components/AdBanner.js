import React, { useState, useEffect } from "react";
import { X } from "lucide-react"; // Close icon

const AdBanner = () => {
  const [ads, setAds] = useState([
    {
      id: 1,
      text: "📢 New PMP® Exam Batch Starts on 14th June",
      link: "https://exams.edzest.org/learn/PMP-Training-Bundle-14th-June",
    },
    // {
    //   id: 2,
    //   text: "📢 New PMP® Exam Batch Starts on 5th June",
    //   link: "https://exams.edzest.org/learn/PMP-training-5thJuly",
    // },
  ]);

  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads.length]);

  const currentAd = ads[currentAdIndex];

  return (
    isVisible && (
      <div className="w-full bg-[#4748ac] text-white text-center py-3 font-semibold relative flex flex-wrap justify-start sm:justify-center items-center gap-2 sm:gap-4 transition-opacity duration-500 text-sm sm:text-base md:text-lg pr-10">
        {/* Rotating Ad Text */}
        <span className="text-white">{currentAd.text}</span>

        {/* Enroll Button (linked to current ad) */}
        <div className="w-full sm:w-auto flex sm:inline-flex justify-center sm:justify-start">
          <a
            href={currentAd.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#4748ac] font-bold py-2 px-4 rounded-lg text-sm sm:text-base
              hover:bg-gray-200 transition duration-300 text-decoration-none"
          >
            Enroll Now
          </a>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-6 top-3 -translate-y-1/2
            text-white hover:text-gray-300 transition duration-300"
          aria-label="Close banner"
        >
          <X size={16} />
        </button>
      </div>
    )
  );
};

export default AdBanner;
