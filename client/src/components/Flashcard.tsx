import { useState } from "react";
import { FlashCardData } from "../interfaces/FlashCardData";

interface FlashcardProps {

    flashcard: FlashCardData;

    removeCard: (id: number) => void;

}
export default function Flashcard({ flashcard, removeCard }: FlashcardProps ) {
  const [flip, setFlip] = useState(false);
  console.log(flashcard)
  const handleDelete = (e: React.MouseEvent<HTMLSpanElement>) => {
  const id = Number((e.target as HTMLSpanElement).id);
  removeCard(id);
  }
  return (
    <div className="col-lg-3 col-md-6 col-sm-12 mb-5">
        <span className="delete-btn" onClick={handleDelete} id = {flashcard.id?.toString()}>🗑️</span>
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
