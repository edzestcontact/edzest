import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProjectNavBar from "../ProjectNavbar";
import ProjectSidebar from "../ProjectSidebar";
import Content from "./Content";
import useWindowSize from "../useWindowSize";

// Function to dynamically import JSON data
const loadContentData = async () => {
  const files = [
    "Chapter1.js",
    "Chapter2.js",
    "Chapter3.js",
    "Chapter4.js",
    "Chapter5.js",
    "Chapter6.js",
    "Chapter7.js",
    "Chapter8.js",
    "Chapter9.js",
    "Chapter10.js",
  ];

  const allData = await Promise.all(
    files.map((file) =>
      import(`../data/${file}`).then((module) => module.default)
    )
  );

  return allData.flat(); // Combine all JSON file contents
};

const Docs = () => {
  const { chapterId, sectionId: rawSectionId } = useParams();
  const sectionId = rawSectionId?.toLowerCase(); // Ensure case-insensitive match
  
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 992;

  const [contentData, setContentData] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    console.log("🔹 Current URL Params:", { chapterId, sectionId }); // ✅ Debugging Log
  
    loadContentData()
      .then((data) => {
        console.log("📜 Loaded Data:", data); // ✅ Debugging Log
  
        setContentData(data);
  
        // Find the chapter by ID
        const chapter = data.find((ch) => ch.id.toString().toLowerCase() === chapterId.toLowerCase());
        console.log("📖 Matched Chapter:", chapter); // ✅ Debugging Log
  
        setSelectedChapter(chapter || null);
  
        if (chapter && sectionId) {
          // Ensure section ID comparison is case-insensitive and trimmed
          const matchedSection = chapter.sections.find(
            (sec) => sec.id.toLowerCase().trim() === sectionId.toLowerCase().trim()
          );
  
          console.log("📑 Matched Section:", matchedSection); // ✅ Debugging Log
          setSelectedSection(matchedSection || null);
  
          if (matchedSection) {
            // 🔥 **Scroll to the section content**
            setTimeout(() => {
              const sectionElement = document.getElementById(matchedSection.id);
              if (sectionElement) {
                console.log("🎯 Scrolling to Section:", matchedSection.id);
                sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
              } else {
                console.warn("⚠️ Section element not found in DOM:", matchedSection.id);
              }
            }, 200);
          }
        } else {
          setSelectedSection(null);
        }
      })
      .catch((error) => {
        console.error("❌ Error loading content data:", error);
      });
  }, [chapterId, sectionId]);
  
  
  
  
  

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  const selectChapter = (chapterId) => {
    const chapter = contentData.find((ch) => ch.id.toString() === chapterId);
    setSelectedChapter(chapter);
    setSelectedSection(null);
    navigate(`/docs/${chapterId}`);
    setShowSidebar(false);
  };

  return (
    <div>
      <ProjectNavBar toggleSidebar={toggleSidebar} />
      <Container fluid>
        <Row className="vh-100">
          {/* Sidebar */}
          <ProjectSidebar
            show={showSidebar}
            handleClose={toggleSidebar}
            contentData={contentData}
            onSelectChapter={selectChapter}
            onSelectSection={setSelectedSection} // Pass this prop
          />

          {/* Main Content */}
          <Col lg={9} md={8} className="p-4 d-flex flex-column">
            <Content
              chapter={selectedChapter}
              selectedSection={selectedSection}
              onSelectSection={setSelectedSection}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Docs;
