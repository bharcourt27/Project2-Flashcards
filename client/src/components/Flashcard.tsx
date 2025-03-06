import React, { useState } from 'react';
import { Flashcard as FlashcardType } from '../types';

interface FlashcardProps {
    flashcard: FlashcardType;
}

const Flashcard: React.FC<FlashcardProps> = ({ flashcard }) => {
    const [flipped, setFlipped] = useState<boolean>(false);

    return (
        <div 
            className="flashcard"
            onClick={() => setFlipped(!flipped)}
            style={{
                border: "1px solid #ccc", 
                padding: "20px", 
                textAlign: "center", 
                cursor: "pointer"
            }}
        >
            {flipped ? <p>{flashcard.back}</p> : <p>{flashcard.front}</p>}
        </div>
    );
};

export default Flashcard;