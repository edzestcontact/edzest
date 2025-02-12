
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import agileData from "./agileData";
import domainData from "./domainData";
import processData from "./processGroupsData";
import Flashcard from "./Flashcard";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import AgileCategories from "./AgileCategories";
import DomainCategories from "./DomainCategories";
import ProcessCategories from "./ProcessCategories";
import FlashNavbar from "./FlashNavbar";
import Footer from "../components/Footer";
import { Nav } from "react-bootstrap";

const FlashMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFlipped, setIsFlipped] = useState(false)


  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || null
  );
  const [currentCardIndex, setCurrentCardIndex] = useState(
    parseInt(localStorage.getItem("currentCardIndex")) || 0
  );
  const [answeredCards, setAnsweredCards] = useState(
    JSON.parse(localStorage.getItem("answeredCards")) || {}
  );
  const [score, setScore] = useState(
    parseInt(localStorage.getItem("score")) || 0
  );
  const [progress, setProgress] = useState(
    parseFloat(localStorage.getItem("progress")) || 0
  );
  const [selectedType, setSelectedType] = useState(
    localStorage.getItem("selectedType") || null
  );

  const agileCategories = [...new Set(agileData.map((item) => item.category))];
  const domainCategories = [...new Set(domainData.map((item) => item.category))];
  const processCategories = [...new Set(processData.map((item) => item.category))];

  const filteredFlashcards =
  selectedType === "Agile"
    ? agileData.filter((card) => card.category === selectedCategory)
    : selectedType === "Domain"
    ? domainData.filter((card) => card.category === selectedCategory)
    : processData.filter((card) => card.category === selectedCategory);

// ✅ Handle URL Query Params
useEffect(() => {
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const type = params.get("type");

  if (location.pathname === "/flashcards" && !category) {
    setSelectedType(null);
    setSelectedCategory(null);
  } 
  else if (category && type) {
    setSelectedType(type);
    setSelectedCategory(category);
  } 
  else if (location.pathname.includes("/agile")) {
    setSelectedType("Agile");
    setSelectedCategory(null);
  } 
  else if (location.pathname.includes("/domain")) {
    setSelectedType("Domain");
    setSelectedCategory(null);
  } 
  else if (
    location.pathname.includes("/flashcards/process-groups") || 
    location.pathname === "/process-groups"    // ✅ Added condition for /process-groups
  ) {
    setSelectedType("Process");
    setSelectedCategory(null);
  }
}, [location]);




  // ✅ Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("currentCardIndex", currentCardIndex);
    localStorage.setItem("answeredCards", JSON.stringify(answeredCards));
    localStorage.setItem("score", score);
    localStorage.setItem("progress", progress);
    localStorage.setItem("selectedType", selectedType);
  }, [selectedCategory, currentCardIndex, answeredCards, score, progress, selectedType]);

  // ✅ Progress Calculation
  useEffect(() => {
    const answeredCount = Object.keys(answeredCards).length;
    const newProgress = filteredFlashcards.length
      ? (answeredCount / filteredFlashcards.length) * 100
      : 0;
    setProgress(Math.min(newProgress, 100));
  }, [answeredCards, filteredFlashcards]);





  const tabs = [
    { label: "Flashcards", path: "/flashcards" },
    selectedType && {
      label: selectedType === "Process" ? "Process-Groups" : selectedType, // ✅ Updated Label
      path:
        selectedType === "Process" || selectedType === "Process-Groups"
          ? "/process-groups"
          : selectedType === "Agile"
          ? "/agile"
          : selectedType === "Domain"
          ? "/domain"
          : `/flashcards/${selectedType.toLowerCase()}`,
    },
    selectedCategory && {
      label: selectedCategory,
      path: `/flashcards?category=${selectedCategory}&type=${selectedType}`,
    },
  ].filter(Boolean);
  
  
  // ✅ Improved isActiveTab to handle both pathname and search
  const isActiveTab = (path) => {
    const currentPath = location.pathname + location.search;
  
    // ✅ Ensure Flashcards is active only for /flashcards (without query params)
    if (path === "/flashcards") {
      return location.pathname === "/flashcards" && !location.search;
    }
  
    // ✅ For other tabs, match both pathname and search if applicable
    return currentPath === path;
  };
  
  
  // ✅ Navigate only if different from the current path
  const handleTabClick = (path) => {
    if (location.pathname + location.search !== path) {
      navigate(path);
    }
  };
  

  
  

  return (
    <>
    <div className="container">
     <FlashNavbar
        setScore={setScore}
        setProgress={setProgress}
        setCurrentCardIndex={setCurrentCardIndex}
        setAnsweredCards={setAnsweredCards}
      />
      </div>
     <div className="container text-center">
     
     <Nav variant="tabs" style={{ marginBottom: "15px", marginTop:"-40px", }}>
    {tabs.map((tab, index) => {
      const tabPath = tab.path || "/flashcards"; // Default path if undefined

      return (
        <div key={index} style={{ display: "flex", alignItems: "center" }}>
          <Nav.Item>
            <Nav.Link
              active={isActiveTab(tabPath)} // ✅ Correct active tab detection
              onClick={() => handleTabClick(tabPath)}
              style={{
                cursor: "pointer",
                color: "#4748ac",
                fontWeight: isActiveTab(tabPath) ? "bold" : "normal",
                borderColor: isActiveTab(tabPath) ? "#4748ac" : "transparent",
                outline: "0",
                boxShadow: "none",
              }}
              tabIndex="-1"
            >
              {tab.label}
            </Nav.Link>
          </Nav.Item>

          {/* ">" Symbol Between Tabs */}
          {index !== tabs.length - 1 && (
            <span style={{ margin: "0 0", color: "#4748ac", fontWeight: "bold" }}>{">"}</span>
          )}
        </div>
      );
    })}
  </Nav>


     
        {selectedCategory && <ProgressBar progress={progress} score={score} totalCards={filteredFlashcards.length} />}

        {/* ✅ Show Main Category Cards */}
        {!selectedType && (
         <div className="row d-flex align-items-center justify-content-center gap-3">

        <div
           className="card col-md-3 col-sm-6"
           style={{ minWidth: "320px", cursor: "pointer", height: "160px" }}
           onClick={() => {
             setSelectedType("Process");
             navigate("/process-groups");
           }}
         >
           <div
             className="card-body d-flex align-items-center justify-content-center" // ✅ Centering text
           >
             <h4 className="m-0">Process Groups</h4> {/* ✅ Remove margin */}
           </div>
         </div>

         <div
           className="card col-md-3 col-sm-6"
           style={{ minWidth: "320px", cursor: "pointer", height: "160px" }}
           onClick={() => {
             setSelectedType("Agile");
             navigate("/agile");
           }}
         >
           <div
             className="card-body d-flex align-items-center justify-content-center" // ✅ Centering text
           >
             <h4 className="m-0">Agile Categories</h4> {/* ✅ Remove margin for perfect alignment */}
           </div>
         </div>
       
         <div
           className="card col-md-3 col-sm-6"
           style={{ minWidth: "320px", cursor: "pointer", height: "160px" }}
           onClick={() => {
             setSelectedType("Domain");
             navigate("/domain");
           }}
         >
           <div
             className="card-body d-flex align-items-center justify-content-center" // ✅ Centering text
           >
             <h4 className="m-0">Domain Categories</h4> {/* ✅ Remove margin */}
           </div>
         </div>
       
        
       </div>
       
        )}

         {/* ✅ Process Categories (Auto-load when visiting /process-groups) */}
         {!selectedCategory && selectedType === "Process" && (
          <ProcessCategories
            categories={processCategories}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setCurrentCardIndex(0);
              setAnsweredCards({});
              setScore(0);
              setProgress(0);
              navigate(`/flashcards?category=${category}&type=Process`);
            }}
            setCurrentCardIndex={setCurrentCardIndex}
          />
        )}

        {/* ✅ Agile Categories (Auto-load when visiting /agile) */}
        {!selectedCategory && selectedType === "Agile" && (
          <AgileCategories
            categories={agileCategories}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setCurrentCardIndex(0);
              setAnsweredCards({});
              setScore(0);
              setProgress(0);
              navigate(`/flashcards?category=${category}&type=Agile`);
            }}
            setCurrentCardIndex={setCurrentCardIndex}
          />
        )}

        {/* ✅ Domain Categories (Auto-load when visiting /domain) */}
        {!selectedCategory && selectedType === "Domain" && (
          <DomainCategories
            categories={domainCategories}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setCurrentCardIndex(0);
              setAnsweredCards({});
              setScore(0);
              setProgress(0);
              navigate(`/flashcards?category=${category}&type=Domain`);
            }}
            setCurrentCardIndex={setCurrentCardIndex}
          />
        )}

       

        {/* ✅ Flashcards */}
        {selectedCategory && (
          <div>
            {/* <h3>{selectedCategory} Flashcards</h3> */}
            <Flashcard
                currentCard={filteredFlashcards[currentCardIndex] || filteredFlashcards[0]}
                currentCardIndex={currentCardIndex}
                setCurrentCardIndex={setCurrentCardIndex}
                totalCards={filteredFlashcards.length}
                isFlipped={isFlipped}                  // ✅ Pass flip state
                setIsFlipped={setIsFlipped}            // ✅ Pass flip state handler
                />
                <Controls
                currentCardIndex={currentCardIndex}
                totalCards={filteredFlashcards.length}
                answeredCards={answeredCards}
                setAnsweredCards={setAnsweredCards}
                setCurrentCardIndex={setCurrentCardIndex}
                setScore={setScore}
                score={score}
                setSelectedCategory={setSelectedCategory}
                setIsFlipped={setIsFlipped}            // ✅ Pass flip handler to Controls
                />
          </div>
        )}        
      </div>
      <Footer />

    </>
  );
};

export default FlashMain;



