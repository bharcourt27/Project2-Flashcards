import React, { useState } from 'react';
import { createFlashcard } from '../api/flashcardApi';
import { Flashcard } from '../types';

const CreateFlashcard: React.FC = () => {
    const [flashcard, setFlashcard] = useState<Flashcard>({ category: "", front: "", back: "", userId: 0 });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFlashcard({ ...flashcard, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createFlashcard(flashcard.front, flashcard.back, flashcard.userId); // ✅ Updated to match Flashcard model
        setFlashcard({ category: "", front: "", back: "", userId: flashcard.userId });
    };

    return (
        <div>
            <h2>Create a Flashcard</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="category" value={flashcard.category} onChange={handleChange} placeholder="Category" required />
                <input type="text" name="front" value={flashcard.front} onChange={handleChange} placeholder="Front" required />
                <input type="text" name="back" value={flashcard.back} onChange={handleChange} placeholder="Back" required />
                <button type="submit">Add Flashcard</button>
            </form>
        </div>
    );
};

export default CreateFlashcard;