// import React, { useState } from "react";
// import { ListGroup, Offcanvas, Col } from "react-bootstrap";
// import useWindowSize from "./useWindowSize";

// const ProjectSidebar = ({ show, handleClose, contentData, onSelectChapter }) => {
//   const screenWidth = useWindowSize();
//   const isMobile = screenWidth < 992;

//   const [selectedChapter, setSelectedChapter] = useState(null);

//   const handleChapterClick = (chapter) => {
//     setSelectedChapter(chapter);
//     onSelectChapter(chapter.id);
//   };

//   return (
//     <>
//       {!isMobile ? (
//         <Col lg={3} md={4} className="border-end sidebar pt-6 d-flex flex-column vh-100">
//           <ListGroup className="overflow-auto" style = {{fontWeight : "500"}}>
//             {contentData.map((chapter) => (
//               <ListGroup.Item
//                 key={chapter.id}
//                 action
//                 active={selectedChapter?.id === chapter.id}
//                 onClick={() => handleChapterClick(chapter)}
//               >
//                 {chapter.title}
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </Col>
//       ) : (
//         <Offcanvas show={show} style = {{width : "80%"}} onHide={handleClose}>
//           <Offcanvas.Body>
//             <ListGroup>
//               {contentData.map((chapter) => (
//                 <ListGroup.Item
//                   key={chapter.id}
//                   action
//                   onClick={() => handleChapterClick(chapter)}
//                 >
//                   {chapter.title}
//                 </ListGroup.Item>
//               ))}
//             </ListGroup>
//           </Offcanvas.Body>
//         </Offcanvas>
//       )}
//     </>
//   );
// };

// export default ProjectSidebar;


import React, { useState } from "react";
import { ListGroup, Offcanvas, Col } from "react-bootstrap";
import useWindowSize from "./useWindowSize";
import { useNavigate } from "react-router-dom";


const ProjectSidebar = ({ show, handleClose, contentData, onSelectChapter, onSelectSection }) => {
  const screenWidth = useWindowSize();
  const isMobile = screenWidth < 992;

  const [expandedChapters, setExpandedChapters] = useState({});
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChapterClick = (chapter) => {
    setSelectedChapter(chapter);
    onSelectChapter(chapter.id);

    // Toggle expand/collapse state
    setExpandedChapters((prev) => ({
      ...prev,
      [chapter.id]: !prev[chapter.id],
    }));
  };

  const handleSectionClick = (chapter, section) => {
    console.log("Clicked Section:", { chapter, section }); // ✅ Debugging Log
  
    setSelectedChapter(chapter);
    setSelectedSection(section);
    onSelectChapter(chapter.id);
  
    if (onSelectSection) {
      onSelectSection(section);
    }
  
    // ✅ Ensure URL updates correctly
    if (section.id) {
      navigate(`/docs/${chapter.id}/${section.id}`);
    } else {
      navigate(`/docs/${chapter.id}`);
    }
    
  };
  
  return (
    <>
      {!isMobile ? (
        <Col lg={3} md={4} className="border-end sidebar pt-6 d-flex flex-column vh-100">
          <ListGroup className="overflow-auto" style={{ fontWeight: "500" }}>
            {contentData.map((chapter) => (
              <div key={chapter.id}>
                <ListGroup.Item
                  action
                  active={selectedChapter?.id === chapter.id}
                  onClick={() => handleChapterClick(chapter)}
                  style={{ cursor: "pointer" }}
                >
                  {chapter.title}
                </ListGroup.Item>

                {expandedChapters[chapter.id] && chapter.sections && (
                  <ListGroup className="ms-3">
                    {chapter.sections.map((section) => (
                      <ListGroup.Item
                        key={section.id}
                        action
                        active={selectedSection?.id === section.id}
                        onClick={() => handleSectionClick(chapter, section)}
                        style={{ fontSize: "14px", paddingLeft: "20px" }}
                      >
                        {section.title}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </div>
            ))}
          </ListGroup>
        </Col>
      ) : (
        <Offcanvas show={show} style={{ width: "80%" }} onHide={handleClose}>
          <Offcanvas.Body>
            <ListGroup>
              {contentData.map((chapter) => (
                <div key={chapter.id}>
                  <ListGroup.Item action onClick={() => handleChapterClick(chapter)}>
                    {chapter.title}
                  </ListGroup.Item>
                  {expandedChapters[chapter.id] && chapter.sections && (
                    <ListGroup className="ms-3">
                      {chapter.sections.map((section) => (
                        <ListGroup.Item
                          key={section.id}
                          action
                          active={selectedSection?.id === section.id}
                          onClick={() => handleSectionClick(chapter, section)}
                        >
                          {section.title}
                        </ListGroup.Item>
                      ))}
                    </ListGroup>
                  )}
                </div>
              ))}
            </ListGroup>
          </Offcanvas.Body>
        </Offcanvas>
      )}
    </>
  );
};

export default ProjectSidebar;
