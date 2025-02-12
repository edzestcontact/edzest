import React, { useState, useEffect } from "react";

const Flashcard = ({
  currentCard,
  currentCardIndex,
  setCurrentCardIndex,
  totalCards,
  isFlipped,          // ✅ Controlled flip state from parent
  setIsFlipped,        // ✅ Flip handler from parent
}) => {
  const [flipped, setFlipped] = useState(false); // ✅ Local flip state for manual flipping

  // ✅ Sync local flipped state with the parent flip state
  useEffect(() => {
    setFlipped(isFlipped); // When isFlipped changes, update flipped state
  }, [isFlipped]);

  // ✅ Handle card flip when clicked
  const handleFlip = () => {
    setFlipped((prev) => !prev);      // Toggle local flip
    setIsFlipped((prev) => !prev);    // Sync with parent
  };

  // ✅ Load saved index & flip state from localStorage on initial render
  useEffect(() => {
    const savedIndex = localStorage.getItem("currentCardIndex");
    const savedFlipped = localStorage.getItem("flipped");

    const index = Number(savedIndex);
    if (!isNaN(index) && index >= 0 && index < totalCards) {
      setCurrentCardIndex(index);
    } else {
      setCurrentCardIndex(0);
    }

    if (savedFlipped !== null) {
      setFlipped(savedFlipped === "true");
      setIsFlipped(savedFlipped === "true"); // ✅ Sync with parent state
    }
  }, [setCurrentCardIndex, setIsFlipped, totalCards]);

  // ✅ Save the current index & flip state to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("currentCardIndex", currentCardIndex.toString());
    localStorage.setItem("flipped", flipped.toString());
  }, [currentCardIndex, flipped]);

  if (!currentCard) {
    return <div>No flashcards available. Please select a category.</div>;
  }

  return (
    <div
      className="flashcard-container d-flex justify-content-center align-items-center"
      style={{
        width: "100%",
        padding: "20px",
      }}
    >
      <div
        className="card text-center shadow-lg rounded-4 p-3 bg-light"
        style={{
          width: "100%",
          maxWidth: "30rem",
          height: "12rem",
          cursor: "pointer",
          transition: "transform 0.6s",
          transformStyle: "preserve-3d",
          position: "relative",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)", // ✅ Flip effect
        }}
        onClick={handleFlip} // ✅ Trigger flip on click
      >
        {/* ✅ Front Side (Question) */}
        <div
          className="card-body d-flex flex-column justify-content-center align-items-center"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          
          <h3 className="card-text text-dark">
            {currentCard.question || "No Question Available"}
          </h3>
        </div>

        {/* ✅ Back Side (Answer) */}
        <div
          className="card-body d-flex flex-column justify-content-center align-items-center rounded-4"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotateY(180deg)",
          }}
        >
          
          <p className="card-text text-dark">
            {currentCard.answer || "No Answer Available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
