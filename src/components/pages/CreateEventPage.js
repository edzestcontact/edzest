import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateEvent from "../events/CreateEvent";

const CreateEventPage = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://event-testing-1.onrender.com/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://event-testing-1.onrender.com/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  const handleDownload = (id) => {
    window.open(`https://event-testing-1.onrender.com/api/register/${id}/download`, "_blank");
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="container my-5">
      <CreateEvent onCreated={fetchEvents} />

      <h3 className="mt-5 mb-4">All Events</h3>
      <div className="row">
        {events.map((event) => (
          <div key={event._id} className="col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm p-3">
              <h5 className="mb-1">{event.title}</h5>
              <p className="text-muted mb-2">
                {event.date} at {event.time}
              </p>
              <div className="d-flex gap-2">
                <button className="btn btn-primary btn-sm">Edit</button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              </div>
              <button
                className="btn btn-secondary btn-sm mt-2"
                onClick={() => handleDownload(event._id)}
              >
                Download Registrations
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateEventPage;
