import { useState } from 'react';
import { FlashCardData } from '../interfaces/FlashCardData';


export default function Flashcard({ flashcard }: { flashcard: FlashCardData }) {
    const [flip, setFlip] = useState(false);
    console.log(flashcard);
    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            { !flip && (
                <div className="front">
                    {flashcard?.front}
                </div>
            )}
            { flip && (
                <div className="back">
                    {flashcard?.back}
                </div>
            )}
        </div>
    );
}