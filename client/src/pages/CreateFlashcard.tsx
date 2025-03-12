import React, { useState } from 'react';
import { createFlashcard } from '../api/flashcardAPI';
import { FlashCardData } from '../interfaces/FlashCardData';

const CreateFlashcard: React.FC = () => {
    const [flashcard, setFlashcard] = useState<FlashCardData>({ front: "", back: ""});
    const [message, setMessage] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFlashcard({ ...flashcard, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await createFlashcard(flashcard.front as string, flashcard.back as string); // ✅ Updated to match Flashcard model
            setFlashcard({front: "", back: "" });
            setMessage('Flashcard created successfully!');
            window.location.assign('/');
        } catch (error) {
            setMessage('Failed to create flashcard. Please try again.');
        }
    };

    return (
        <div className="create-flashcard-container">
            <h2>Create a Flashcard</h2>
            <form onSubmit={handleSubmit} className="flashcard-form">

                <div className="form-group">
                    <label htmlFor="front">Front</label>
                    <textarea
                        id="front"
                        name="front"
                        value={flashcard.front ?? ""}
                        onChange={handleChange}
                        placeholder="Enter front content"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="back">Back</label>
                    <textarea
                        id="back"
                        name="back"
                        value={flashcard.back ?? ""}
                        onChange={handleChange}
                        placeholder="Enter back content"
                        required
                    />
                </div>
                {message && <div className={`message ${message.includes('Failed') ? 'error' : 'success'}`}>{message}</div>}
                <button type="submit" className="submit-button">Create Flashcard</button>
            </form>
        </div>
    );
};

export default CreateFlashcard;