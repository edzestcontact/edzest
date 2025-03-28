// import React from "react";
// import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-white dark:bg-gray-900 shadow-md text-gray-800 dark:text-gray-200 py-6 border-t dark:border-gray-700 font-sans">
//       <div className="max-w-screen-xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="col-span-2">
//             <h4 className="text-lg font-semibold mb-3">Edzest Education Services (OPC) Pvt. Ltd.</h4>
//             <p className="text-sm leading-relaxed">
//               SY no. 42, Near J R Layout Haralur,<br/>  
//               Bengaluru- 560102, Karnataka, India
//             </p>            

//             <a
//               href="mailto:contact@edzest.org"
//               className="text-sm leading-relaxed text-black dark:text-gray-300"
//             >
//               contact@edzest.org
//             </a>

//             <div className="flex items-center mb-3 space-x-3">                
//               <span className="text-sm leading-relaxed">+91 9673332684</span>
//             </div>
//           </div>

//           {/* Navigation Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-3">Company</h4>
//             <ul className="space-y-2">
//               <li><Link to="/about" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About Us</Link></li>
//               <li><Link to="/privacypolicy" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Privacy Policy</Link></li>
//               <li><Link to="/termsandconditions" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Terms & Conditions</Link></li>
//               <li><Link to="/refundpolicy" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Refund Policy</Link></li>
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-3">Help & Support</h4>
//             <ul className="space-y-2">
//               <li><Link to="/contact" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact Us</Link></li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom Section */}
//         <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-4 dark:border-gray-600">
//           <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
//             &copy; {new Date().getFullYear()} Edzest Education Services. | All Rights Reserved
//           </div>

//           {/* Social Media Links */}
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-pink-500 text-2xl hover:opacity-75 dark:hover:opacity-90"
//             >
//               <FaInstagram />
//             </a>
//             <a
//               href="https://www.linkedin.com/company/edzest"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-700 text-2xl hover:opacity-75 dark:hover:opacity-90"
//             >
//               <FaLinkedinIn />
//             </a>
//             <a
//               href="https://www.youtube.com/@edzest"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-red-500 text-2xl hover:opacity-75 dark:hover:opacity-90"
//             >
//               <FaYoutube />
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import './footer.css'; // Correctly import the CSS file

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-md text-gray-800 dark:text-gray-200 py-6 border-t dark:border-gray-700 font-sans">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2">
            <h4 className="text-lg font-semibold mb-3">Edzest Education Services (OPC) Pvt. Ltd.</h4>
            <p className="text-sm leading-relaxed">
              SY no. 42, Near J R Layout Haralur,<br/>
              Bengaluru- 560102, Karnataka, India
            </p>            

            <a
              href="mailto:contact@edzest.org"
              className="text-sm leading-relaxed text-black dark:text-gray-300"
            >
              contact@edzest.org
            </a>

            <div className="flex items-center mb-3 space-x-3">                
              <span className="text-sm leading-relaxed">+91 9673332684</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">About Us</Link></li>
              <li><Link to="/privacypolicy" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/termsandconditions" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Terms & Conditions</Link></li>
              <li><Link to="/refundpolicy" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Help & Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-black dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t pt-4 dark:border-gray-600">
          <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Edzest Education Services. | All Rights Reserved
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 text-2xl hover:opacity-75 dark:hover:opacity-90"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/edzest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-2xl hover:opacity-75 dark:hover:opacity-90"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.youtube.com/@edzest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 text-2xl hover:opacity-75 dark:hover:opacity-90"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


