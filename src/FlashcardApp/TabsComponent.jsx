// // src/components/Tabs.js
// import React from "react";
// import { Nav } from "react-bootstrap";
// import { useNavigate, useLocation } from "react-router-dom";

// const Tabs = ({ selectedType, selectedCategory }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleTabClick = (path) => {
//     if (location.pathname !== path) {
//       navigate(path); // ✅ Navigate only if it's a different path
//     }
//   };

//   const tabs = [
//     { label: "Flashcards", path: "/flashcards" },
//     selectedType && { label: selectedType, path: `/flashcards/${selectedType.toLowerCase()}` },
//     selectedCategory && {
//       label: selectedCategory,
//       path: `/flashcards/${selectedType.toLowerCase()}/${selectedCategory.toLowerCase()}`,
//     },
//   ].filter(Boolean);

//   const isActiveTab = (path) => {
//     const currentPath = location.pathname + location.search;
//     return currentPath === path || location.pathname.startsWith(path);
//   };

//   return (
//     <Nav variant="tabs" defaultActiveKey="/flashcards" style={{ marginBottom: "15px" }}>
//       {tabs.map((tab, index) => (
//         <div key={index} style={{ display: "flex", alignItems: "center" }}>
//           <Nav.Item>
//             <Nav.Link
//               active={isActiveTab(tab.path)}
//               onClick={() => handleTabClick(tab.path)}
//               style={{
//                 cursor: "pointer",
//                 color: "#4748ac",
//                 fontWeight: isActiveTab(tab.path) ? "bold" : "normal",
//                 borderColor: "#4748ac",
//                 outline: "0 !important",
//                 boxShadow: "none !important",
//               }}
//               tabIndex="-1"
//             >
//               {tab.label}
//             </Nav.Link>
//           </Nav.Item>
//           {index !== tabs.length - 1 && (
//             <span style={{ margin: "0 8px", color: "#4748ac", fontWeight: "bold" }}>
//               {">"}
//             </span>
//           )}
//         </div>
//       ))}
//     </Nav>
//   );
// };

// export default Tabs;
