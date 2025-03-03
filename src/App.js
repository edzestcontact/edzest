import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React from "react"; // Import React library
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import routing components
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap layout components

// Importing all components used in the application
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
import Training from "./components/Training"; 
import MockExam from "./components/MockExam"; 
import About from "./components/About"; 
import Footer from "./components/Footer";
import Login from "./components/Login";
import Contactus from "./components/Contactus";
import PrivacyPolicy from "./components/Privacy Policy";
import TermsAndConditions from "./components/TermsAndConditions";
import RefundPolicy from "./components/Refund Policy"; 
import JoinNowForm from "./components/Joinnow";
import WhatsAppChat from "./components/Whatsappchat"; 
import FlashMain from "./FlashcardApp/FlashMain";

// Importing services and workshop-related components
import PMPExamPrep from "./components/Services/TrainingServices/PMPExamPrep";
import Workshop from "./components/Services/Workshop/Workshop";
import ManagingRisk from "./components/Services/Workshop/ManagingRisk";
import AgileApproach from "./components/Services/Workshop/AgileApproach";
import Traditional from "./components/Services/Workshop/Traditional";
import CareerDevelopment from "./components/Services/CareerDevelopment/CareerDevelopment";
import Resume from "./components/Services/CareerDevelopment/Resume";
import Interview from "./components/Services/CareerDevelopment/Interview";
import TrainingServices from "./components/Services/TrainingServices/TrainingServices";
import ProjectFoundation from "./components/Services/TrainingServices/ProjectFoundation";
import DragDropQuiz from './DragAndDrop/DragDropQuiz';


function App() {
  return (
    <div className="App">
      <Router> {/* React Router for navigation */}
        
        {/* Navbar that remains visible on all pages */}
        <Navbar />

        {/* Defining all routes */}
        <Routes>
          {/* Home Page with multiple sections */}
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

          {/* Individual pages with their respective components */}
          <Route path="/training" element={<Training />} /> 
          <Route path="/mock-exam" element={<MockExam />} />
          <Route path="/flashcards" element={<FlashMain />} />
          <Route path="/agile" element={<FlashMain />} />
          <Route path="/domain" element={<FlashMain />} />
          <Route path="/process-groups" element={<FlashMain />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/training-services" element={<TrainingServices />} />
          <Route path="/project-foundation" element={<ProjectFoundation />} />
          <Route path="/pmp-exam-prep" element={<PMPExamPrep />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/workshop/managing-risk" element={<ManagingRisk />} />
          <Route path="/workshop/agile-approach" element={<AgileApproach />} />
          <Route path="/workshop/traditional" element={<Traditional />} />
          <Route path="/career-development" element={<CareerDevelopment />} />
          <Route path="/career-development/resume" element={<Resume />} />
          <Route path="/career-development/interview" element={<Interview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/refundpolicy" element={<RefundPolicy />} />
          <Route path="/join-us" element={<JoinNowForm />} />
          <Route path="/dragdropquiz" element={<DragDropQuiz />} />
          
          {/* Catch-All Redirect: If no route matches, show the Hero component */}
          <Route path="*" element={<Hero />} />
        </Routes>

        {/* WhatsApp Chat Button (Visible on all pages) */}
        <WhatsAppChat />
      </Router>
    </div>
  );
}

export default App; // Exporting app 
