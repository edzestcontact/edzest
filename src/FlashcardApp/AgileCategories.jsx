// const AgileCategories = ({ categories, onSelectCategory, setCurrentCardIndex }) => {
//     const handleCategorySelect = (category) => {
//       onSelectCategory(category);
//       setCurrentCardIndex(0);  // This should work if passed correctly
//     };

//     return (
//       <div className="container text-center mt-4">
//         <div className="row justify-content-center gap-3 mt-4"style={{marginTop : "-12px"}}>
//           {categories.map((category, index) => (
//             <div
//               key={index}
//               className="card shadow-sm col-md-3 col-sm-6"
//               style={{
//                 minWidth: "350px",
//                 height: "140px",
//                 backgroundColor: "#ffffff",
//                 color: "#000000",
//                 cursor: "pointer",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//               }}
//               onClick={() => handleCategorySelect(category)}  // Use handleCategorySelect
//             >
//               <div className="card-body d-flex align-items-center justify-content-center">
//                 <h5 className="card-title text-xl">{category}</h5>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   export default AgileCategories;

// const AgileCategories = ({
//   categories,
//   onSelectCategory,
//   setCurrentCardIndex,
// }) => {
//   const handleCategorySelect = (category) => {
//     onSelectCategory(category);
//     setCurrentCardIndex(0); // ✅ Reset to first flashcard
//   };

//   return (
//     <div className="container text-center mt-4">
//       <div
//         className="row justify-content-center gap-3 mt-4"
//         style={{ marginTop: "-12px" }}
//       >
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="card shadow-sm col-md-3 col-sm-6"
//             style={{
//               minWidth: "350px",
//               height: "140px",
//               backgroundColor: "#ffffff",
//               color: "#000000",
//               cursor: "pointer",
//               transition: "transform 0.3s, box-shadow 0.3s",
//             }}
//             onClick={() => handleCategorySelect(category)} // ✅ Ensure category is set
//           >
//             <div className="card-body d-flex align-items-center justify-content-center">
//               <h5 className="card-title text-xl">{category}</h5>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AgileCategories;


import React from "react";

const AgileCategories = ({ categories = [], onSelectCategory, setCurrentCardIndex }) => {
  const handleCategorySelect = (category) => {
    if (onSelectCategory) {
      onSelectCategory(category);
    }
    if (setCurrentCardIndex) {
      setCurrentCardIndex(0); // ✅ Reset flashcard index
    }
  };

  return (
    <div className="container text-center mt-4">
      <div className="row justify-content-center gap-3 mt-4">
        {categories.length > 0 ? (
          categories.map((category, index) => (
            <div
              key={index}
              className="card shadow-sm col-md-3 col-sm-6"
              style={{
                minWidth: "350px",
                height: "140px",
                backgroundColor: "#ffffff",
                color: "#000000",
                cursor: "pointer",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              role="button"
              tabIndex="0"
              onClick={() => handleCategorySelect(category)} // ✅ Handle click
              onKeyPress={(e) => e.key === "Enter" && handleCategorySelect(category)} // ✅ Handle keyboard selection
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <h5 className="card-title text-xl">{category}</h5>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted">No categories available.</p>
        )}
      </div>
    </div>
  );
};

export default AgileCategories;
