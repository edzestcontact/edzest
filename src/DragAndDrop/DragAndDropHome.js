import React from "react";
import { BrowserRouter } from "react-router-dom"; // Wrap the app for routing
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DragDropQuiz from '../DragAndDrop/DragDropQuiz';

function DragAndDropHome() {
  return (
    <BrowserRouter> {/* Wrap the entire app */}
      <div className="DragAndDropHome1">
        <Navbar /> {/* Header */}
       
        <DragDropQuiz /> {/* Main Content */}
        <Footer /> {/* Footer */}
      </div>
    </BrowserRouter>
  );
}

export default DragAndDropHome;
