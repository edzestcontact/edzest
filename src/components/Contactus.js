import React from "react";
import Footer from "./Footer"; // Importing the Footer component for the footer section.
const Contact = () => {
  const emailAddress = "contact@edzest.org";
  const subject = "Enquiry About Services";
  const body = "Hi, I would like to know more about your services.";

  const gmailLink = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
    emailAddress
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div>
      <div className="text-center bg-[#e6e7f6] p-5 rounded">
        <h1 className="display-4 text-[#4748ac] fw-bold mb-4">Contact Us</h1>
        <p className="lead mb-5 text-secondary">
          Have questions or feedback? Send us an email!
        </p>
        <a
          href={gmailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4748ac] py-3 text-white w-md-75 rounded btn-lg px-5 hover:bg-[#37378c]"
        >
          Open Mail
        </a>
      </div>
      <Footer /> {/* Rendering the imported Footer component */}
    </div>
  );
};

export default Contact;