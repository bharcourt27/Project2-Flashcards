import { useState } from "react";
import { FlashCardData } from "../interfaces/FlashCardData";

export default function Flashcard({ flashcard }: { flashcard: FlashCardData }) {
  const [flip, setFlip] = useState(false);
  const handleDelete = () => {
    console.log("Deleted!")
  }
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
        <span className="delete-btn" onClick={handleDelete}>🗑️</span>
      <div
        className={`card ${flip ? "flip" : ""}`}
        onClick={() => setFlip(!flip)}
      >
        {!flip && <div className="front">{flashcard?.front}</div>}
        {flip && <div className="back">{flashcard?.back}</div>}
      </div>
    </div>
  );
}
