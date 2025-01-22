import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Benefit from "./components/Benefit";
import Preparation from "./components/Preparation";
import Whychooseus from "./components/Whychooseus";
import Trainer from "./components/Trainer";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Training from "./components/Training"; // Training page
import MockExam from "./components/MockExam"; // Mock exam page
import About from "./components/About"; // About us page

import Footer from "./components/Footer";
import Login from "./components/Login";
import Contactus from "./components/Contactus";
import PrivacyPolicy from "./components/Privacy Policy";
import TermsAndConditions from "./components/TermsAndConditions";
import RefundPolicy from "./components/Refund Policy"; 
import JoinNowForm from './components/Joinnow';
import WhatsAppChat from "./components/Whatsappchat"; // WhatsApp Chat component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar will be visible on all pages */}
        <Navbar />

        {/* Routes for all pages */}
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banner />
                <Benefit />
                <Preparation />
                <Whychooseus />
                <Trainer />
                <Testimonial />
                <FAQ />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* Individual Pages */}
          <Route path="/training" element={<Training />} />
          <Route path="/mock-exam" element={<MockExam />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} /> 
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/join-us" element={<JoinNowForm />} /> 

          {/* Catch-All Redirect */}
          <Route path="*" element={<Hero />} /> {/* Invalid route goes to home */}
        </Routes>

        {/* WhatsApp Chat Button */}
        <WhatsAppChat />
      </BrowserRouter>
    </div>
  );
}

export default App;