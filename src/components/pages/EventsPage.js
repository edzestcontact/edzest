import React, { useState, useEffect } from "react";
import EventList from "../events/EventList";
import axios from "axios";

const EventsPage = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("https://event-testing-1.onrender.com/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Failed to fetch events:", err);
    }
  };
  

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2 className="mb-3 text-center">Upcoming Events</h2>
      <EventList events={events} onUpdated={fetchEvents} isAdmin={false} />
    </div>
  );
};

export default EventsPage;
