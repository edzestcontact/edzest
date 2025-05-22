// // src/components/Events/Events.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import dayjs from 'dayjs';
// import RegisterForm from '../Admin/RegisterForm'; // ✅ Import RegisterForm

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null); // ✅ Modal trigger

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axios.get('https://edzest-event-testing.onrender.com/api/events');
//         const upcoming = res.data.filter(event =>
//           dayjs(event.date).isAfter(dayjs().subtract(1, 'day'))
//         );
//         setEvents(upcoming);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-bold mb-6 text-center text-indigo-700">Upcoming Events</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {events.map((event) => (
//           <motion.div
//             key={event._id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="border border-gray-200 rounded-xl shadow-lg p-5 bg-white hover:shadow-2xl transform transition-transform hover:-translate-y-1"
//           >
//             {event.image && (
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover rounded mb-4"
//               />
//             )}
//             <h3 className="text-2xl font-semibold text-[#4748ac] mb-2">{event.title}</h3>
//             <p className="text-gray-600 text-sm mb-2">📅 {event.date} ⏰ {event.time}</p>
//             <p className="text-gray-700 mb-2">{event.description}</p>
//             <p className="text-sm text-gray-500">🎤 Speaker: {event.speaker}</p>
//             <button
//               onClick={() => setSelectedEvent(event)}
//               className="mt-3 bg-[#4748ac] text-white px-4 py-2 rounded-lg hover:bg-[#37378c] transition"
//             >
//               Register Here
//             </button>
//           </motion.div>
//         ))}
//       </div>

//       {/* ✅ Modal Form for Registration */}
//       {selectedEvent && (
//         <RegisterForm
//           event={selectedEvent}
//           onClose={() => setSelectedEvent(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Events;

// src/components/Events/Events.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import dayjs from 'dayjs';
// import RegisterForm from '../Admin/RegisterForm'; // ✅ Import RegisterForm

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null); // ✅ Modal trigger

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axios.get('https://edzest-event-testing.onrender.com/api/events');
//         const upcoming = res.data.filter(event =>
//           dayjs(event.date).isAfter(dayjs().subtract(1, 'day'))
//         );
//         setEvents(upcoming);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-800 decoration-indigo-400 decoration-2 underline-offset-4">
//         🎉 Upcoming Events 🎉
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {events.map((event) => (
//           <motion.div
//             key={event._id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="border border-gray-200 rounded-3xl shadow-2xl p-6 bg-gradient-to-b from-white to-indigo-50 hover:shadow-indigo-300 transform transition-transform hover:-translate-y-1 hover:scale-[1.02]"
//           >
//             {event.image && (
//               <img
//                 src={event.image}
//                 alt={event.title}
//                 className="w-full h-64 object-cover rounded-2xl mb-4 border-2 border-indigo-100"
//               />
//             )}
//             <h3 className="text-2xl font-bold text-[#37378c] mb-3">{event.title}</h3>
//             <p className="text-gray-600 text-sm mb-2">📅 <span className="font-medium">{event.date}</span> ⏰ <span className="font-medium">{event.time}</span></p>
//             <p className="text-gray-700 mb-3 leading-relaxed">{event.description}</p>
//             <p className="text-sm text-gray-500 italic">🎤 Speaker: {event.speaker}</p>
//             <button
//               onClick={() => setSelectedEvent(event)}
//               className="mt-4 bg-gradient-to-r from-[#4748ac] to-[#6c6dde] text-white px-5 py-2 rounded-full hover:from-[#37378c] hover:to-[#5657c4] transition-all shadow-md"
//             >
//               🚀 Register Now
//             </button>
//           </motion.div>
//         ))}
//       </div>

//       {/* ✅ Modal Form for Registration */}
//       {selectedEvent && (
//         <RegisterForm
//           event={selectedEvent}
//           onClose={() => setSelectedEvent(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Events;


// src/components/Events/Events.js
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import dayjs from 'dayjs';
// import RegisterForm from '../Admin/RegisterForm'; // ✅ Import RegisterForm

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null); // ✅ Modal trigger

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axios.get('https://edzest-event-testing.onrender.com/api/events');
//         const upcoming = res.data.filter(event =>
//           dayjs(event.date).isAfter(dayjs().subtract(1, 'day'))
//         );
//         setEvents(upcoming);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       {/* 🎬 Background Video Banner */}
//       <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-80 object-cover brightness-90"
//         >
//           <source src="/videos/events-promo2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-bold drop-shadow-lg">🌟 Explore Our Latest Events</h1>
//         </div>
//       </div>

//       <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-800 decoration-indigo-400 decoration-2 underline-offset-4">
//         🎉 Upcoming Events 🎉
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {events.map((event) => (
//           <motion.div
//             key={event._id}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="border border-gray-200 rounded-3xl shadow-2xl p-6 bg-gradient-to-b from-white to-indigo-50 hover:shadow-indigo-300 transform transition-transform hover:-translate-y-1 hover:scale-[1.02]"
//           >
//            <div className="w-full aspect-video mb-4 rounded-2xl overflow-hidden border-2 border-indigo-100">
//   <img
//     src={event.image}
//     alt={event.title}
//     className="w-full h-full object-cover"
//   />
// </div>


//             {/* ✅ Optional Event Video */}
//             {event.video && (
//               <video
//                 controls
//                 className="w-full h-48 rounded-lg mt-2 border border-indigo-100"
//               >
//                 <source src={event.video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}

//             <h3 className="text-2xl font-bold text-[#37378c] mb-3">{event.title}</h3>
//             <p className="text-gray-600 text-sm mb-2">📅 <span className="font-medium">{event.date}</span> ⏰ <span className="font-medium">{event.time}</span></p>
//             <p className="text-gray-700 mb-3 leading-relaxed">{event.description}</p>
//             <p className="text-sm text-gray-500 italic">🎤 Speaker: {event.speaker}</p>
//             <button
//               onClick={() => setSelectedEvent(event)}
//               className="mt-4 bg-gradient-to-r from-[#4748ac] to-[#6c6dde] text-white px-5 py-2 rounded-full hover:from-[#37378c] hover:to-[#5657c4] transition-all shadow-md"
//             >
//               🚀 Register Now
//             </button>
//           </motion.div>
//         ))}
//       </div>

//       {/* ✅ Modal Form for Registration */}    
//       {selectedEvent && (
//         <RegisterForm
//           event={selectedEvent}
//           onClose={() => setSelectedEvent(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Events;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import dayjs from 'dayjs';
// import RegisterForm from '../Admin/RegisterForm';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedEvent, setSelectedEvent] = useState(null);
//   const [expandedEvents, setExpandedEvents] = useState({});

//   const toggleReadMore = (id) => {
//     setExpandedEvents((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const res = await axios.get('https://edzest-event-testing.onrender.com/api/events');
//         const upcoming = res.data.filter((event) =>
//           dayjs(event.date).isAfter(dayjs().subtract(1, 'day'))
//         );
//         setEvents(upcoming);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           className="w-full h-80 object-cover brightness-90"
//         >
//           <source src="/videos/events-promo2.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h1 className="text-white text-4xl font-bold drop-shadow-lg">🌟 Explore Our Latest Events</h1>
//         </div>
//       </div>

//       <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-800 decoration-indigo-400 decoration-2 underline-offset-4">
//         🎉 Upcoming Events 🎉
//       </h2>

//       {events.length > 2 ? (
//         <Slider {...sliderSettings} className="px-2">
//           {events.map((event) => (
//             <div key={event._id} className="p-4">
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="h-full flex flex-col border border-gray-200 rounded-3xl shadow-2xl p-6 bg-gradient-to-b from-white to-indigo-50 hover:shadow-indigo-300 transform transition-transform hover:-translate-y-1 hover:scale-[1.02]"
//               >
//                 <div className="w-full aspect-video mb-4 rounded-2xl overflow-hidden border-2 border-indigo-100">
//                   <img
//                     src={event.image}
//                     alt={event.title}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>

//                 {event.video && (
//                   <video
//                     controls
//                     className="w-full h-48 rounded-lg mt-2 border border-indigo-100"
//                   >
//                     <source src={event.video} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 )}

//                 <h3 className="text-2xl font-bold text-[#37378c] mb-3">{event.title}</h3>
//                 <p className="text-gray-600 text-sm mb-2">
//                   📅 <span className="font-medium">{event.date}</span> ⏰ <span className="font-medium">{event.time}</span>
//                 </p>
//                 <p className="text-sm text-gray-500 italic">🎤 Speaker: {event.speaker}</p>
//                 <p className="text-gray-700 mt-2 mb-3 leading-relaxed flex-grow">
//                   {expandedEvents[event._id]
//                     ? event.description
//                     : `${event.description.slice(0, 120)}...`}
//                   <span
//                     onClick={() => toggleReadMore(event._id)}
//                     className="text-indigo-600 ml-2 font-medium hover:underline cursor-pointer"
//                   >
//                     {expandedEvents[event._id] ? 'Read less' : 'Read more'}
//                   </span>
//                 </p>

//                 <div className="mt-auto">
//                   <button
//                     onClick={() => setSelectedEvent(event)}
//                     className="bg-gradient-to-r from-[#4748ac] to-[#6c6dde] text-white px-5 py-2 rounded-full hover:from-[#37378c] hover:to-[#5657c4] transition-all shadow-md"
//                   >
//                     🚀 Register Now
//                   </button>
//                 </div>
//               </motion.div>
//             </div>
//           ))}
//         </Slider>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {events.map((event) => (
//             <motion.div
//               key={event._id}
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="h-full flex flex-col border border-gray-200 rounded-3xl shadow-2xl p-6 bg-gradient-to-b from-white to-indigo-50 hover:shadow-indigo-300 transform transition-transform hover:-translate-y-1 hover:scale-[1.02]"
//             >
//               <div className="w-full aspect-video mb-4 rounded-2xl overflow-hidden border-2 border-indigo-100">
//                 <img
//                   src={event.image}
//                   alt={event.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {event.video && (
//                 <video
//                   controls
//                   className="w-full h-48 rounded-lg mt-2 border border-indigo-100"
//                 >
//                   <source src={event.video} type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               )}

//               <h3 className="text-2xl font-bold text-[#37378c] mb-3">{event.title}</h3>
//               <p className="text-gray-600 text-sm mb-2">
//                 📅 <span className="font-medium">{event.date}</span> ⏰ <span className="font-medium">{event.time}</span>
//               </p>
//               <p className="text-sm text-gray-500 italic">🎤 Speaker: {event.speaker}</p>
//               <p className="text-gray-700 mt-2 mb-3 leading-relaxed flex-grow">
//                 {expandedEvents[event._id]
//                   ? event.description
//                   : `${event.description.slice(0, 120)}...`}
//                 <span
//                   onClick={() => toggleReadMore(event._id)}
//                   className="text-indigo-600 ml-2 font-medium hover:underline cursor-pointer"
//                 >
//                   {expandedEvents[event._id] ? 'Read less' : 'Read more'}
//                 </span>
//               </p>

//               <div className="mt-auto">
//                 <button
//                   onClick={() => setSelectedEvent(event)}
//                   className="bg-gradient-to-r from-[#4748ac] to-[#6c6dde] text-white px-5 py-2 rounded-full hover:from-[#37378c] hover:to-[#5657c4] transition-all shadow-md"
//                 >
//                   🚀 Register Now
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}

//       {selectedEvent && (
//         <RegisterForm
//           event={selectedEvent}
//           onClose={() => setSelectedEvent(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default Events;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';
import RegisterForm from '../Admin/RegisterForm';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [expandedEvents, setExpandedEvents] = useState({});

  const toggleReadMore = (id) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get('https://edzest-event-testing.onrender.com/api/events');
        const upcoming = res.data.filter((event) =>
          dayjs(event.date).isAfter(dayjs().subtract(1, 'day'))
        );
        setEvents(upcoming);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-80 object-cover brightness-90"
        >
          <source src="/videos/events-promo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold drop-shadow-lg">🌟 Explore Our Latest Events</h1>
        </div>
      </div>

      <h2 className="text-4xl font-extrabold mb-10 text-center text-indigo-800 decoration-indigo-400 decoration-2 underline-offset-4">
        🎉 Upcoming Events 🎉
      </h2>

      {events.length > 2 ? (
        <Slider {...sliderSettings} className="px-2">
          {events.map((event) => (
            <div key={event._id} className="p-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col border border-gray-200 rounded-3xl shadow-2xl p-6 bg-gradient-to-b from-white to-indigo-50 hover:shadow-indigo-300 transform transition-transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="w-full aspect-video mb-4 rounded-2xl overflow-hidden border-2 border-indigo-100">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    style={{ aspectRatio: '16 / 9' }}
                  />
                </div>

                {event.video && (
                  <video
                    controls
                    className="w-full h-48 rounded-lg mt-2 border border-indigo-100"
                  >
                    <source src={event.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                <h3 className="text-2xl font-bold text-[#37378c] mb-3">{event.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  📅 <span className="font-medium">{event.date}</span> ⏰ <span className="font-medium">{event.time}</span>
                </p>
                <p className="text-sm text-gray-500 italic">🎤 Speaker: {event.speaker}</p>
                <p className="text-gray-700 mt-2 mb-3 leading-relaxed flex-grow">
                  {expandedEvents[event._id]
                    ? event.description
                    : `${event.description.slice(0, 120)}...`}
                  <span
                    onClick={() => toggleReadMore(event._id)}
                    className="text-indigo-600 ml-2 font-medium hover:underline cursor-pointer"
                  >
                    {expandedEvents[event._id] ? 'Read less' : 'Read more'}
                  </span>
                </p>

                <div className="mt-auto">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="bg-gradient-to-r from-[#4748ac] to-[#6c6dde] text-white px-5 py-2 rounded-full hover:from-[#37378c] hover:to-[#5657c4] transition-all shadow-md"
                  >
                    🚀 Register Now
                  </button>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="h-full flex flex-col border border-gray-200 rounded-3xl shadow-2xl p-6 bg-gradient-to-b from-white to-indigo-50 hover:shadow-indigo-300 transform transition-transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="w-full aspect-video mb-4 rounded-2xl overflow-hidden border-2 border-indigo-100">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                  style={{ aspectRatio: '16 / 9' }}
                />
              </div>

              {event.video && (
                <video
                  controls
                  className="w-full h-48 rounded-lg mt-2 border border-indigo-100"
                >
                  <source src={event.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              <h3 className="text-2xl font-bold text-[#37378c] mb-3">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-2">
                📅 <span className="font-medium">{event.date}</span> ⏰ <span className="font-medium">{event.time}</span>
              </p>
              <p className="text-sm text-gray-500 italic">🎤 Speaker: {event.speaker}</p>
              <p className="text-gray-700 mt-2 mb-3 leading-relaxed flex-grow">
                {expandedEvents[event._id]
                  ? event.description
                  : `${event.description.slice(0, 120)}...`}
                <span
                  onClick={() => toggleReadMore(event._id)}
                  className="text-indigo-600 ml-2 font-medium hover:underline cursor-pointer"
                >
                  {expandedEvents[event._id] ? 'Read less' : 'Read more'}
                </span>
              </p>

              <div className="mt-auto">
                <button
                  onClick={() => setSelectedEvent(event)}
                  className="bg-gradient-to-r from-[#4748ac] to-[#6c6dde] text-white px-5 py-2 rounded-full hover:from-[#37378c] hover:to-[#5657c4] transition-all shadow-md"
                >
                  🚀 Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {selectedEvent && (
        <RegisterForm
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </div>
  );
};

export default Events;
