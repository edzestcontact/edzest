import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 d-flex justify-between align-items-center">
        {/* Logo */}
        <div className="d-flex align-items-center border-0">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="h-18 w-18 ml-4 object-contain border-0"
              style={{ height: '68px', width: '90px' }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="d-none d-md-flex gap-3 text-gray-700 font-medium">
          <Link to="/training" className="text-gray-800 text-decoration-none hover:text-[#4748ac]">Training</Link>
          <Link to="/mock-exam" className="text-gray-800 text-decoration-none hover:text-[#4748ac]">Mock Exam</Link>
          <Link to="/flashcards" className="text-gray-800 text-decoration-none hover:text-[#4748ac]">Flashcards</Link>
          <Link to="/about" className="text-gray-800 text-decoration-none hover:text-[#4748ac]">About us</Link>
          <Link to="/contact" className="text-gray-800 text-decoration-none hover:text-[#4748ac]">Contact us</Link>
          
          {/* Log In Button for Desktop */}
          <a
            href="https://exams.edzest.org/learn/account/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 rounded text-white text-decoration-none bg-[#4748ac] hover:bg-[#37378c]"
            style={{marginTop:'-7px'}}
          >
            Log in
          </a>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="d-md-none">
          <button onClick={toggleMenu} className="btn text-gray-700">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Menu */}
        {isMenuOpen && (
          <div
            className="position-fixed top-0 end-0 h-100 bg-light shadow-lg d-md-none"
            style={{
              width: '250px',
              zIndex: 1050,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {/* Close Icon */}
            <button
              onClick={closeMenu}
              className="btn-close position-absolute top-0 end-0 m-3"
              aria-label="Close"
            ></button>
            <nav className="p-4">
              <Link
                to="/training"
                className="d-block text-gray-700 text-center text-decoration-none py-2 hover:text-white hover:bg-[#4748ac]"
                onClick={closeMenu}
              >
                Training
              </Link>

              <Link
                to="/mock-exam"
                className="d-block text-gray-700 text-center text-decoration-none py-2 hover:text-white hover:bg-[#4748ac]"
                onClick={closeMenu}
              >
                Mock Exam
              </Link>

              <Link
                to = "/flashcards"
                target="_blank"
                rel="noopener noreferrer"
                className="d-block text-gray-700 text-center text-decoration-none py-2 hover:text-white hover:bg-[#4748ac]"
                onClick={closeMenu}
              >
                Flashcards
              </Link>
             
              <Link
                to="/about"
                className="d-block text-gray-700 text-center text-decoration-none py-2 hover:text-white hover:bg-[#4748ac]"
                onClick={closeMenu}
              >
                About us
              </Link>
              <Link
                to="/contact"
                className="d-block text-gray-700 text-center text-decoration-none py-2 hover:text-white hover:bg-[#4748ac]"
                onClick={closeMenu}
              >
                Contact us
              </Link>
              <a
                href="https://exams.edzest.org/learn/account/signin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded text-white text-center  bg-[#4748ac] hover:bg-[#37378c] d-block mt-3"
                onClick={closeMenu}
              >
                Log in 
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
