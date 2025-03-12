import axios from 'axios';

const API_URL = 'http://localhost:5000/api/cards';

// ✅ Get all flashcards
export const getFlashcards = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// ✅ Get a single flashcard by ID
export const getFlashcardById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// ✅ Create a new flashcard
export const createFlashcard = async (front: string, back: string, userId: number) => {
  const response = await axios.post(API_URL, { front, back, userId });
  return response.data;
};

// ✅ Delete a flashcard
export const deleteFlashcard = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`);
};