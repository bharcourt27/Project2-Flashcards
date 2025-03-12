import axios from 'axios';
import auth from '../utils/auth';

const API_URL = '/api/cards';

// ✅ Get all flashcards
export const getFlashcards = async () => {
    const flashcardsResponse = await fetch(API_URL, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.getToken()}`,
      },
    });
    if (!flashcardsResponse.ok) {
      console.log('Failed to get flashcards');
      return;
    }

   return await flashcardsResponse.json();
};

// ✅ Get a single flashcard by ID
export const getFlashcardById = async (id: number) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// ✅ Create a new flashcard
export const createFlashcard = async (front: string, back: string) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getToken()}`,
    },
    body: JSON.stringify({front,back})
  });

  // Throw error if response status is not OK (200-299)
  if (!response.ok) {
    const errorData = await response.json(); // Parse error response as JSON
    throw new Error(`Error: ${errorData.message}`); // Throw a detailed error message    
  }

  // Parse the response body as JSON
  const data = await response.json();

  return data;  // Return the data received from the server
};

// ✅ Delete a flashcard
export const deleteFlashcard = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${auth.getToken()}`,
    },
  });

  // Throw error if response status is not OK (200-299)
  if (!response.ok) {
    const errorData = await response.json(); // Parse error response as JSON
    throw new Error(`Error: ${errorData.message}`); // Throw a detailed error message    
  }

  // Parse the response body as JSON
  const data = await response.json();

  return data; 
};
