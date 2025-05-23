import React, { useState, useEffect } from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm"; // ✅ Register form modal

const CreateEvent = () => {
  const [event, setEvent] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    type: "",
    speaker: "",
    link: "",
    linkedin: "", 
    image: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [eventsList, setEventsList] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(
        "https://edzestweb-3.onrender.com/api/events"
      );
      console.log("📋 All Events from DB:", res.data);
      setEventsList(res.data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const targetAspect = 16 / 9;
          const currentAspect = img.width / img.height;
          let drawWidth, drawHeight;

          if (currentAspect > targetAspect) {
            drawHeight = img.height;
            drawWidth = img.height * targetAspect;
          } else {
            drawWidth = img.width;
            drawHeight = img.width / targetAspect;
          }

          canvas.width = 1280;
          canvas.height = 720;
          const ctx = canvas.getContext("2d");
          ctx.fillStyle = "#fff";
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(
            img,
            (img.width - drawWidth) / 2,
            (img.height - drawHeight) / 2,
            drawWidth,
            drawHeight,
            0,
            0,
            canvas.width,
            canvas.height
          );

          const croppedDataUrl = canvas.toDataURL("image/jpeg");
          setEvent({ ...event, image: croppedDataUrl });
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const url = isEditing
        ? `https://edzestweb-3.onrender.com/api/events/${editingEventId}`
        : "https://edzestweb-3.onrender.com/api/events";
      const method = isEditing ? "put" : "post";

      const res = await axios[method](url, event, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert(
        isEditing
          ? "Event updated successfully!"
          : "Event created successfully!"
      );

      setEvent({
        title: "",
        description: "",
        date: "",
        time: "",
        type: "",
        speaker: "",
        link: "",
        linkedin: "", 
        image: "",
      });
      setIsEditing(false);
      setEditingEventId(null);
      fetchEvents();
    } catch (error) {
      console.error(error);
      alert("Error saving event");
    }
  };

  const handleEdit = (eventData) => {
    setEvent(eventData);
    setIsEditing(true);
    setEditingEventId(eventData._id);
  };

  const handleDelete = async (id) => {
    console.log("🗑️ Trying to delete event with ID:", id);
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `https://edzestweb-3.onrender.com/api/events/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        fetchEvents();
        alert("Event deleted successfully");
      } catch (err) {
        console.error("Error deleting event:", err);
        alert("Failed to delete event");
      }
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">
        {isEditing ? "Modify Event" : "Create Event"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={event.title}
          onChange={handleChange}
          className="w-full border p-2 text-sm"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={event.description}
          onChange={handleChange}
          className="w-full border p-2 text-sm"
          required
        ></textarea>
        <input
          type="date"
          name="date"
          value={event.date}
          onChange={handleChange}
          className="w-full border p-2 text-sm"
          required
        />
        <input
          type="time"
          name="time"
          value={event.time}
          onChange={handleChange}
          className="w-full border p-2 text-sm"
          required
        />
        <input
          type="text"
          name="type"
          placeholder="Event Type (e.g., Webinar)"
          value={event.type}
          onChange={handleChange}
          className="w-full border p-2 text-sm"
          required
        />
        <input
          type="text"
          name="speaker"
          placeholder="Speaker"
          value={event.speaker}
          onChange={handleChange}
          className="w-full border p-2 text-sm"
          required
        />
        <input
          type="url"
          name="link"
          placeholder="Event Link"
          value={event.link}
          onChange={handleChange}
          className="w-full border p-2 text-sm"
          required
        />

        <input
  type="url"
  name="linkedin"
  placeholder="Speaker LinkedIn Profile (optional)"
  value={event.linkedin}
  onChange={handleChange}
  className="w-full border p-2 text-sm"
/>

        <input
          type="file"
          onChange={handleImageChange}
          accept="image/*"
          className="w-full border p-2 text-sm"
        />
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-[#4748ac] text-white text-sm py-1 px-3 rounded hover:bg-blue-700"
          >
            {isEditing ? "Update" : "Create"}
          </button>
        </div>
      </form>

      {showRegisterForm && (
        <RegisterForm
          event={event}
          onClose={() => setShowRegisterForm(false)}
        />
      )}

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">All Events</h3>
        {eventsList.map((evt) => {
          console.log("🔍 Event ID:", evt._id);
          return (
            <div key={evt._id} className="border p-3 rounded mb-3 shadow-sm">
              <p className="text-sm font-semibold">{evt.title}</p>
              <p className="text-xs text-gray-600">
                {evt.date} at {evt.time}
              </p>
              <div className="mt-2 flex gap-2">
                <button
                  onClick={() => handleEdit(evt)}
                  className="text-sm px-2 py-1 bg-[#4748ac] text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(evt._id)}
                  className="text-sm px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href="https://edzestweb-3.onrender.com/api/register/download"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white text-sm px-2 py-3 rounded hover:bg-green-700 w-1/4 text-center no-underline"
          style={{ textDecoration: "none" }}
        >
          📁 Download Event Data (Excel)
        </a>

        <a
          href="https://edzestweb-3.onrender.com/api/register/users/download"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4748ac] text-white text-sm p2-3 py-3 rounded bg-[#4748ac] w-1/4 text-center no-underline"
          style={{ textDecoration: "none" }}
        >
          👤 Download User Registrations (Excel)
        </a>
      </div>
    </div>
  );
};

export default CreateEvent;
