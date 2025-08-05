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
//         const res = await axios.get(`https://edzestweb-6.onrender.com/api/events/${eventId}`);
//         setEvent(res.data);
//       } catch (err) {
//         console.error("Failed to fetch event:", err);
//       }
//     };
//     fetchEvent();
//   }, [eventId]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://edzestweb-6.onrender.com/api/register", {
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
//               onChange={handleChange}
//               required
//             />
//             <input
//               name="email"
//               type="email"
//               className="form-control mb-2"
//               placeholder="Your Email"
//               onChange={handleChange}
//               required
//             />
//             <input
//               name="phone"
//               className="form-control mb-2"
//               placeholder="Your Phone"
//               onChange={handleChange}
//               required
//             />
//             <textarea
//               name="remarks"
//               className="form-control mb-3"
//               placeholder="Remarks"
//               rows="3"
//               onChange={handleChange}
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


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EventRegistrationPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    remarks: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await axios.get(`https://edzestweb-6.onrender.com/api/events/${eventId}`);
        setEvent(res.data);
      } catch (err) {
        console.error("Failed to fetch event:", err);
      }
    };
    fetchEvent();
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restrict invalid input live
    if (name === "name" && /[^A-Za-z\s]/.test(value)) return;
    if (name === "phone" && /[^0-9]/.test(value)) return;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || /\d/.test(formData.name)) {
      alert("❌ Name should not contain numbers.");
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert("❌ Invalid email address.");
      return;
    }

    if (!/^\d{10,15}$/.test(formData.phone)) {
      alert("❌ Phone number must be digits only (10-15 characters).");
      return;
    }

    if (!isValidUrl(event.link)) {
      alert("❌ Invalid event link.");
      return;
    }

    try {
      const res = await axios.post("https://edzestweb-6.onrender.com/api/register", {
        ...formData,
        eventId: event._id,
      });

      if (res.data.success) {
        setSubmitted(true);
      } else {
        alert("Registration failed: " + (res.data.message || "Unknown error"));
      }
    } catch (err) {
      console.error("Registration error:", err);
      alert("An error occurred during registration. Please try again.");
    }
  };

  if (!event) return <p style={{ textAlign: "center", marginTop: "100px" }}>Loading event details...</p>;

  return (
    <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
      <div className="shadow-lg rounded-4 p-4 bg-white" style={{ width: "500px" }}>
        <img
          src={event.wallpaper}
          alt="poster"
          className="img-fluid rounded-3 mb-3"
          style={{ maxHeight: "200px", objectFit: "cover" }}
        />

        <h4 className="fw-bold mb-2">{event.title}</h4>
        <p>{event.description}</p>

        <p><strong>Date:</strong> {event.date}</p>
        <p><strong>Time:</strong> {event.time}</p>
        <p><strong>Speaker:</strong> {event.speaker}</p>
        <p>
          <a href={event.link} target="_blank" rel="noreferrer">🔗 Event Link</a><br />
          <a href={event.linkedin} target="_blank" rel="noreferrer">🔗 LinkedIn</a>
        </p>

        {submitted ? (
          <div className="alert alert-success mt-3">You have successfully registered!</div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-3">
            <input
              name="name"
              className="form-control mb-2"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              className="form-control mb-2"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              name="phone"
              className="form-control mb-2"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="remarks"
              className="form-control mb-3"
              placeholder="Remarks"
              value={formData.remarks}
              onChange={handleChange}
              rows="3"
            ></textarea>

            <button type="submit" className="btn btn-primary w-100">
              Submit Registration
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default EventRegistrationPage;
