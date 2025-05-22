// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
// import React, { useState } from "react"; // Import React library
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom"; // Import routing components
// import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap layout components

// // ✅ Importing All Main Components
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Banner from "./components/Banner";
// import Benefit from "./components/Benefit";
// import Preparation from "./components/Preparation";
// import Whychooseus from "./components/Whychooseus";
// import Testimonial from "./components/Testimonial";
// import Contact from "./components/Contact";
// import Training from "./components/Training";
// import MockExam from "./components/MockExam";
// import About from "./components/About";
// import Footer from "./components/Footer";
// import Login from "./components/Login";
// import Contactus from "./components/Contactus";
// import PrivacyPolicy from "./components/Privacy Policy";
// import TermsAndConditions from "./components/TermsAndConditions";
// import RefundPolicy from "./components/Refund Policy";
// import JoinNowForm from "./components/Joinnow";
// import WhatsAppChat from "./components/Whatsappchat";
// import FlashMain from "./FlashcardApp/FlashMain";

// // ✅ Importing Services & Workshop Components
// import PMPExamPrep from "./components/Services/TrainingServices/PMPExamPrep";
// import Workshop from "./components/Services/Workshop/Workshop";
// import ManagingRisk from "./components/Services/Workshop/ManagingRisk";
// import AgileApproach from "./components/Services/Workshop/AgileApproach";
// import Traditional from "./components/Services/Workshop/Traditional";
// import CareerDevelopment from "./components/Services/CareerDevelopment/CareerDevelopment";
// import Resume from "./components/Services/CareerDevelopment/Resume";
// import Interview from "./components/Services/CareerDevelopment/Interview";
// import TrainingServices from "./components/Services/TrainingServices/TrainingServices";
// import ProjectFoundation from "./components/Services/TrainingServices/ProjectFoundation";

// // ✅ Importing Documentation Components
// import Docs from "./components/ProjectDocs/pages/Docs";
// import Content from "./components/ProjectDocs/pages/Content";
// import DocsWrapper from "./components/ProjectDocs/pages/ContentWrapper";

// // ✅ Importing Drag & Drop Quiz Components (Corrected)
// import InstructionPage from "./DragAndDropQuiz/Components/InstructionPage";
// import DragAndDropQuiz1 from "./DragAndDropQuiz/Set1/DragAndDropQuiz1";
// import DragAndDropQuiz2 from "./DragAndDropQuiz/Set2/DragAndDropQuiz2";
// import DragAndDropQuiz3 from "./DragAndDropQuiz/Set3/DragAndDropQuiz3";

// function App() {
//   const [quizStarted, setQuizStarted] = useState(false);

//   const startQuiz = () => {
//     setQuizStarted(true);
//   };

//   return (
//     <div className="App">
//       <Router>
//         {/* ✅ Navbar for all pages */}
//         <Navbar />

//         {/* ✅ Define Routes */}
//         <Routes>
//           {/* ✅ Home Page */}
//           <Route
//             path="/"
//             element={
//               <>
//                 <Hero />
//                 <Banner />
//                 <Benefit />
//                 <Preparation />
//                 <Whychooseus />
//                 <Testimonial />
//                 <Contact />
//                 <Footer />
//               </>
//             }
//           />

//           {/* ✅ Website Pages */}
//           <Route path="/training" element={<Training />} />
//           <Route path="/mock-exam" element={<MockExam />} />
//           <Route path="/flashcards" element={<FlashMain />} />
//           <Route path="/agile" element={<FlashMain />} />
//           {/* <Route path="/domain" element={<FlashMain />} /> */}
//           <Route path="/process-groups" element={<FlashMain />} />
//           <Route
//             path="/project-management-foundation"
//             element={<FlashMain />}
//           />
//           <Route path="/knowledge-area" element={<FlashMain />} />
//           <Route path="/performance-domain" element={<FlashMain />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contactus />} />
//           <Route path="/training-services" element={<TrainingServices />} />
//           <Route path="/project-foundation" element={<ProjectFoundation />} />
//           <Route path="/pmp-exam-prep" element={<PMPExamPrep />} />
//           <Route path="/workshop" element={<Workshop />} />
//           <Route path="/workshop/managing-risk" element={<ManagingRisk />} />
//           <Route path="/workshop/agile-approach" element={<AgileApproach />} />
//           <Route path="/workshop/traditional" element={<Traditional />} />
//           <Route path="/career-development" element={<CareerDevelopment />} />
//           <Route path="/career-development/resume" element={<Resume />} />
//           <Route path="/career-development/interview" element={<Interview />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/privacypolicy" element={<PrivacyPolicy />} />
//           <Route path="/termsandconditions" element={<TermsAndConditions />} />
//           <Route path="/refundpolicy" element={<RefundPolicy />} />
//           <Route path="/join-us" element={<JoinNowForm />} />

//           {/* ✅ Drag & Drop Quiz Routes */}
//           <Route
//             path="/drag-and-drop"
//             element={<InstructionPage startQuiz={startQuiz} />}
//           />
//           <Route path="/drag-and-drop/set1" element={<DragAndDropQuiz1 />} />
//           <Route path="/drag-and-drop/set2" element={<DragAndDropQuiz2 />} />
//           <Route path="/drag-and-drop/set3" element={<DragAndDropQuiz3 />} />



//           {/* ✅ Project Documentation Pages */}
//           <Route path="/docs/*" element={<Docs />} />
//           <Route path="/docs/:chapterId/:subChapterId" element={<Docs />} />
          


//           {/* ✅ Catch-All Redirect */}
//           <Route path="*" element={<Hero />} />
//         </Routes>

//         {/* ✅ WhatsApp Chat Button */}
//         <WhatsAppChat />
//       </Router>
//     </div>
//   );
// }

// export default App;





import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React, { useState } from "react"; // Import React library
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; // Import routing components
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap layout components

// ✅ Importing All Main Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Benefit from "./components/Benefit";
import Preparation from "./components/Preparation";
import Whychooseus from "./components/Whychooseus";
import Testimonial from "./components/Testimonial";
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
import CreateEvent from "./components/Admin/CreateEvent";
import Acp from "./components/Acp";
import Pmp from "./components/Pmp";

// ✅ Importing Services & Workshop Components
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
import Events from "./components/Events/Events";

// ✅ Importing Documentation Components
import Docs from "./components/ProjectDocs/pages/Docs";
import Content from "./components/ProjectDocs/pages/Content";
import DocsWrapper from "./components/ProjectDocs/pages/ContentWrapper";

// ✅ Importing Drag & Drop Quiz Components (Corrected)
import InstructionPage from "./DragAndDropQuiz/Components/InstructionPage";
import DragAndDropQuiz1 from "./DragAndDropQuiz/Set1/DragAndDropQuiz1";
import DragAndDropQuiz2 from "./DragAndDropQuiz/Set2/DragAndDropQuiz2";
import DragAndDropQuiz3 from "./DragAndDropQuiz/Set3/DragAndDropQuiz3";

// ✅ Import PdfDocs for PDF management
import PdfDocs from "./components/PdfDocs";  // Import PdfDocs component

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="App">
      <Router>
        {/* ✅ Navbar for all pages */}
        <Navbar />

        {/* ✅ Define Routes */}
        <Routes>
          {/* ✅ Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Banner />
                <Benefit />
                <Preparation />
                <Whychooseus />
                <Testimonial />
                <Contact />
                <Footer />
              </>
            }
          />

          {/* ✅ Website Pages */}
          <Route path="/training" element={<Training />} />
          <Route path="/mock-exam" element={<MockExam />} />
          <Route path="/flashcards" element={<FlashMain />} />
          <Route path="/agile" element={<FlashMain />} />
          <Route path="/acp" element={<Acp />} />
          <Route path="/pmp" element={<Pmp />} />
          {/* <Route path="/domain" element={<FlashMain />} /> */}
          <Route path="/process-groups" element={<FlashMain />} />
          <Route
            path="/project-management-foundation"
            element={<FlashMain />}
          />
          <Route path="/knowledge-area" element={<FlashMain />} />
          <Route path="/performance-domain" element={<FlashMain />} />
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
          <Route path="/create-event" element={<CreateEvent />} />
           <Route path="/events" element={<Events />} />

          {/* ✅ PdfDocs Page for Uploading and Downloading PDFs */}
          <Route path="/pdf-docs" element={<PdfDocs />} /> {/* New Route for PdfDocs */}

          {/* ✅ Drag & Drop Quiz Routes */}
          <Route
            path="/drag-and-drop"
            element={<InstructionPage startQuiz={startQuiz} />}
          />
          <Route path="/drag-and-drop/set1" element={<DragAndDropQuiz1 />} />
          <Route path="/drag-and-drop/set2" element={<DragAndDropQuiz2 />} />
          <Route path="/drag-and-drop/set3" element={<DragAndDropQuiz3 />} />

          {/* ✅ Project Documentation Pages */}
          <Route path="/docs/*" element={<Docs />} />
          <Route path="/docs/:chapterId/:subChapterId" element={<Docs />} />

          {/* ✅ Catch-All Redirect */}
          <Route path="*" element={<Hero />} />
        </Routes>

        {/* ✅ WhatsApp Chat Button */}
        <WhatsAppChat />
      </Router>
    </div>
  );
}

export default App;
