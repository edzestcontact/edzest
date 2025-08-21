


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const EventRegistrationPage = () => {
//   const { eventId } = useParams();
//   const [event, setEvent] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     remarks: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const res = await axios.get(`https://event-testing-1.onrender.com/api/events/${eventId}`);
//         setEvent(res.data);
//       } catch (err) {
//         console.error("Failed to fetch event:", err);
//       }
//     };
//     fetchEvent();
//   }, [eventId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Restrict invalid input live
//     if (name === "name" && /[^A-Za-z\s]/.test(value)) return;
//     if (name === "phone" && /[^0-9]/.test(value)) return;

//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const isValidEmail = (email) =>
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

//   const isValidUrl = (url) => {
//     try {
//       new URL(url);
//       return true;
//     } catch {
//       return false;
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name.trim() || /\d/.test(formData.name)) {
//       alert("❌ Name should not contain numbers.");
//       return;
//     }

//     if (!isValidEmail(formData.email)) {
//       alert("❌ Invalid email address.");
//       return;
//     }

//     if (!/^\d{10,15}$/.test(formData.phone)) {
//       alert("❌ Phone number must be digits only (10-15 characters).");
//       return;
//     }

//     if (!isValidUrl(event.link)) {
//       alert("❌ Invalid event link.");
//       return;
//     }

//     try {
//       const res = await axios.post("https://event-testing-1.onrender.com/api/register", {
//         ...formData,
//         eventId: event._id,
//       });

//       if (res.data.success) {
//         setSubmitted(true);
//       } else {
//         alert("Registration failed: " + (res.data.message || "Unknown error"));
//       }
//     } catch (err) {
//       console.error("Registration error:", err);
//       alert("An error occurred during registration. Please try again.");
//     }
//   };

//   if (!event) return <p style={{ textAlign: "center", marginTop: "100px" }}>Loading event details...</p>;

//   return (
//     <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
//       <div className="shadow-lg rounded-4 p-4 bg-white" style={{ width: "500px" }}>
//         <img
//           src={event.wallpaper}
//           alt="poster"
//           className="img-fluid rounded-3 mb-3"
//           style={{ maxHeight: "200px", objectFit: "cover" }}
//         />

//         <h4 className="fw-bold mb-2">{event.title}</h4>
//         <p>{event.description}</p>

//         <p><strong>Date:</strong> {event.date}</p>
//         <p><strong>Time:</strong> {event.time}</p>
//         <p><strong>Speaker:</strong> {event.speaker}</p>
//         <p>
//           <a href={event.link} target="_blank" rel="noreferrer">🔗 Event Link</a><br />
//           <a href={event.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
//         </p>

//         {submitted ? (
//           <div className="alert alert-success mt-3">You have successfully registered!</div>
//         ) : (
//           <form onSubmit={handleSubmit} className="mt-3">
//             <input
//               name="name"
//               className="form-control mb-2"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               name="email"
//               type="email"
//               className="form-control mb-2"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               name="phone"
//               className="form-control mb-2"
//               placeholder="Your Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="remarks"
//               className="form-control mb-3"
//               placeholder="Remarks"
//               value={formData.remarks}
//               onChange={handleChange}
//               rows="3"
//             ></textarea>

//             <button type="submit" className="btn btn-primary w-100">
//               Submit Registration
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventRegistrationPage;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const API = process.env.REACT_APP_API || "https://event-testing-1.onrender.com";

// const EventRegistrationPage = () => {
//   const { eventId } = useParams();
//   const [event, setEvent] = useState(null);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     remarks: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const res = await axios.get(`${API}/api/events/${eventId}`);
//         setEvent(res.data?.event || res.data);
//       } catch (err) {
//         console.error("Failed to fetch event:", err);
//       }
//     };
//     fetchEvent();
//   }, [eventId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === "name" && /[^A-Za-z\s]/.test(value)) return;
//     if (name === "phone" && /[^0-9]/.test(value)) return;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   const isValidUrl = (url) => { try { new URL(url); return true; } catch { return false; } };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!formData.name.trim() || /\d/.test(formData.name)) {
//       alert("❌ Name should not contain numbers.");
//       return;
//     }
//     if (!isValidEmail(formData.email)) {
//       alert("❌ Invalid email address.");
//       return;
//     }
//     if (!/^\d{10,15}$/.test(formData.phone)) {
//       alert("❌ Phone number must be digits only (10-15 characters).");
//       return;
//     }
//     if (event?.link && !isValidUrl(event.link)) {
//       alert("❌ Invalid event link.");
//       return;
//     }

//     try {
//       const res = await axios.post(`${API}/api/register`, {
//         ...formData,
//         eventId: event._id,
//       });
//       if (res.data.success) setSubmitted(true);
//       else alert("Registration failed: " + (res.data.message || "Unknown error"));
//     } catch (err) {
//       console.error("Registration error:", err);
//       alert("An error occurred during registration. Please try again.");
//     }
//   };

//   if (!event) return <p style={{ textAlign: "center", marginTop: "100px" }}>Loading event details...</p>;

//   // --- Image src fix (same logic as card) ---
//   const raw = event?.wallpaperUrl ?? event?.wallpaper ?? "";
//   const imageSrc =
//     raw
//       ? (/^https?:\/\//i.test(raw)
//           ? raw
//           : raw.startsWith("data:")
//           ? raw
//           : `data:image/*;base64,${raw}`)
//       : "";

//   return (
//     <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
//       <div className="shadow-lg rounded-4 p-4 bg-white" style={{ width: "500px" }}>
//         <img
//           src={imageSrc || "/images/event-placeholder.png"}
//           alt="poster"
//           className="img-fluid rounded-3 mb-3"
//           style={{ maxHeight: "200px", objectFit: "cover" }}
//           onError={(e) => { e.currentTarget.src = "/images/event-placeholder.png"; }}
//         />

//         <h4 className="fw-bold mb-2">{event.title}</h4>
//         <p>{event.description}</p>

//         <p><strong>Date:</strong> {event.date}</p>
//         <p><strong>Time:</strong> {event.time}</p>
//         <p><strong>Speaker:</strong> {event.speaker}</p>
//         <p>
//           {event.link && <><a href={event.link} target="_blank" rel="noreferrer">🔗 Event Link</a><br /></>}
//           {event.linkedin && <a href={event.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>}
//         </p>

//         {submitted ? (
//           <div className="alert alert-success mt-3">You have successfully registered!</div>
//         ) : (
//           <form onSubmit={handleSubmit} className="mt-3">
//             <input
//               name="name"
//               className="form-control mb-2"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//             <input
//               name="email"
//               type="email"
//               className="form-control mb-2"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//             <input
//               name="phone"
//               className="form-control mb-2"
//               placeholder="Your Phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="remarks"
//               className="form-control mb-3"
//               placeholder="Remarks"
//               value={formData.remarks}
//               onChange={handleChange}
//               rows="3"
//             ></textarea>

//             <button type="submit" className="btn btn-primary w-100">
//               Submit Registration
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EventRegistrationPage;


// src/pages/EventRegistrationPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL || "https://event-testing-1.onrender.com";

const EventRegistrationPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", remarks: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`${API}/api/events/${eventId}`);
        setEvent(res.data?.event || res.data);
      } catch (err) {
        console.error("Failed to fetch event:", err);
      }
    };
    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && /[^A-Za-z\s]/.test(value)) return;
    if (name === "phone" && /[^0-9]/.test(value)) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidUrl = (url) => { try { new URL(url); return true; } catch { return false; } };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || /\d/.test(formData.name)) return alert("❌ Name should not contain numbers.");
    if (!isValidEmail(formData.email)) return alert("❌ Invalid email address.");
    if (!/^\d{10,15}$/.test(formData.phone)) return alert("❌ Phone must be digits only (10-15).");
    if (event?.link && !isValidUrl(event.link)) return alert("❌ Invalid event link.");

    try {
      const res = await axios.post(`${API}/api/register`, { ...formData, eventId: event._id });
      if (res.data.success) setSubmitted(true);
      else alert("Registration failed: " + (res.data.message || "Unknown error"));
    } catch (err) {
      console.error("Registration error:", err);
      alert("An error occurred during registration. Please try again.");
    }
  };

  if (!event) return <p style={{ textAlign: "center", marginTop: 100 }}>Loading event details...</p>;

  const imageSrc = event.wallpaper || "/images/event-placeholder.png";

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="shadow-lg rounded-4 p-4 bg-white" style={{ width: 500 }}>
        <img
          src={imageSrc}
          alt="poster"
          className="img-fluid rounded-3 mb-3"
          style={{ maxHeight: 200, objectFit: "cover" }}
          onError={(e) => (e.currentTarget.src = "/images/event-placeholder.png")}
        />
        <h4 className="fw-bold mb-2">{event.title}</h4>
        {/* show rich text (with embedded images) if you want */}
        {/* <div dangerouslySetInnerHTML={{ __html: event.description || "" }} /> */}
        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Speaker:</strong> {event.speaker}</p>
        <p>
          {event.link && (
            <>
              <a href={event.link} target="_blank" rel="noreferrer">🔗 Event Link</a><br />
            </>
          )}
          {event.linkedin && <a href={event.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>}
        </p>

        {submitted ? (
          <div className="alert alert-success mt-3">You have successfully registered!</div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-3">
            <input name="name" className="form-control mb-2" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input name="email" type="email" className="form-control mb-2" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input name="phone" className="form-control mb-2" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
            <textarea name="remarks" className="form-control mb-3" placeholder="Remarks" value={formData.remarks} onChange={handleChange} rows="3" />
            <button type="submit" className="btn btn-primary w-100">Submit Registration</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EventRegistrationPage;
