import { Flashcard } from '../models/card.js';

export const seedCards = async () => {
  await Flashcard.bulkCreate([
    { front: 'What is React?', back: 'A JavaScript library for building user interfaces.', userId: 1 },
    { front: 'What is TypeScript?', back: 'A superset of JavaScript that adds static types.', userId: 2 },
    { front: 'Explain JWT authentication.', back: 'JWT (JSON Web Token) is used to securely transmit information between parties.', userId: 1 },
    { front: 'What is an API?', back: 'An API (Application Programming Interface) allows applications to communicate with each other.', userId: 1 },
    { front: 'What is database normalization?', back: 'The process of organizing a database to reduce redundancy and improve integrity.', userId: 2 },
  ]);
};