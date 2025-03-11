import React, { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSent, setIsSent] = useState(false); // Track if form is sent

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Form Sent!"); // Show instant feedback
    setIsSent(true); // Disable form after submission

    try {
      await axios.post("https://full-stack-project-1-vwwb.onrender.com/api/contact", formData);
      setStatus("Thank you! We will get back to you soon.");
      setFormData({ fullName: "", email: "", phoneNumber: "", message: "" });
      setIsSent(false); // Re-enable form for future submissions
    } catch (err) {
      console.error(err);
      setStatus("Error submitting the form. Please try again.");
      setIsSent(false);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen p-4">
      <div className="bg-white p-5 w-full max-w-lg rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">Contact</h2>
        <h6 className="text-center" style={{marginTop:"-10px", marginBottom:"30px"}}>Contact Us +91 9673332684 </h6>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-base font-medium text-gray-700">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#4748ac] text-sm"
              placeholder="Enter your full name"
              required
              disabled={isSent}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">
              E-Mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#4748ac] text-sm"
              placeholder="Enter your email address"
              required
              disabled={isSent}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-base font-medium text-gray-700">
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#4748ac] text-sm"
              placeholder="Enter your phone number"
              required
              disabled={isSent}
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-base font-medium text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-[#4748ac] text-sm"
              placeholder="Enter your message"
              required
              disabled={isSent}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`w-1/3 text-white font-medium py-2 rounded-md transition duration-200 text-sm ${
                isSent ? "bg-gray-400 cursor-not-allowed" : "bg-[#4748ac] hover:bg-[#3b3d8c]"
              }`}
              disabled={isSent}
            >
              {isSent ? "Sent" : "Send"}
            </button>
          </div>
        </form>
        {status && <p className="mt-3 text-center text-sm">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
