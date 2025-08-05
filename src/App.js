/* global gtag */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";

import Benefit from "./components/Benefit";
import Preparation from "./components/Preparation";
// import Whychooseus from "./components/Whychooseus";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Training from "./components/Training";
import MockExam from "./components/MockExam";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Contactus from "./components/Contactus";
import CorporateTraining from "./components/CorporateTraining";
import PrivacyPolicy from "./components/Privacy Policy";
import TermsAndConditions from "./components/TermsAndConditions";
import RefundPolicy from "./components/Refund Policy";
import JoinNowForm from "./components/Joinnow";
import WhatsAppChat from "./components/Whatsappchat";
import FlashMain from "./FlashcardApp/FlashMain";
import Acp from "./components/Acp";
import Pmp from "./components/Pmp";


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
import PdfDocs from "./components/PdfDocs";
import Docs from "./components/ProjectDocs/pages/Docs";
import PDUs from "./components/pages/PDUs"
import EdzestBlogs from './components/pages/EdzestBlogs.js';

import InstructionPage from "./DragAndDropQuiz/Components/InstructionPage";
import DragAndDropQuiz1 from "./DragAndDropQuiz/Set1/DragAndDropQuiz1";
import DragAndDropQuiz2 from "./DragAndDropQuiz/Set2/DragAndDropQuiz2";
import DragAndDropQuiz3 from "./DragAndDropQuiz/Set3/DragAndDropQuiz3";

import CreateEvent from "./components/events/CreateEvent";
import EventRegistrationPage from "./components/pages/EventRegistrationPage";
import EventsPage from "./components/pages/EventsPage";
import CreateEventPage from "./components/pages/CreateEventPage";


// import AdminBlogCreate from "./components/pages/AdminBlogCreate.js"
import AdminBlogCreate from "../src/components/pages/AdminBlogCreate.js"

// ✅ PowerBI Tracking
import { trackPageView, trackBeforeUnload } from "./analyticsTracker";
import { Blocks } from "lucide-react";

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  // ✅ Google Analytics Time on Page
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof gtag === "function") {
        gtag("event", "time_on_page_60s", {
          event_category: "engagement",
          event_label: "User stayed 60 seconds",
        });
      }
    }, 60000);
    return () => clearTimeout(timeout);
  }, []);

  // ✅ Google Analytics Scroll Tracking
  useEffect(() => {
    const fired = { 25: false, 50: false, 75: false, 100: false };
    const handleScroll = () => {
      const scrollTop = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrolledPercent = Math.round((scrollTop / docHeight) * 100);
      [25, 50, 75, 100].forEach((threshold) => {
        if (scrolledPercent >= threshold && !fired[threshold]) {
          fired[threshold] = true;
          if (typeof gtag === "function") {
            gtag("event", `scroll_${threshold}_percent`, {
              event_category: "scroll_depth",
              event_label: `Scrolled ${threshold}% of page`,
            });
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ PowerBI Tracking – page view + time spent
  useEffect(() => {
    trackPageView();
    window.addEventListener("beforeunload", trackBeforeUnload);
    return () => window.removeEventListener("beforeunload", trackBeforeUnload);
  }, []);
  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banner />
                <Benefit />
                <Preparation />
                {/* <Whychooseus /> */}
                <Testimonial />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/training" element={<Training />} />
          <Route path="/mock-exam" element={<MockExam />} />
          <Route path="/flashcards" element={<FlashMain />} />
          <Route path="/agile" element={<FlashMain />} />
          <Route path="/acp" element={<Acp />} />
          <Route path="/pmp" element={<Pmp />} />
          <Route path="/process-groups" element={<FlashMain />} />
          <Route path="/project-management-foundation" element={<FlashMain />} />
          <Route path="/knowledge-area" element={<FlashMain />} />
          <Route path="/performance-domain" element={<FlashMain />} />
             <Route path ="/PDUs" element={<PDUs/>}/>
             <Route path = "/PdfDocs" element={<PdfDocs/>}/>
            <Route path="/blogs" element={<EdzestBlogs />} />
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
          <Route path="/corporate-training" element={<CorporateTraining />} />
          <Route path="/adminblogs" element={<AdminBlogCreate/>}/>
          
{/* 
          <Route path ="./adminblogs" element={<AdminBlogCreate/>}/> */}

          {/* ✅ Only one /events route */}
          <Route path="/events" element={<EventsPage />} />

          <Route path="/create-event" element={<CreateEventPage />} />
          <Route path="/register/:eventId" element={<EventRegistrationPage />} />

          <Route path="/drag-and-drop" element={<InstructionPage startQuiz={startQuiz} />} />
          <Route path="/drag-and-drop/set1" element={<DragAndDropQuiz1 />} />
          <Route path="/drag-and-drop/set2" element={<DragAndDropQuiz2 />} />
          <Route path="/drag-and-drop/set3" element={<DragAndDropQuiz3 />} />

          <Route path="/docs/*" element={<Docs />} />
          <Route path="/docs/:chapterId/:subChapterId" element={<Docs />} />

          <Route path="*" element={<Hero />} />
        </Routes>
        <WhatsAppChat />
      </Router>
    </div>
  );
}

export default App;
