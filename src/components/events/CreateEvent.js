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
//     try {
//       const payload = new FormData();
//       Object.entries(formData).forEach(([key, value]) =>
//         payload.append(key, value)
//       );

//       if (editingId) {
//         await axios.put(`https://edzestweb-6.onrender.com/api/events/${editingId}`, payload, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("Event updated successfully!");
//       } else {
//         await axios.post("https://edzestweb-6.onrender.com/api/events", payload, {
//           headers: { "Content-Type": "multipart/form-data" },
//         });
//         alert("Event created successfully!");
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
//       });
//       setEditingId(null);
//     } catch (err) {
//       console.error("Error submitting event:", err);
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
//       wallpaper: null, // we don’t refill image file
//     });
//     window.scrollTo({ top: 0, behavior: 'smooth' });
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

//       {/* Display all events */}
//       <h4 className="mt-5 mb-3">All Events</h4>
//       {events.map((event) => (
//         <div key={event._id} className="shadow-sm p-3 mb-3 bg-light rounded border">
//           <h5>{event.title}</h5>
//           <p>{event.date} at {event.time}</p>
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

const API_BASE = "https://event-testing-1.onrender.com/api/events";

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
    wallpaper: null, // file
  });
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // For showing the current server image while editing
  const [currentImageUrl, setCurrentImageUrl] = useState(null);
  // For showing a client-side preview of a newly selected file
  const [localPreviewUrl, setLocalPreviewUrl] = useState(null);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(API_BASE);
      // getAllEvents returns an array (res.json(events)), so res.data is fine
      setEvents(res.data || []);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));

      // set local preview (doesn't affect server state)
      const fileUrl = URL.createObjectURL(files[0]);
      setLocalPreviewUrl(fileUrl);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❌ Disallow digits in title or speaker name (keeping your current rule)
    const hasDigits = /\d/;
    if (hasDigits.test(formData.title)) {
      alert("⚠️ Event Title should not contain numbers.");
      return;
    }
    if (hasDigits.test(formData.speaker)) {
      alert("⚠️ Speaker Name should not contain numbers.");
      return;
    }

    // ✅ Required fields check
    if (
      !formData.title ||
      !formData.description ||
      !formData.date ||
      !formData.time ||
      !formData.type ||
      !formData.speaker ||
      !formData.link ||
      !formData.linkedin ||
      (!editingId && !formData.wallpaper) // require image only for create
    ) {
      alert("⚠️ Please fill all required fields before submitting.");
      return;
    }

    const urlPattern = /^(https?:\/\/)[^\s/$.?#].[^\s]*$/i;
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

      // Append text fields explicitly (avoid appending null file when editing)
      payload.append("title", formData.title);
      payload.append("description", formData.description);
      payload.append("date", formData.date);
      payload.append("time", formData.time);
      payload.append("type", formData.type);
      payload.append("speaker", formData.speaker);
      payload.append("link", formData.link);
      payload.append("linkedin", formData.linkedin);

      // Only append a file if one is selected (important for edit flow)
      if (formData.wallpaper instanceof File) {
        payload.append("wallpaper", formData.wallpaper); // must match upload.single('wallpaper')
      }

      if (editingId) {
        await axios.put(`${API_BASE}/${editingId}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Event updated successfully!");
      } else {
        await axios.post(API_BASE, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Event created successfully!");
      }

      // Refresh list
      await fetchEvents();

      // Reset form
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
      setEditingId(null);
      setCurrentImageUrl(null);
      setLocalPreviewUrl(null);
    } catch (err) {
      console.error("Error submitting event:", err);
      alert("Something went wrong while submitting the event.");
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
      wallpaper: null, // no file selected initially
    });

    // Prefer Cloudinary url; fallback to any legacy local path if present
    setCurrentImageUrl(event.wallpaperUrl || event.wallpaper || null);
    setLocalPreviewUrl(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  return (
    <div className="container mt-4 mb-5" style={{ maxWidth: "700px" }}>
      <h3 className="text-center mb-4">
        {editingId ? "Edit Event" : "Create Event"}
      </h3>

      <form onSubmit={handleSubmit} className="shadow p-4 bg-white rounded">
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
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Speaker LinkedIn Profile</label>
          <input
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* Current image (server) and new local preview */}
        {(currentImageUrl || localPreviewUrl) && (
          <div className="mb-3">
            <label className="form-label">Poster Preview</label>
            <div className="d-flex gap-3 align-items-start">
              {currentImageUrl && !localPreviewUrl && (
                <img
                  src={currentImageUrl}
                  alt="current poster"
                  style={{ width: 200, height: "auto", borderRadius: 8 }}
                />
              )}
              {localPreviewUrl && (
                <img
                  src={localPreviewUrl}
                  alt="new poster preview"
                  style={{ width: 200, height: "auto", borderRadius: 8 }}
                />
              )}
            </div>
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Upload Event Poster</label>
          <input
            type="file"
            name="wallpaper"
            onChange={handleChange}
            className="form-control"
            accept="image/*"
          />
          {editingId && (
            <div className="form-text">
              If you don’t choose a new image, the existing one will remain.
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-100">
          {editingId ? "Update Event" : "Create Event"}
        </button>
      </form>

      {/* Display all events */}
      <h4 className="mt-5 mb-3">All Events</h4>
      {events.map((event) => (
        <div
          key={event._id}
          className="shadow-sm p-3 mb-3 bg-light rounded border"
        >
          <div className="d-flex align-items-center gap-3">
            {(event.wallpaperUrl || event.wallpaper) && (
              <img
                src={event.wallpaperUrl || event.wallpaper}
                alt={event.title}
                style={{ width: 90, height: 60, objectFit: "cover", borderRadius: 6 }}
              />
            )}
            <div className="flex-grow-1">
              <h5 className="mb-1">{event.title}</h5>
              <p className="mb-1">{event.date} at {event.time}</p>
              {event.speaker && <small className="text-muted">Speaker: {event.speaker}</small>}
            </div>
          </div>

          <div className="mt-2">
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
      ))}
    </div>
  );
};

export default CreateEvent;
