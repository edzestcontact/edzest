// src/components/Admin/RegisterForm.js
import React, { useState } from "react";
import axios from "axios";

const RegisterForm = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    remarks: "", // ✅ Added remarks field
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/api/register", {
        ...formData,
        eventTitle: event.title,
        eventDate: event.date,
      });
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', remarks: '' }); // ✅ Reset remarks too
      alert("🎉 Registered successfully!");
      onClose();
    } catch (error) {
      alert("Registration failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="text-xl font-bold mb-4">Register for {event.title}</h3>

        {success ? (
          <p className="text-green-600 font-medium">
            Successfully registered! ✅
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
            <textarea
              name="remarks"
              placeholder="Remarks (optional)"
              value={formData.remarks}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              rows={3}
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-[#4748ac] text-white px-4 py-2 rounded w-full hover:bg-[#37378c] transition"
            >
              {loading ? "Registering..." : "Submit Registration"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
