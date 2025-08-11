// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const CreateEvent = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     date: "",
//     time: "",
//     type: "",
//     speaker: "",
//     link: "",
//     linkedin: "",
//     wallpaper: null,
//     meetingId: "",
//     passcode: "",
//   });
//   const [events, setEvents] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   const fetchEvents = async () => {
//     try {
//       const res = await axios.get("https://edzestweb-6.onrender.com/api/events");
//       setEvents(res.data);
//     } catch (err) {
//       console.error("Error fetching events:", err);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const hasDigits = /\d/;
//     if (hasDigits.test(formData.title)) {
//       alert("⚠️ Event Title should not contain numbers.");
//       return;
//     }
//     if (hasDigits.test(formData.speaker)) {
//       alert("⚠️ Speaker Name should not contain numbers.");
//       return;
//     }

//     if (
//       !formData.title ||
//       !formData.description ||
//       !formData.date ||
//       !formData.time ||
//       !formData.type ||
//       !formData.speaker ||
//       !formData.link ||
//       !formData.linkedin ||
//       (!editingId && !formData.wallpaper)
//     ) {
//       alert("⚠️ Please fill all required fields before submitting.");
//       return;
//     }

//     // ✅ Updated and relaxed URL validation
//     const urlPattern = new RegExp(
//       "^(https?:\\/\\/)?" +
//         "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
//         "((\\d{1,3}\\.){3}\\d{1,3}))" +
//         "(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*" +
//         "(\\?[;&a-z\\d%@_.,~+=-]*)?" +
//         "(\\#[-a-z\\d_]*)?$",
//       "i"
//     );

//     if (!urlPattern.test(formData.link)) {
//       alert("⚠️ Invalid Event Link URL.");
//       return;
//     }

//     if (!urlPattern.test(formData.linkedin)) {
//       alert("⚠️ Invalid LinkedIn Profile URL.");
//       return;
//     }

//     try {
//       const payload = new FormData();
//       Object.entries(formData).forEach(([key, value]) => payload.append(key, value));

//       if (editingId) {
//         await axios.put(
//           `https://edzestweb-6.onrender.com/api/events/${editingId}`,
//           payload,
//           {
//             headers: { "Content-Type": "multipart/form-data" },
//           }
//         );
//         alert("✅ Event updated successfully!");
//       } else {
//             await axios.post(
//               "https://edzestweb-6.onrender.com/api/events",
//               payload,
//               {
//                 headers: { "Content-Type": "multipart/form-data" },
//               }
//             );
//         alert("✅ Event created successfully!");
//       }

//       fetchEvents();
//       setFormData({
//         title: "",
//         description: "",
//         date: "",
//         time: "",
//         type: "",
//         speaker: "",
//         link: "",
//         linkedin: "",
//         wallpaper: null,
//         meetingId: "",
//         passcode: "",
//       });
//       setEditingId(null);
//     } catch (err) {
//       console.error("Error submitting event:", err);
//       alert("❌ Something went wrong.");
//     }
//   };

//   const handleEdit = (event) => {
//     setEditingId(event._id);
//     setFormData({
//       title: event.title,
//       description: event.description,
//       date: event.date,
//       time: event.time,
//       type: event.type,
//       speaker: event.speaker,
//       link: event.link,
//       linkedin: event.linkedin,
//       wallpaper: null,
//       meetingId: event.meetingId || "",
//       passcode: event.passcode || "",
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`https://edzestweb-6.onrender.com/api/events/${id}`);
//       fetchEvents();
//     } catch (err) {
//       console.error("Error deleting event:", err);
//     }
//   };

//   return (
//     <div className="container mt-4 mb-5" style={{ maxWidth: "700px" }}>
//       <h3 className="text-center mb-4">{editingId ? "Edit Event" : "Create Event"}</h3>
//       <form onSubmit={handleSubmit} className="shadow p-4 bg-white rounded">
//         <div className="mb-3">
//           <label className="form-label">Title</label>
//           <input name="title" value={formData.title} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Description</label>
//           <textarea name="description" value={formData.description} onChange={handleChange} className="form-control" rows={3} />
//         </div>
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Date</label>
//             <input type="date" name="date" value={formData.date} onChange={handleChange} className="form-control" required />
//           </div>
//           <div className="col-md-6 mb-3">
//             <label className="form-label">Time</label>
//             <input type="time" name="time" value={formData.time} onChange={handleChange} className="form-control" required />
//           </div>
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Event Type</label>
//           <input name="type" value={formData.type} onChange={handleChange} className="form-control" />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Speaker Name</label>
//           <input name="speaker" value={formData.speaker} onChange={handleChange} className="form-control" required />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Event Link</label>
//           <input name="link" value={formData.link} onChange={handleChange} className="form-control" />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Meeting ID</label>
//           <input name="meetingId" value={formData.meetingId} onChange={handleChange} className="form-control" />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Passcode</label>
//           <input name="passcode" value={formData.passcode} onChange={handleChange} className="form-control" />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Speaker LinkedIn Profile</label>
//           <input name="linkedin" value={formData.linkedin} onChange={handleChange} className="form-control" />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Upload Event Poster</label>
//           <input type="file" name="wallpaper" onChange={handleChange} className="form-control" accept="image/*" />
//         </div>
//         <button type="submit" className="btn btn-primary w-100">
//           {editingId ? "Update Event" : "Create Event"}
//         </button>
//       </form>

//       {/* <div className="mt-4">
//         <button
//           className="btn btn-success mb-3"
//           onClick={() =>
//             window.open("https://edzestweb-6.onrender.com/api/events/download-excel", "_blank")
//           }
//         >
//           📥 Download Events as Excel
//         </button>
//       </div> */}

//       <h4 className="mt-4 mb-3">All Events</h4>
//       {events.map((event) => (
//         <div key={event._id} className="shadow-sm p-3 mb-3 bg-light rounded border">
//           <h5>{event.title}</h5>
//           <p>{event.date} at {event.time}</p>
//           <p><strong>Meeting ID:</strong> {event.meetingId}</p>
//           <p><strong>Passcode:</strong> {event.passcode}</p>
//           <button className="btn btn-sm btn-secondary me-2" onClick={() => handleEdit(event)}>Edit</button>
//           <button className="btn btn-sm btn-danger" onClick={() => handleDelete(event._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CreateEvent;


import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    type: "",
    speaker: "",
    link: "",
    linkedin: "",
    wallpaper: null,
    meetingId: "",
    passcode: "",
  });
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://edzestweb-6.onrender.com/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("❌ Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasDigits = /\d/;
    if (hasDigits.test(formData.title)) {
      alert("⚠️ Event Title should not contain numbers.");
      return;
    }
    if (hasDigits.test(formData.speaker)) {
      alert("⚠️ Speaker Name should not contain numbers.");
      return;
    }

    if (
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.time ||
      !formData.type ||
      !formData.speaker ||
      !formData.link ||
      !formData.linkedin ||
      (!editingId && !formData.wallpaper)
    ) {
      alert("⚠️ Please fill all required fields before submitting.");
      return;
    }

    // ✅ Updated and relaxed URL regex
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%@_.~+&:]*)*" +
      "(\\?[;&a-z\\d%@_.,~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
      "i"
    );

    if (!urlPattern.test(formData.link)) {
      alert("⚠️ Invalid Event Link URL.");
      return;
    }

    if (!urlPattern.test(formData.linkedin)) {
      alert("⚠️ Invalid LinkedIn Profile URL.");
      return;
    }

    try {
      const payload = new FormData();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));

      // ✅ FIXED THE URL HERE (no space, no %20)
      const url = editingId
        ? `https://edzestweb-6.onrender.com/api/events/${editingId}`
        : `https://edzestweb-6.onrender.com/api/events`;

      const method = editingId ? axios.put : axios.post;

      await method(url, payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert(editingId ? "✅ Event updated successfully!" : "✅ Event created successfully!");

      fetchEvents();
      setFormData({
        title: "",
        description: "",
        date: "",
        time: "",
        type: "",
        speaker: "",
        link: "",
        linkedin: "",
        wallpaper: null,
        meetingId: "",
        passcode: "",
      });
      setEditingId(null);
    } catch (err) {
      console.error("❌ Error submitting event:", err);
      alert("❌ Something went wrong.");
    }
  };

  const handleEdit = (event) => {
    setEditingId(event._id);
    setFormData({
      title: event.title || "",
      description: event.description || "",
      date: event.date || "",
      time: event.time || "",
      type: event.type || "",
      speaker: event.speaker || "",
      link: event.link || "",
      linkedin: event.linkedin || "",
      wallpaper: null,
      meetingId: event.meetingId || "",
      passcode: event.passcode || "",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://edzestweb-6.onrender.com/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error("❌ Error deleting event:", err);
    }
  };

  return (
    <div className="container mt-4 mb-5" style={{ maxWidth: "700px" }}>
      <h3 className="text-center mb-4">{editingId ? "Edit Event" : "Create Event"}</h3>
      <form onSubmit={handleSubmit} className="shadow p-4 bg-white rounded">
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input name="title" value={formData.title || ""} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" value={formData.description || ""} onChange={handleChange} className="form-control" rows={3} />
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Date</label>
            <input type="date" name="date" value={formData.date || ""} onChange={handleChange} className="form-control" required />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Time</label>
            <input type="time" name="time" value={formData.time || ""} onChange={handleChange} className="form-control" required />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">Event Type</label>
          <input name="type" value={formData.type || ""} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Speaker Name</label>
          <input name="speaker" value={formData.speaker || ""} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Link</label>
          <input name="link" value={formData.link || ""} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Meeting ID</label>
          <input name="meetingId" value={formData.meetingId || ""} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Passcode</label>
          <input name="passcode" value={formData.passcode || ""} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Speaker LinkedIn Profile</label>
          <input name="linkedin" value={formData.linkedin || ""} onChange={handleChange} className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Upload Event Poster</label>
          <input type="file" name="wallpaper" onChange={handleChange} className="form-control" accept="image/*" />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {editingId ? "Update Event" : "Create Event"}
        </button>
      </form>

      <div className="mt-4">
        <button
          className="btn btn-success mb-3"
          onClick={() =>
            window.open("https://edzestweb-6.onrender.com/api/events/download-excel", "_blank")
          }
        >
          📥 Download Events as Excel
        </button>
      </div>

      <h4 className="mt-4 mb-3">All Events</h4>
      {events.map((event) => (
        <div key={event._id} className="shadow-sm p-3 mb-3 bg-light rounded border">
          <h5>{event.title}</h5>
          <p>{event.date} at {event.time}</p>
          <p><strong>Meeting ID:</strong> {event.meetingId}</p>
          <p><strong>Passcode:</strong> {event.passcode}</p>
          <button className="btn btn-sm btn-secondary me-2" onClick={() => handleEdit(event)}>Edit</button>
          <button className="btn btn-sm btn-danger" onClick={() => handleDelete(event._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CreateEvent;
