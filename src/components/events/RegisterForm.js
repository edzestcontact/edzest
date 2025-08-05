import React, { useState } from "react";
import axios from "axios";

const RegisterForm = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    remarks: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/register", {

      ...formData,
      eventId: event._id,
    });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div>
        <h4>You have successfully registered!</h4>
        <button onClick={onClose}>Close</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 10 }}>
      <h4>{event.title}</h4>
      <img src={event.wallpaper} alt="wallpaper" style={{ width: "100%", height: 120 }} />
      <p><a href={event.linkedin} target="_blank" rel="noreferrer">Speaker LinkedIn</a></p>

      <input name="name" placeholder="Your Name" onChange={handleChange} required />
      <input name="email" placeholder="Your Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
      <textarea name="remarks" placeholder="Remarks" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterForm;


