import { Flashcard } from '../types';

const API_BASE_URL = 'http://localhost:3000/api';

export const createFlashcard = async (flashcard: Flashcard): Promise<Flashcard> => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/flashcards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(flashcard),
  });

  if (!response.ok) {
    throw new Error('Failed to create flashcard');
  }

  return response.json();
};

export const getFlashcards = async (): Promise<Flashcard[]> => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/flashcards`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch flashcards');
  }

  return response.json();
};

export const deleteFlashcard = async (id: string): Promise<void> => {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}/flashcards/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete flashcard');
  }
}; 