


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaUser, FaCalendarAlt, FaClock, FaLink, FaLinkedin } from "react-icons/fa";

// const EventCard = ({ event }) => {
//   const navigate = useNavigate();

//   const handleRegisterClick = () => {
//     navigate(`/register/${event._id}`);
//   };

//   return (
//     <div
//       style={{
//         width: "300px",
//         background: "#fff",
//         borderRadius: "12px",
//         boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
//         padding: "20px",
//         margin: "10px",
//         transition: "transform 0.3s ease",
//       }}
//       onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
//       onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
//     >
//       {/* Event Poster */}
//       <img
//         src={
//           event.wallpaper?.startsWith("http")
//             ? event.wallpaper
//             : `data:image/png;base64,${event.wallpaper}`
//         }
//         alt="Event"
//         style={{
//           width: "100%",
//           height: "160px",
//           objectFit: "cover",
//           borderRadius: "6px",
//         }}
//       />

//       {/* Title */}
//       <h5 className="mt-3" style={{ fontWeight: "bold" }}>
//         {event.title}
//       </h5>

//       {/* Description */}
//       {event.description && (
//         <p style={{ fontSize: "14px", marginBottom: "10px", color: "#444" }}>
//           {event.description}
//         </p>
//       )}

//       {/* Speaker with icon on left and name on right */}
//       <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
//         <FaUser style={{ marginRight: "8px", color: "#555" }} />
//         <span>{event.speaker}</span>
//       </div>

//       {/* Date row */}
//       <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
//         <FaCalendarAlt style={{ marginRight: "8px", color: "#555" }} />
//         <span>{event.date}</span>
//       </div>

//       {/* Time row */}
//       <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
//         <FaClock style={{ marginRight: "8px", color: "#555" }} />
//         <span>{event.time}</span>
//       </div>

//       {/* LinkedIn Link */}
//       <a
//         href={event.linkedin}
//         target="_blank"
//         rel="noreferrer"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginBottom: "4px",
//           textDecoration: "none",
//           color: "#0077b5",
//         }}
//       >
//         <FaLinkedin style={{ marginRight: "6px" }} />
//         LinkedIn
//       </a>

//       {/* Event Link */}
//       <a
//         href={event.link}
//         target="_blank"
//         rel="noreferrer"
//         style={{
//           display: "flex",
//           alignItems: "center",
//           marginBottom: "4px",
//           textDecoration: "none",
//           color: "#0077b5",
//         }}
//       >
//         <FaLink style={{ marginRight: "6px" }} />
//         Event Link
//       </a>

//       {/* Register Button */}
//       <button
//         onClick={handleRegisterClick}
//         style={{
//           width: "100%",
//           padding: "10px",
//           backgroundColor: "#004aad",
//           color: "#fff",
//           border: "none",
//           borderRadius: "6px",
//           marginTop: "12px",
//           cursor: "pointer",
//         }}
//       >
//         Register Here
//       </button>
//     </div>
//   );
// };

// export default EventCard;

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaCalendarAlt, FaClock, FaLink, FaLinkedin } from "react-icons/fa";

const DEFAULT_IMG = "/images/event-placeholder.png"; // optional fallback image in public/images

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate(`/register/${event._id}`);
  };

  // Prefer Cloudinary's wallpaperUrl; fallback to wallpaper (base64) if present
  const raw =
    event?.wallpaperUrl ??   // Cloudinary secure URL
    event?.wallpaper ?? "";  // legacy/base64

  // Build the correct src
  const imageSrc =
    raw
      ? (/^https?:\/\//i.test(raw)      // if starts with http, use as is (Cloudinary)
          ? raw
          : raw.startsWith("data:")     // already a data URI?
          ? raw
          : `data:image/*;base64,${raw}`) // treat as base64 string
      : "";

  return (
    <div
      style={{
        width: "300px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        margin: "10px",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
    >
      {/* Event Poster */}
      <img
        src={imageSrc || DEFAULT_IMG}
        alt="Event"
        onError={(e) => { e.currentTarget.src = DEFAULT_IMG; }}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />

      {/* Title */}
      <h5 className="mt-3" style={{ fontWeight: "bold" }}>
        {event.title}
      </h5>

      {/* Description */}
      {event.description && (
        <p style={{ fontSize: "14px", marginBottom: "10px", color: "#444" }}>
          {event.description}
        </p>
      )}

      {/* Speaker */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
        <FaUser style={{ marginRight: "8px", color: "#555" }} />
        <span>{event.speaker}</span>
      </div>

      {/* Date */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "6px" }}>
        <FaCalendarAlt style={{ marginRight: "8px", color: "#555" }} />
        <span>{event.date}</span>
      </div>

      {/* Time */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
        <FaClock style={{ marginRight: "8px", color: "#555" }} />
        <span>{event.time}</span>
      </div>

      {/* LinkedIn Link */}
      <a
        href={event.linkedin}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "4px",
          textDecoration: "none",
          color: "#0077b5",
        }}
      >
        <FaLinkedin style={{ marginRight: "6px" }} />
        LinkedIn
      </a>

      {/* Event Link */}
      <a
        href={event.link}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "4px",
          textDecoration: "none",
          color: "#0077b5",
        }}
      >
        <FaLink style={{ marginRight: "6px" }} />
        Event Link
      </a>

      {/* Register Button */}
      <button
        onClick={handleRegisterClick}
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#004aad",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          marginTop: "12px",
          cursor: "pointer",
        }}
      >
        Register Here
      </button>
    </div>
  );
};

export default EventCard;

