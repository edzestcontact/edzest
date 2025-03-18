// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import agileData from "./agileData";
// import domainData from "./domainData";
// import processData from "./processGroupsData";
// import Flashcard from "./Flashcard";
// import Controls from "./Controls";
// import ProgressBar from "./ProgressBar";
// import AgileCategories from "./AgileCategories";
// import DomainCategories from "./DomainCategories";
// import ProcessCategories from "./ProcessCategories";
// import FlashNavbar from "./FlashNavbar";
// import Footer from "../components/Footer";
// import { Nav } from "react-bootstrap";
// import ProjectManagementCategories from "./ProjectManagementCategories";

// const FlashMain = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [isFlipped, setIsFlipped] = useState(false)

//   const [selectedCategory, setSelectedCategory] = useState(
//     localStorage.getItem("selectedCategory") || null
//   );
//   const [currentCardIndex, setCurrentCardIndex] = useState(
//     parseInt(localStorage.getItem("currentCardIndex")) || 0
//   );
//   const [answeredCards, setAnsweredCards] = useState(
//     JSON.parse(localStorage.getItem("answeredCards")) || {}
//   );
//   const [score, setScore] = useState(
//     parseInt(localStorage.getItem("score")) || 0
//   );
//   const [progress, setProgress] = useState(
//     parseFloat(localStorage.getItem("progress")) || 0
//   );
//   const [selectedType, setSelectedType] = useState(
//     localStorage.getItem("selectedType") || null
//   );

//   const agileCategories = [...new Set(agileData.map((item) => item.category))];
//   const domainCategories = [...new Set(domainData.map((item) => item.category))];
//   const processCategories = [...new Set(processData.map((item) => item.category))];

//   const filteredFlashcards =
//   selectedType === "Agile"
//     ? agileData.filter((card) => card.category === selectedCategory)
//     : selectedType === "Domain"
//     ? domainData.filter((card) => card.category === selectedCategory)
//     : processData.filter((card) => card.category === selectedCategory);

// // ✅ Handle URL Query Params
// useEffect(() => {
//   const params = new URLSearchParams(location.search);
//   const category = params.get("category");
//   const type = params.get("type");

//   if (location.pathname === "/flashcards" && !category) {
//     setSelectedType(null);
//     setSelectedCategory(null);
//   }
//   else if (category && type) {
//     setSelectedType(type);
//     setSelectedCategory(category);
//   }
//   else if (location.pathname.includes("/agile")) {
//     setSelectedType("Agile");
//     setSelectedCategory(null);
//   }
//   else if (location.pathname.includes("/domain")) {
//     setSelectedType("Domain");
//     setSelectedCategory(null);
//   }
//   else if (
//     location.pathname.includes("/flashcards/process-groups") ||
//     location.pathname === "/process-groups"    // ✅ Added condition for /process-groups
//   ) {
//     setSelectedType("Process");
//     setSelectedCategory(null);
//   }
// }, [location]);

//   // ✅ Save to localStorage whenever state changes
//   useEffect(() => {
//     localStorage.setItem("selectedCategory", selectedCategory);
//     localStorage.setItem("currentCardIndex", currentCardIndex);
//     localStorage.setItem("answeredCards", JSON.stringify(answeredCards));
//     localStorage.setItem("score", score);
//     localStorage.setItem("progress", progress);
//     localStorage.setItem("selectedType", selectedType);
//   }, [selectedCategory, currentCardIndex, answeredCards, score, progress, selectedType]);

//   // ✅ Progress Calculation
//   useEffect(() => {
//     const answeredCount = Object.keys(answeredCards).length;
//     const newProgress = filteredFlashcards.length
//       ? (answeredCount / filteredFlashcards.length) * 100
//       : 0;
//     setProgress(Math.min(newProgress, 100));
//   }, [answeredCards, filteredFlashcards]);

//   const tabs = [
//     { label: "Flashcards", path: "/flashcards" },
//     selectedType && {
//       label: selectedType === "Process" ? "Process-Groups" : selectedType, // ✅ Updated Label
//       path:
//         selectedType === "Process" || selectedType === "Process-Groups"
//           ? "/process-groups"
//           : selectedType === "Agile"
//           ? "/agile"
//           : selectedType === "Domain"
//           ? "/domain"
//           : `/flashcards/${selectedType.toLowerCase()}`,
//     },
//     selectedCategory && {
//       label: selectedCategory,
//       path: `/flashcards?category=${selectedCategory}&type=${selectedType}`,
//     },
//   ].filter(Boolean);

//   // ✅ Improved isActiveTab to handle both pathname and search
//   const isActiveTab = (path) => {
//     const currentPath = location.pathname + location.search;

//     // ✅ Ensure Flashcards is active only for /flashcards (without query params)
//     if (path === "/flashcards") {
//       return location.pathname === "/flashcards" && !location.search;
//     }

//     // ✅ For other tabs, match both pathname and search if applicable
//     return currentPath === path;
//   };

//   // ✅ Navigate only if different from the current path
//   const handleTabClick = (path) => {
//     if (location.pathname + location.search !== path) {
//       navigate(path);
//     }
//   };

//   return (
//     <>
//     <div className="container">
//      <FlashNavbar
//         setScore={setScore}
//         setProgress={setProgress}
//         setCurrentCardIndex={setCurrentCardIndex}
//         setAnsweredCards={setAnsweredCards}
//       />
//       </div>
//      <div className="container text-center">

//      <Nav variant="tabs" style={{ marginBottom: "15px", marginTop:"-40px", }}>
//     {tabs.map((tab, index) => {
//       const tabPath = tab.path || "/flashcards"; // Default path if undefined

//       return (
//         <div key={index} style={{ display: "flex", alignItems: "center" }}>
//           <Nav.Item>
//             <Nav.Link
//               active={isActiveTab(tabPath)} // ✅ Correct active tab detection
//               onClick={() => handleTabClick(tabPath)}
//               style={{
//                 cursor: "pointer",
//                 color: "#4748ac",
//                 fontWeight: isActiveTab(tabPath) ? "bold" : "normal",
//                 borderColor: isActiveTab(tabPath) ? "#4748ac" : "transparent",
//                 outline: "0",
//                 boxShadow: "none",
//               }}
//               tabIndex="-1"
//             >
//               {tab.label}
//             </Nav.Link>
//           </Nav.Item>

//           {/* ">" Symbol Between Tabs */}
//           {index !== tabs.length - 1 && (
//             <span style={{ margin: "0 0", color: "#4748ac", fontWeight: "bold" }}>{">"}</span>
//           )}
//         </div>
//       );
//     })}
//   </Nav>

//         {selectedCategory && <ProgressBar progress={progress} score={score} totalCards={filteredFlashcards.length} />}

//         {/* ✅ Show Main Category Cards */}
//         {!selectedType && (
//         <div className="row d-flex align-items-center justify-content-center gap-3 min-h-[400px]">

// <div
//   className="card col-md-3 col-sm-6 bg-gray-500 transition-transform duration-300 hover:scale-105"
//   style={{ minWidth: "320px", cursor: "pointer", height: "160px", backgroundColor:"#ddd" }}
//   onClick={() => {
//     setSelectedType("Process");
//     navigate("/process-groups");
//   }}
// >
//   <div className="card-body d-flex align-items-center justify-content-center">
//     <h4 className="m-0">Process Groups</h4>
//   </div>
// </div>

// <div
//   className="card col-md-3 col-sm-6 bg-gray-300 transition-transform duration-300 hover:scale-105"
//   style={{ minWidth: "320px", cursor: "pointer", height: "160px", backgroundColor:"#ddd"  }}
//   onClick={() => {
//     setSelectedType("Agile");
//     navigate("/agile");
//   }}
// >
//   <div className="card-body d-flex align-items-center justify-content-center">
//     <h4 className="m-0">Agile Categories</h4>
//   </div>
// </div>

// <div
//   className="card col-md-3 col-sm-6 bg-gray-500 transition-transform duration-300 hover:scale-105"
//   style={{ minWidth: "320px", cursor: "pointer", height: "160px", backgroundColor:"#ddd"  }}
//   onClick={() => {
//     setSelectedType("Domain");
//     navigate("/domain");
//   }}
// >
//   <div className="card-body d-flex align-items-center justify-content-center">
//     <h4 className="m-0">Domain Categories</h4>
//   </div>
// </div>

//        </div>

//         )}

//          {/* ✅ Process Categories (Auto-load when visiting /process-groups) */}
//          {!selectedCategory && selectedType === "Process" && (
//           <ProcessCategories
//             categories={processCategories}
//             onSelectCategory={(category) => {
//               setSelectedCategory(category);
//               setCurrentCardIndex(0);
//               setAnsweredCards({});
//               setScore(0);
//               setProgress(0);
//               navigate(`/flashcards?category=${category}&type=Process`);
//             }}
//             setCurrentCardIndex={setCurrentCardIndex}
//           />
//         )}

//         {/* ✅ Agile Categories (Auto-load when visiting /agile) */}
//         {!selectedCategory && selectedType === "Agile" && (
//           <AgileCategories
//             categories={agileCategories}
//             onSelectCategory={(category) => {
//               setSelectedCategory(category);
//               setCurrentCardIndex(0);
//               setAnsweredCards({});
//               setScore(0);
//               setProgress(0);
//               navigate(`/flashcards?category=${category}&type=Agile`);
//             }}
//             setCurrentCardIndex={setCurrentCardIndex}
//           />
//         )}

//         {/* ✅ Domain Categories (Auto-load when visiting /domain) */}
//         {!selectedCategory && selectedType === "Domain" && (
//           <DomainCategories
//             categories={domainCategories}
//             onSelectCategory={(category) => {
//               setSelectedCategory(category);
//               setCurrentCardIndex(0);
//               setAnsweredCards({});
//               setScore(0);
//               setProgress(0);
//               navigate(`/flashcards?category=${category}&type=Domain`);
//             }}
//             setCurrentCardIndex={setCurrentCardIndex}
//           />
//         )}

//         {/* ✅ Flashcards */}
//         {selectedCategory && (
//           <div>
//             {/* <h3>{selectedCategory} Flashcards</h3> */}
//             <Flashcard
//                 currentCard={filteredFlashcards[currentCardIndex] || filteredFlashcards[0]}
//                 currentCardIndex={currentCardIndex}
//                 setCurrentCardIndex={setCurrentCardIndex}
//                 totalCards={filteredFlashcards.length}
//                 isFlipped={isFlipped}                  // ✅ Pass flip state
//                 setIsFlipped={setIsFlipped}            // ✅ Pass flip state handler
//                 />
//                 <Controls
//                 currentCardIndex={currentCardIndex}
//                 totalCards={filteredFlashcards.length}
//                 answeredCards={answeredCards}
//                 setAnsweredCards={setAnsweredCards}
//                 setCurrentCardIndex={setCurrentCardIndex}
//                 setScore={setScore}
//                 score={score}
//                 setSelectedCategory={setSelectedCategory}
//                 setIsFlipped={setIsFlipped}            // ✅ Pass flip handler to Controls
//                 />
//           </div>
//         )}
//       </div>
//       <Footer />

//     </>
//   );
// };

// export default FlashMain;

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
import ProjectManagementCategories from "./ProjectManagementCategories";
import projectManagementData from "./projectManagementData";
import KnowledgeAreaCategories from "./KnowledgeAreaCategories";
import KnowledegeAreaData from "./KnowledgeAreaData";
import PerformanceDomainCategories from "./PerformanceDomainCategories";
import PerformanceDomainData from "./PerformanceDomainData";

const FlashMain = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isFlipped, setIsFlipped] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [answeredCards, setAnsweredCards] = useState({});
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);

  const agileCategories = [...new Set(agileData.map((item) => item.category))];
  const domainCategories = [
    ...new Set(domainData.map((item) => item.category)),
  ];
  const processCategories = [
    ...new Set(processData.map((item) => item.category)),
  ];
  const projectManagementCategories = [
    ...new Set(projectManagementData.map((item) => item.category)),
  ];
  const knowledgeAreaCategories = [
    ...new Set(KnowledegeAreaData.map((item) => item.category)),
  ];
  const performanceDomainCategories = [
    ...new Set(PerformanceDomainData.map((item) => item.category)),
  ];
  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    const savedType = localStorage.getItem("selectedType");
    const savedIndex = parseInt(localStorage.getItem("currentCardIndex")) || 0;
    const savedScore = parseInt(localStorage.getItem("score")) || 0;
    const savedProgress = parseFloat(localStorage.getItem("progress")) || 0;
    const savedAnsweredCards =
      JSON.parse(localStorage.getItem("answeredCards")) || {};

    setSelectedCategory(savedCategory);
    setSelectedType(savedType);
    setCurrentCardIndex(savedIndex);
    setScore(savedScore);
    setProgress(savedProgress);
    setAnsweredCards(savedAnsweredCards);
  }, []);

  const filteredFlashcards =
    selectedType === "Agile"
      ? agileData.filter((card) => card.category.includes(selectedCategory))
      : selectedType === "Domain"
      ? domainData.filter((card) => card.category === selectedCategory)
      : selectedType === "Project Management Foundation"
      ? projectManagementData.filter((card) =>
          card.category.includes(selectedCategory)
        )
      : selectedType === "Knowledge Area" // ✅ Corrected spelling
      ? KnowledegeAreaData.filter((card) =>
          card.category.includes(selectedCategory)
        ) // ✅ Ensured filtering consistency
      : selectedType === "Performance Domain"
      ? PerformanceDomainData.filter((card) =>
          card.category.includes(selectedCategory)
        ) // ✅ Ensured consistency
      : processData.filter((card) => card.category.includes(selectedCategory));

  // ✅ Handle URL Query Params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category")
      ? decodeURIComponent(params.get("category"))
      : null;
    const type = params.get("type")
      ? decodeURIComponent(params.get("type"))
      : null;

    if (location.pathname === "/flashcards" && !category && !type) {
      setSelectedType(null);
      setSelectedCategory(null);
    } else {
      setSelectedType(type || null);
      setSelectedCategory(category || null);
    }

    if (location.pathname.includes("/agile")) {
      setSelectedType("Agile");
      setSelectedCategory(null);
    } else if (location.pathname.includes("/domain")) {
      setSelectedType("Domain");
      setSelectedCategory(null);
    } else if (
      location.pathname.includes("/flashcards/process-groups") ||
      location.pathname === "/process-groups"
    ) {
      setSelectedType("Process");
      setSelectedCategory(null);
    } else if (location.pathname.includes("/project-management")) {
      setSelectedType("Project Management Foundation");
      setSelectedCategory(null);
    } else if (location.pathname.includes("/knowledge-area")) {
      // ✅ Fixed spelling
      setSelectedType("Knowledge Area");
      setSelectedCategory(null);
    } else if (location.pathname.includes("/performance-domain")) {
      setSelectedType("Performance Domain");
      setSelectedCategory(null);
    }
  }, [location]);

  console.log("Selected Type:", selectedType);
  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Flashcards:", filteredFlashcards);

  console.log("Process Data:", processData);
  console.log(
    "Available Categories:",
    processData.map((card) => card.category)
  );
  console.log("Selected Type:", selectedType);
  console.log("Selected Category:", selectedCategory);
  console.log("Filtered Flashcards:", filteredFlashcards);

  // ✅ Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("selectedCategory", selectedCategory);
    localStorage.setItem("selectedType", selectedType);
    localStorage.setItem("currentCardIndex", currentCardIndex);
    localStorage.setItem("answeredCards", JSON.stringify(answeredCards));
    localStorage.setItem("score", score);
    localStorage.setItem("progress", progress);
  }, [selectedCategory, selectedType, currentCardIndex, answeredCards, score, progress]);

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
      label:
        selectedType === "Process"
          ? "Process-Groups"
          : selectedType === "ProjectManagement"
          ? "Project Management"
          : selectedType === "Knowledege Area"
          ? "Knowledge Area" // ✅ Fixed label formatting
          : selectedType,
      path:
        selectedType === "Process" || selectedType === "Process-Groups"
          ? "/process-groups"
          : selectedType === "Agile"
          ? "/agile"
          : selectedType === "Domain"
          ? "/domain"
          : selectedType === "Project Management Foundation"
          ? "/project-management-foundation"
          : selectedType === "Knowledge Area"
          ? "/knowledge-area" // ✅ Fixed path
          : selectedType === "Performance Domain"
          ? "/performance-domain" // ✅ Fixed path
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
        <Nav
          variant="tabs"
          style={{ marginBottom: "15px", marginTop: "-40px" }}
        >
          {tabs.map((tab, index) => {
            const tabPath = tab.path || "/flashcards"; // Default path if undefined

            return (
              <div
                key={index}
                style={{ display: "flex", alignItems: "center" }}
              >
                <Nav.Item>
                  <Nav.Link
                    active={isActiveTab(tabPath)} // ✅ Correct active tab detection
                    onClick={() => handleTabClick(tabPath)}
                    style={{
                      cursor: "pointer",
                      color: "#4748ac",
                      fontWeight: isActiveTab(tabPath) ? "bold" : "normal",
                      borderColor: isActiveTab(tabPath)
                        ? "#4748ac"
                        : "transparent",
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
                  <span
                    style={{
                      margin: "0 0",
                      color: "#4748ac",
                      fontWeight: "bold",
                    }}
                  >
                    {">"}
                  </span>
                )}
              </div>
            );
          })}
        </Nav>

        {selectedCategory && (
  <ProgressBar
    progress={progress}
    score={score}
    totalCards={filteredFlashcards.length}
  />
)}

        {/* ✅ Show Main Category Cards */}
        {!selectedType && (
          <div className="row d-flex align-items-center justify-content-center gap-3 min-h-[400px]">
            <div
              className="card col-md-3 col-sm-6 bg-gray-500 transition-transform duration-300 hover:scale-105"
              style={{
                minWidth: "320px",
                cursor: "pointer",
                height: "160px",
                backgroundColor: "#ddd",
              }}
              onClick={() => {
                setSelectedType("Process");
                navigate("/process-groups");
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="m-0">Process Groups</h4>
              </div>
            </div>

            <div
              className="card col-md-3 col-sm-6 bg-gray-300 transition-transform duration-300 hover:scale-105"
              style={{
                minWidth: "320px",
                cursor: "pointer",
                height: "160px",
                backgroundColor: "#ddd",
              }}
              onClick={() => {
                setSelectedType("Agile");
                navigate("/agile");
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="m-0">Agile Categories</h4>
              </div>
            </div>

            {/* <div
              className="card col-md-3 col-sm-6 bg-gray-500 transition-transform duration-300 hover:scale-105"
              style={{
                minWidth: "320px",
                cursor: "pointer",
                height: "160px",
                backgroundColor: "#ddd",
              }}
              onClick={() => {
                setSelectedType("Domain");
                navigate("/domain");
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="m-0">Domain Categories</h4>
              </div>
            </div> */}

            <div
              className="card col-md-3 col-sm-6 bg-gray-500 transition-transform duration-300 hover:scale-105"
              style={{
                minWidth: "320px",
                cursor: "pointer",
                height: "160px",
                backgroundColor: "#ddd",
              }}
              onClick={() => {
                setSelectedType("Knowledge Area");
                navigate("/knowledge-area");
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="m-0">Knowledge Area</h4>
              </div>
            </div>
            <div
              className="card col-md-3 col-sm-6 bg-gray-500 transition-transform duration-300 hover:scale-105"
              style={{
                minWidth: "320px",
                cursor: "pointer",
                height: "160px",
                backgroundColor: "#ddd",
              }}
              onClick={() => {
                setSelectedType("Project Management Foundation");
                navigate("/project-management-foundation");
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="m-0">Project Management Foundation</h4>
              </div>
            </div>
            <div
              className="card col-md-3 col-sm-6 bg-gray-500 transition-transform duration-300 hover:scale-105"
              style={{
                minWidth: "320px",
                cursor: "pointer",
                height: "160px",
                backgroundColor: "#ddd",
              }}
              onClick={() => {
                setSelectedType("Performance Domain");
                navigate("/performance-domain");
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h4 className="m-0">Performance Domain</h4>
              </div>
            </div>
          </div>
        )}

        {/* ✅ Process Categories (Auto-load when visiting /process-groups) */}
        {!selectedCategory && selectedType === "Process" && (
          <>
            {console.log(
              "ProcessCategories rendering with categories:",
              processCategories
            )}
            <ProcessCategories
              categories={processCategories}
              onSelectCategory={(category) => {
                console.log("Selected Category:", category); // Debugging
                setSelectedCategory(category);
                setCurrentCardIndex(0);
                setAnsweredCards({});
                setScore(0);
                setProgress(0);
                navigate(`/flashcards?category=${category}&type=Process`);
              }}
              setCurrentCardIndex={setCurrentCardIndex}
            />
          </>
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
        {/* {!selectedCategory && selectedType === "Domain" && (
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
        )} */}

        {!selectedCategory &&
          selectedType === "Project Management Foundation" && (
            <ProjectManagementCategories
              categories={projectManagementCategories}
              onSelectCategory={(category) => {
                setSelectedCategory(category);
                setCurrentCardIndex(0);
                setAnsweredCards({});
                setScore(0);
                setProgress(0);
                navigate(
                  `/flashcards?category=${category}&type=Project Management Foundation`
                );
              }}
              setCurrentCardIndex={setCurrentCardIndex}
            />
          )}

        {!selectedCategory && selectedType === "Knowledge Area" && (
          <KnowledgeAreaCategories
            categories={knowledgeAreaCategories} // ✅ Fixed incorrect variable name
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setCurrentCardIndex(0);
              setAnsweredCards({});
              setScore(0);
              setProgress(0);
              navigate(`/flashcards?category=${category}&type=Knowledge Area`);
            }}
            setCurrentCardIndex={setCurrentCardIndex}
          />
        )}

        {!selectedCategory && selectedType === "Performance Domain" && (
          <PerformanceDomainCategories
            categories={performanceDomainCategories} // ✅ Fixed incorrect variable name
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setCurrentCardIndex(0);
              setAnsweredCards({});
              setScore(0);
              setProgress(0);
              navigate(
                `/flashcards?category=${category}&type=Performance Domain`
              );
            }}
            setCurrentCardIndex={setCurrentCardIndex}
          />
        )}

        {/* ✅ Flashcards */}
        {selectedCategory && (
          <div>
            {/* <h3>{selectedCategory} Flashcards</h3> */}
            <Flashcard
              currentCard={
                filteredFlashcards[currentCardIndex] || filteredFlashcards[0]
              }
              currentCardIndex={currentCardIndex}
              setCurrentCardIndex={setCurrentCardIndex}
              totalCards={filteredFlashcards.length}
              isFlipped={isFlipped} // ✅ Pass flip state
              setIsFlipped={setIsFlipped} // ✅ Pass flip state handler
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
              setIsFlipped={setIsFlipped} // ✅ Pass flip handler to Controls
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FlashMain;



