// import React, { useState } from "react";
// import axios from "axios";

// const RegisterForm = ({ event, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     remarks: "",
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("email", formData.email);
//       data.append("phone", formData.phone);
//       data.append("remarks", formData.remarks);
//       data.append("eventTitle", event.title);
//       data.append("eventDate", event.date);
//       if (imageFile) data.append("image", imageFile);

//       await axios.post(
//         "https://edzestweb-3.onrender.com/api/register",
//         data,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       setSuccess(true);
//       setFormData({ name: "", email: "", phone: "", remarks: "" });
//       setImageFile(null);
//       alert("🎉 Registered successfully!");
//       onClose();
//     } catch (error) {
//       console.error("Registration failed:", error);
//       alert("Registration failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg overflow-y-auto max-h-[95vh]">
//         <button
//           className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
//           onClick={onClose}
//         >
//           ✕
//         </button>

//         {/* ✅ Speaker Image + Description + LinkedIn */}
//         <div className="mb-4">
//           <img
//             src={event.image}
//             alt={event.title}
//             className="w-full h-40 object-cover rounded-lg mb-3 border border-gray-300"
//           />
//           <p className="text-sm text-gray-700 mb-1">
//             <strong>Description:</strong> {event.description}
//           </p>
//           <p className="text-sm">
//             <strong>LinkedIn:</strong>{" "}
//             <a
//               href={event.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 underline"
//             >
//               {event.link}
//             </a>
//           </p>
//           <hr className="my-4" />
//         </div>

//         {/* ✅ Registration Form */}
//         {success ? (
//           <p className="text-green-600 font-medium text-center">
//             Successfully registered! ✅
//           </p>
//         ) : (
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//             />
//             <input
//               type="text"
//               name="phone"
//               placeholder="Phone Number"
//               required
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//             />
//             <textarea
//               name="remarks"
//               placeholder="Remarks (optional)"
//               value={formData.remarks}
//               onChange={handleChange}
//               className="w-full border p-2 rounded"
//               rows={3}
//             ></textarea>

//             {/* <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="w-full border p-2 rounded"
//             /> */}

//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#4748ac] text-white px-4 py-2 rounded w-full hover:bg-[#37378c] transition"
//             >
//               {loading ? "Registering..." : "Submit Registration"}
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;


import React, { useState } from "react";
import axios from "axios";

const RegisterForm = ({ event, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    remarks: "",
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
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("remarks", formData.remarks);

      // ✅ Include full event details
      data.append("eventTitle", event.title);
      data.append("eventDate", event.date);
      data.append("eventTime", event.time);
      data.append("eventSpeaker", event.speaker);
      data.append("eventDescription", event.description);
      data.append("eventLink", event.link);       // ✅ Zoom link
      data.append("linkedin", event.linkedin);    // ✅ LinkedIn

      await axios.post(
        "https://edzestweb-3.onrender.com/api/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", remarks: "" });
      alert("🎉 Registered successfully!");
      onClose();
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg overflow-y-auto max-h-[95vh]">
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500"
          onClick={onClose}
        >
          ✕
        </button>

        {/* ✅ Event Info: Image, Description, LinkedIn */}
        <div className="mb-4">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-40 object-cover rounded-lg mb-3 border border-gray-300"
          />
          <p className="text-sm text-gray-700 mb-1">
            <strong>Description:</strong> {event.description}
          </p>
          <p className="text-sm">
            <strong>LinkedIn:</strong>{" "}
            <a
              href={event.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              {event.linkedin}
            </a>
          </p>
          <hr className="my-4" />
        </div>

        {/* ✅ Registration Form */}
        {success ? (
          <p className="text-green-600 font-medium text-center">
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
