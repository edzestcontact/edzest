


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const API = process.env.REACT_APP_API || "https://edzestweb-6.onrender.com";

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
//     wallpaper: null, // File
//   });
//   const [preview, setPreview] = useState(null);
//   const [events, setEvents] = useState([]);
//   const [editingId, setEditingId] = useState(null);

//   const fetchEvents = async () => {
//     try {
//       const res = await axios.get(`${API}/api/events`);
//       setEvents(res.data);
//     } catch (err) {
//       console.error("❌ Error fetching events:", err);
//     }
//   };

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   // live preview for selected image
//   useEffect(() => {
//     if (formData.wallpaper instanceof File) {
//       const url = URL.createObjectURL(formData.wallpaper);
//       setPreview(url);
//       return () => URL.revokeObjectURL(url);
//     }
//     setPreview(null);
//   }, [formData.wallpaper]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: files ? files[0] : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // optional: your validations
//     const hasDigits = /\d/;
//     if (hasDigits.test(formData.title)) {
//       alert("⚠️ Event Title should not contain numbers.");
//       return;
//     }
//     if (hasDigits.test(formData.speaker)) {
//       alert("⚠️ Speaker Name should not contain numbers.");
//       return;
//     }

//     const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
//     if (!urlPattern.test(formData.link)) {
//       alert("⚠️ Invalid Event Link URL.");
//       return;
//     }
//     if (!urlPattern.test(formData.linkedin)) {
//       alert("⚠️ Invalid LinkedIn Profile URL.");
//       return;
//     }

//     try {
//       const fd = new FormData();
//       // append text fields
//       fd.append("title", formData.title);
//       fd.append("description", formData.description);
//       fd.append("date", formData.date);
//       fd.append("time", formData.time);
//       fd.append("type", formData.type);
//       fd.append("speaker", formData.speaker);
//       fd.append("link", formData.link);
//       fd.append("linkedin", formData.linkedin);

//       // append file ONLY if it’s a real File (very important for multer)
//       if (formData.wallpaper instanceof File) {
//         fd.append("wallpaper", formData.wallpaper); // must match upload.single("wallpaper")
//       }

//       if (editingId) {
//         await axios.put(`${API}/api/events/${editingId}`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("Event updated successfully!");
//       } else {
//         await axios.post(`${API}/api/events`, fd, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("Event created successfully!");
//       }

//       // reset
//       await fetchEvents();
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
//       });
//       setPreview(null);
//       setEditingId(null);
//     } catch (err) {
//       console.error("❌ Error submitting event:", err?.response?.data || err.message);
//       alert(err?.response?.data?.message || "Failed to submit event");
//     }
//   };

//   const handleEdit = (event) => {
//     setEditingId(event._id);
//     setFormData({
//       title: event.title || "",
//       description: event.description || "",
//       date: event.date || "",
//       time: event.time || "",
//       type: event.type || "",
//       speaker: event.speaker || "",
//       link: event.link || "",
//       linkedin: event.linkedin || "",
//       wallpaper: null, // choose a new file to replace (optional)
//     });
//     setPreview(event.wallpaperUrl || null);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${API}/api/events/${id}`);
//       fetchEvents();
//     } catch (err) {
//       console.error("❌ Error deleting event:", err?.response?.data || err.message);
//     }
//   };

//   return (
//     <div className="container mt-4 mb-5" style={{ maxWidth: "720px" }}>
//       <h3 className="text-center mb-4">
//         {editingId ? "Edit Event" : "Create Event"}
//       </h3>
//       <form onSubmit={handleSubmit} className="shadow p-4 bg-white rounded" encType="multipart/form-data">
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
//           <label className="form-label">Speaker LinkedIn Profile</label>
//           <input name="linkedin" value={formData.linkedin} onChange={handleChange} className="form-control" />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Upload Event Poster</label>
//           <input type="file" name="wallpaper" onChange={handleChange} className="form-control" accept="image/*" />
//           {preview && (
//             <div className="mt-2">
//               <img src={preview} alt="Preview" style={{ maxWidth: "100%", borderRadius: 8 }} />
//             </div>
//           )}
//         </div>

//         <button type="submit" className="btn btn-primary w-100">
//           {editingId ? "Update Event" : "Create Event"}
//         </button>
//       </form>

//       <h4 className="mt-5 mb-3">All Events</h4>
//       {events.map((event) => (
//         <div key={event._id} className="shadow-sm p-3 mb-3 bg-light rounded border">
//           <div className="d-flex align-items-center gap-3">
//             {event.wallpaperUrl && (
//               <img
//                 src={event.wallpaperUrl}
//                 alt="Poster"
//                 style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 6 }}
//               />
//             )}
//             <div className="flex-grow-1">
//               <h5 className="mb-1">{event.title}</h5>
//               <small className="text-muted">{event.date} at {event.time}</small>
//             </div>
//             <div>
//               <button className="btn btn-sm btn-secondary me-2" onClick={() => handleEdit(event)}>Edit</button>
//               <button className="btn btn-sm btn-danger" onClick={() => handleDelete(event._id)}>Delete</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CreateEvent;


// src/pages/CreateEvent.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API || "https://edzestweb-6.onrender.com";

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
    wallpaper: null, // File
  });

  const [preview, setPreview] = useState(null);
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  // -------- Fetch Events --------
  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${API}/api/events`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      setEvents(res.data || []);
    } catch (err) {
      console.error("❌ Error fetching events:", err?.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // -------- Live Preview for Selected Image --------
  useEffect(() => {
    if (formData.wallpaper instanceof File) {
      const url = URL.createObjectURL(formData.wallpaper);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreview(null);
  }, [formData.wallpaper]);

  // -------- Handlers --------
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validations
    const hasDigits = /\d/;
    if (hasDigits.test(formData.title)) {
      alert("⚠️ Event Title should not contain numbers.");
      return;
    }
    if (hasDigits.test(formData.speaker)) {
      alert("⚠️ Speaker Name should not contain numbers.");
      return;
    }

    // Validate URLs only if provided (allow blank)
    const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
    if (formData.link && !urlPattern.test(formData.link)) {
      alert("⚠️ Invalid Event Link URL.");
      return;
    }
    if (formData.linkedin && !urlPattern.test(formData.linkedin)) {
      alert("⚠️ Invalid LinkedIn Profile URL.");
      return;
    }

    try {
      setSubmitting(true);

      const fd = new FormData();
      // text fields
      fd.append("title", formData.title);
      fd.append("description", formData.description);
      fd.append("date", formData.date);
      fd.append("time", formData.time);
      fd.append("type", formData.type);
      fd.append("speaker", formData.speaker);
      fd.append("link", formData.link);
      fd.append("linkedin", formData.linkedin);

      // file field (must match multer.single("wallpaper"))
      if (formData.wallpaper instanceof File) {
        fd.append("wallpaper", formData.wallpaper);
      }

      const token = localStorage.getItem("token");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      if (editingId) {
        await axios.put(`${API}/api/events/${editingId}`, fd, { headers });
        alert("Event updated successfully!");
      } else {
        await axios.post(`${API}/api/events`, fd, { headers });
        alert("Event created successfully!");
      }

      // reset & refresh
      await fetchEvents();
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
      });
      setPreview(null);
      setEditingId(null);
    } catch (err) {
      console.error("❌ Error submitting event:", err?.response?.data || err.message);
      alert(err?.response?.data?.message || "Failed to submit event");
    } finally {
      setSubmitting(false);
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
      wallpaper: null, // choose new file to replace (optional)
    });
    setPreview(event.wallpaperUrl || null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API}/api/events/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      fetchEvents();
    } catch (err) {
      console.error("❌ Error deleting event:", err?.response?.data || err.message);
    }
  };

  // -------- UI --------
  return (
    <div className="container mt-4 mb-5" style={{ maxWidth: "720px" }}>
      <h3 className="text-center mb-4">
        {editingId ? "Edit Event" : "Create Event"}
      </h3>

      <form
        onSubmit={handleSubmit}
        className="shadow p-4 bg-white rounded"
        encType="multipart/form-data"
      >
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows={3}
          />
        </div>

        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Event Type</label>
          <input
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Speaker Name</label>
          <input
            name="speaker"
            value={formData.speaker}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Event Link</label>
          <input
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="form-control"
            placeholder="https://..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Speaker LinkedIn Profile</label>
          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="form-control"
            placeholder="https://linkedin.com/in/..."
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Event Poster</label>
          <input
            type="file"
            name="wallpaper"
            onChange={handleChange}
            className="form-control"
            accept="image/*"
          />
          {preview && (
            <div className="mt-2">
              <img
                src={preview}
                alt="Preview"
                style={{ maxWidth: "100%", borderRadius: 8 }}
              />
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100" disabled={submitting}>
          {submitting ? "Please wait..." : editingId ? "Update Event" : "Create Event"}
        </button>
      </form>

      <h4 className="mt-5 mb-3">All Events</h4>
      {events.map((event) => (
        <div
          key={event._id}
          className="shadow-sm p-3 mb-3 bg-light rounded border"
        >
          <div className="d-flex align-items-center gap-3">
            {event.wallpaperUrl && (
              <img
                src={event.wallpaperUrl}
                alt="Poster"
                style={{
                  width: 120,
                  height: 80,
                  objectFit: "cover",
                  borderRadius: 6,
                }}
              />
            )}
            <div className="flex-grow-1">
              <h5 className="mb-1">{event.title}</h5>
              <small className="text-muted">
                {event.date} at {event.time}
              </small>
            </div>
            <div>
              <button
                className="btn btn-sm btn-secondary me-2"
                onClick={() => handleEdit(event)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleDelete(event._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreateEvent;
