// import React,{useRef, useEffect} from "react";
// import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
// import { Element } from "react-scroll";
// import ReactMarkdown from "react-markdown";
// import InThisArticle from "../inThisArticle";

// const NAVBAR_HEIGHT = 56; // Adjust this based on your navbar height

// const Content = ({ chapter, selectedSection, onSelectSection }) => {
//   const contentRef = useRef(null);
//   useEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.scrollTop = 0;
//     }
//   }, [chapter]); // Runs whenever a new chapter is selected
//   if (!chapter)
//     {
//      return (
//       <>
//      <h3 className="text-center mt-4 mb-4">Project Management Documentation</h3>
//      <p>This documentation serves as a comprehensive guide to project management principles, methodologies, frameworks, and best practices. It is designed to help project managers, teams, and stakeholders understand the essential components of successful project execution.</p>
//      <h4>Who Is This Documentation For?</h4>
//      <p><h6>This guide is beneficial for: </h6>
// <br/>

// <strong>Aspiring & Experienced Project Managers</strong> – To refine skills and adopt industry best practices.<br/>
// <strong>Business Leaders & Stakeholders</strong> – To understand project workflows and governance.<br/>
// <strong>Team Members & Contributors</strong> – To align with project goals and methodologies.<br/>
// <strong>Students & Researchers</strong> – To learn about project management concepts and frameworks.</p>

// <h4 style = {{marginTop: "10px"}}>--Select a topic from left hand side</h4>
//      </>
//      )

//     }
      

//   return (
//     <Container fluid style = {{marginTop : "-14px"}}>
//       <Row>
//         {/* Content Section with Separate Scrollbar */}
//         <Col
//           md={9}
//           id="content-scroll-container" // Add this ID
//           className="content-scroll"
//           ref={contentRef} // Attach ref to the scroll container
//           style={{
//             height: `calc(100vh - ${NAVBAR_HEIGHT + 40}px)`, // Added more space for top gap
//             overflowY: "auto",
//             padding: "20px 15px", // Added padding for top and sides
//           }}
//         >
//           {/* Breadcrumb Navigation */}
//           {/* <Breadcrumb className="mb-3">
//             <Breadcrumb.Item onClick={() => onSelectSection(null)} style={{ cursor: "pointer" }}>
//               {chapter.title}
//             </Breadcrumb.Item>
//             {selectedSection && <Breadcrumb.Item active>{selectedSection.title}</Breadcrumb.Item>}
//           </Breadcrumb> */}

//           {/* Main Content Heading */}
//           <h2 className="mb-4">{chapter.title}</h2>

//           {chapter.sections.map((section) => (
//             <Element key={section.id} name={section.id} className="mb-4">
//               <Card className="p-3">
//                 <Card.Body onClick={() => onSelectSection(section)}>
//                   <Card.Title>{section.title}</Card.Title>

//                   {/* Render All Text Fields with Markdown */}
//                   {Object.entries(section).map(([key, value]) => {
//                     if (["id", "title", "image"].includes(key) || !value) return null;

//                     return (
//                       <div
//                         key={key}
//                         className="markdown-content"
//                         style={{
//                           whiteSpace: "pre-wrap",
//                           wordBreak: "break-word",
//                           overflowWrap: "break-word",
//                           maxWidth: "100%",
//                           marginTop: key === "content" ? 0 : "10px",
//                         }}
//                       >
//                         <strong>{key !== "content" && `${key.replace(/_/g, " ")}:`}</strong>
//                         <ReactMarkdown>{value}</ReactMarkdown>
//                       </div>
//                     );
//                   })}

//                   {/* Image Handling */}
//                   {section.image && (
//                     <img
//                       src={section.image}
//                       alt={section.title}
//                       style={{
//                         maxWidth: "100%",
//                         height: "auto",
//                         marginTop: "10px",
//                         display: "block",
//                         objectFit: "contain",
//                         overflow: "hidden", // Prevents image overflow
//                       }}
//                     />
//                   )}
//                 </Card.Body>
//               </Card>
//             </Element>
//           ))}
//         </Col>

//         {/* Sidebar Section */}
//         <Col md={3} className="d-none d-md-block">
//           <InThisArticle sections={chapter.sections} onSelectSection={onSelectSection} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Content;




// import React,{useRef, useEffect} from "react";
// import { Container, Row, Col, Card, Breadcrumb } from "react-bootstrap";
// import { Element } from "react-scroll";
// import ReactMarkdown from "react-markdown";
// import InThisArticle from "../inThisArticle";

// const NAVBAR_HEIGHT = 56; // Adjust this based on your navbar height

// const Content = ({ chapter, selectedSection, onSelectSection }) => {
//   const contentRef = useRef(null);
//   useEffect(() => {
//     if (contentRef.current) {
//       contentRef.current.scrollTop = 0;
//     }
//   }, [chapter]); // Runs whenever a new chapter is selected
//   if (!chapter)
//     {
//      return (
//       <>
//      <h3 className="text-center mt-4 mb-4">Project Management Documentation</h3>
//      <p>This documentation serves as a comprehensive guide to project management principles, methodologies, frameworks, and best practices. It is designed to help project managers, teams, and stakeholders understand the essential components of successful project execution.</p>
//      <h4>Who Is This Documentation For?</h4>
//      <p><h6>This guide is beneficial for: </h6>
// <br/>

// <strong>Aspiring & Experienced Project Managers</strong> – To refine skills and adopt industry best practices.<br/>
// <strong>Business Leaders & Stakeholders</strong> – To understand project workflows and governance.<br/>
// <strong>Team Members & Contributors</strong> – To align with project goals and methodologies.<br/>
// <strong>Students & Researchers</strong> – To learn about project management concepts and frameworks.</p>

// <h4 style = {{marginTop: "10px"}}>--Select a topic from left hand side</h4>
//      </>
//      )

//     }
      

//   return (
//     <Container fluid style = {{marginTop : "-14px"}}>
//       <Row>
//         {/* Content Section with Separate Scrollbar */}
//         <Col
//           md={9}
//           id="content-scroll-container" // Add this ID
//           className="content-scroll"
//           ref={contentRef} // Attach ref to the scroll container
//           style={{
//             height: `calc(100vh - ${NAVBAR_HEIGHT + 40}px)`, // Added more space for top gap
//             overflowY: "auto",
//             padding: "20px 15px", // Added padding for top and sides
//           }}
//         >
//           {/* Breadcrumb Navigation */}
//           {/* <Breadcrumb className="mb-3">
//             <Breadcrumb.Item onClick={() => onSelectSection(null)} style={{ cursor: "pointer" }}>
//               {chapter.title}
//             </Breadcrumb.Item>
//             {selectedSection && <Breadcrumb.Item active>{selectedSection.title}</Breadcrumb.Item>}
//           </Breadcrumb> */}

//           {/* Main Content Heading */}
//           <h2 className="mb-4">{chapter.title}</h2>

//           {chapter.sections.map((section) => (
//             <Element key={section.id} name={section.id} className="mb-4">
//               <Card className="p-3">
//                 <Card.Body onClick={() => onSelectSection(section)}>
//                   <Card.Title>{section.title}</Card.Title>

//                   {/* Render All Text Fields with Markdown */}
//                   {Object.entries(section).map(([key, value]) => {
//                     if (["id", "title", "image"].includes(key) || !value) return null;

//                     return (
//                       <div
//                         key={key}
//                         className="markdown-content"
//                         style={{
//                           whiteSpace: "pre-wrap",
//                           wordBreak: "break-word",
//                           overflowWrap: "break-word",
//                           maxWidth: "100%",
//                           marginTop: key === "content" ? 0 : "10px",
//                         }}
//                       >
//                         <strong>{key !== "content" && `${key.replace(/_/g, " ")}:`}</strong>
//                         <ReactMarkdown>{value}</ReactMarkdown>
//                       </div>
//                     );
//                   })}

//                   {/* Image Handling */}
//                   {section.image && (
//                     <img
//                       src={section.image}
//                       alt={section.title}
//                       style={{
//                         maxWidth: "100%",
//                         height: "auto",
//                         marginTop: "10px",
//                         display: "block",
//                         objectFit: "contain",
//                         overflow: "hidden", // Prevents image overflow
//                       }}
//                     />
//                   )}
//                 </Card.Body>
//               </Card>
//             </Element>
//           ))}
//         </Col>

//         {/* Sidebar Section */}
//         <Col md={3} className="d-none d-md-block">
//           <InThisArticle sections={chapter.sections} onSelectSection={onSelectSection} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Content;



import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Element } from "react-scroll";
import ReactMarkdown from "react-markdown";
import InThisArticle from "../inThisArticle";

const NAVBAR_HEIGHT = 56; // Adjust based on navbar height

const Content = ({ chapter, selectedSection, onSelectSection }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [chapter]); // Reset scroll on chapter change

  if (!chapter) {
    return (
      <>
        <h3 className="text-center mt-4 mb-4">Project Management Documentation</h3>
        <p>
          This documentation serves as a comprehensive guide to project management principles, methodologies,
          frameworks, and best practices. It is designed to help project managers, teams, and stakeholders understand
          the essential components of successful project execution.
        </p>
        <h4>Who Is This Documentation For?</h4>
        <p>
          <h6>This guide is beneficial for:</h6>
          <br />
          <strong>Aspiring & Experienced Project Managers</strong> – To refine skills and adopt industry best
          practices.<br />
          <strong>Business Leaders & Stakeholders</strong> – To understand project workflows and governance.<br />
          <strong>Team Members & Contributors</strong> – To align with project goals and methodologies.<br />
          <strong>Students & Researchers</strong> – To learn about project management concepts and frameworks.
        </p>
        <h4 style={{ marginTop: "10px" }}>--Select a topic from left-hand side</h4>
      </>
    );
  }

  return (
    <Container fluid style={{ marginTop: "-14px" }}>
      <Row>
        {/* Content Section with Separate Scrollbar */}
        <Col
          md={9}
          id="content-scroll-container"
          className="content-scroll"
          ref={contentRef}
          style={{
            height: `calc(100vh - ${NAVBAR_HEIGHT + 40}px)`,
            overflowY: "auto",
            padding: "20px 15px",
          }}
        >
          {/* Main Content Heading */}
          <h2 className="mb-4">{chapter.title}</h2>

          {chapter.sections.map((section) => (
            <Element key={section.id} name={section.id} className="mb-4">
              <Card className="p-3" id={section.id}> {/* Ensure section ID for navigation */}
                <Card.Body onClick={() => onSelectSection(section)}>
                  <Card.Title>{section.title}</Card.Title>

                  {/* Render All Text Fields with Markdown */}
                  {Object.entries(section).map(([key, value]) => {
                    if (["id", "title", "image"].includes(key) || !value) return null;

                    return (
                      <div
                        key={key}
                        className="markdown-content"
                        style={{
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                          maxWidth: "100%",
                          marginTop: key === "content" ? 0 : "10px",
                        }}
                      >
                        <strong>{key !== "content" && `${key.replace(/_/g, " ")}:`}</strong>
                        <ReactMarkdown>{value}</ReactMarkdown>
                      </div>
                    );
                  })}

                  {/* Image Handling */}
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.title}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                        marginTop: "10px",
                        display: "block",
                        objectFit: "contain",
                        overflow: "hidden",
                      }}
                    />
                  )}
                </Card.Body>
              </Card>
            </Element>
          ))}
        </Col>

        {/* Sidebar Section */}
        <Col md={3} className="d-none d-md-block">
          <InThisArticle sections={chapter.sections} onSelectSection={onSelectSection} />
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
